// LMS integration — configuration extraction.
//
// A document served for editing may declare, inside its LiaScript header
// comment, a `liascript-lms` block with everything the editor needs to save
// back to the learning platform:
//
//   <!--
//   author: ...
//   liascript-lms:
//     save_endpoint: https://moodle.example/.../save.php
//     publish_endpoint: https://moodle.example/.../publish.php
//     token_refresh_endpoint: https://moodle.example/.../token.php
//     file: unidad-3.md
//     branch: edicion/profesor-x/unidad-3
//     sha: b2e4f6a...
//     token: <single-use, short-lived>
//     readonly: false
//     return_url: https://moodle.example/.../catalog.php?id=...
//   -->
//
// The block is injected by the platform when the document is served and must
// be stripped before the content is edited or saved back — it is re-injected
// on every open. The design is platform-agnostic: any LMS can declare these
// endpoints.

export interface LmsConfig {
  /** POST target for saving `{file, branch, original_sha, content, token}`. */
  save_endpoint: string;
  /** Optional POST target for one-click publishing (format artefact). */
  publish_endpoint?: string;
  /** Optional endpoint to renew the single-use token without saving. */
  token_refresh_endpoint?: string;
  /** Path of the edited document in the repository. */
  file: string;
  /** Editing branch the save commits to. */
  branch: string;
  /** SHA the editing session started from (optimistic locking). */
  sha: string;
  /** Single-use, short-lived token authorising this editing session. */
  token: string;
  /** True when the user may look but not save. */
  readonly: boolean;
  /** Where to send the user back to (course catalog in the LMS). */
  return_url?: string;
}

export interface ExtractedLms {
  lms?: LmsConfig;
  strippedMarkdown: string;
}

const BLOCK_KEY = "liascript-lms";

/**
 * Extract the `liascript-lms` block from the document header and return the
 * parsed config plus the document without the block. Unknown keys are
 * ignored; missing optional keys stay undefined.
 */
export function extractLmsConfig(markdown: string): ExtractedLms {
  const headerMatch = markdown.match(/<!--[\s\S]*?-->/);
  if (!headerMatch || headerMatch.index !== 0) {
    return { strippedMarkdown: markdown };
  }

  const header = headerMatch[0];
  const lines = header.split("\n");
  const keyLine = lines.findIndex((l) => l.trimStart().startsWith(BLOCK_KEY + ":"));
  if (keyLine === -1) {
    return { strippedMarkdown: markdown };
  }

  // Consume the indented `key: value` lines that follow the block key.
  const raw: Record<string, string> = {};
  let end = keyLine + 1;
  while (end < lines.length) {
    const m = lines[end].match(/^\s+(\w+):\s*(.*\S)\s*$/);
    if (!m) break;
    raw[m[1]] = m[2];
    end++;
  }

  const strippedLines = [...lines.slice(0, keyLine), ...lines.slice(end)];
  const strippedMarkdown =
    strippedLines.join("\n") + markdown.slice(headerMatch.index + header.length);

  if (!raw.save_endpoint || !raw.file || !raw.branch || !raw.sha || !raw.token) {
    // An incomplete block is ignored entirely (and stripped), so a malformed
    // injection can never half-enable the integration.
    return { strippedMarkdown };
  }

  return {
    lms: {
      save_endpoint: raw.save_endpoint,
      publish_endpoint: raw.publish_endpoint || undefined,
      token_refresh_endpoint: raw.token_refresh_endpoint || undefined,
      file: raw.file,
      branch: raw.branch,
      sha: raw.sha,
      token: raw.token,
      readonly: raw.readonly === "true",
      return_url: raw.return_url || undefined,
    },
    strippedMarkdown,
  };
}
