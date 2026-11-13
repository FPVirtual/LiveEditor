// URL rewriting helpers shared by the read-only file preview (File.vue) and
// the editable "open from URL" flow (OpenFile.vue). Relative references in a
// remotely loaded document are resolved against the document's own base URL.

export function replaceURLs(base: string, code: string): string {
  return code.replace(
    /(\[[^\]]*\]\()(?!(http:|https:|ipfs:|#|\/\/))\.?\/?([^\)]+)/g,
    `$1${base}$3`
  );
}

export function replaceMacroURLs(
  macro: string,
  base: string,
  code: string
): string {
  // Use the macro parameter to define the script path regex
  const scriptPathRegex = new RegExp(`${macro}:\\s*(.+?)(?=\\n|$)`, "g");

  // Regex to find HTML comments
  const htmlCommentRegex = /<!--([\s\S]*?)-->/g;

  // Loop over all HTML comments
  return code.replace(htmlCommentRegex, (commentMatch, commentContent) => {
    // Loop over all script paths within the comment
    return commentMatch.replace(scriptPathRegex, (scriptMatch, scriptPath) => {
      // Check if the script path needs the base URL added
      if (!/^(http|https|ipfs):/.test(scriptPath.trim())) {
        return `${macro}: ${base}${scriptPath.trim()}`;
      }
      return scriptMatch;
    });
  });
}
