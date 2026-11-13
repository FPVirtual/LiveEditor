// LMS integration — save/publish bridge.
//
// All network logic for the `liascript-lms` integration lives here, so the
// UI components stay thin and the patch surface against upstream remains
// small. The bridge mutates its config on successful saves (new SHA, renewed
// token) and reports that change through the `onUpdate` callback so the
// caller can persist it in the project meta.

import type { LmsConfig } from "./config";

export type SaveResult =
  | { status: "saved" }
  | {
      status: "conflict";
      resolutionBranch?: string;
      diffUrl?: string;
      currentSha?: string;
    }
  | { status: "auth_error" }
  | { status: "error"; message: string };

export type PublishResult =
  | { status: "published"; cmid?: number; url?: string }
  | { status: "auth_error" }
  | { status: "error"; message: string };

export type LmsUpdate = { sha?: string; token?: string };

export class LmsBridge {
  private cfg: LmsConfig;
  private onUpdate?: (patch: LmsUpdate) => void;

  constructor(cfg: LmsConfig, onUpdate?: (patch: LmsUpdate) => void) {
    this.cfg = cfg;
    this.onUpdate = onUpdate;
  }

  get config(): LmsConfig {
    return this.cfg;
  }

  canSave(): boolean {
    return !this.cfg.readonly && !!this.cfg.token;
  }

  canPublish(): boolean {
    return !!this.cfg.publish_endpoint && this.canSave();
  }

  private applyUpdate(json: any) {
    const patch: LmsUpdate = {};
    if (json?.new_sha) {
      this.cfg.sha = json.new_sha;
      patch.sha = json.new_sha;
    }
    if (json?.token) {
      this.cfg.token = json.token;
      patch.token = json.token;
    }
    if ((patch.sha || patch.token) && this.onUpdate) this.onUpdate(patch);
  }

  /** Save the document content. Conflicts (the file moved on the server
   *  since `original_sha`) come back as `conflict` with the resolution
   *  branch the server created for the user's work. */
  async save(content: string): Promise<SaveResult> {
    let response: Response;
    try {
      response = await fetch(this.cfg.save_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: this.cfg.file,
          branch: this.cfg.branch,
          original_sha: this.cfg.sha,
          content,
          token: this.cfg.token,
        }),
      });
    } catch (e) {
      return { status: "error", message: String(e) };
    }

    const json = await response.json().catch(() => ({}));

    if (response.ok) {
      this.applyUpdate(json);
      return { status: "saved" };
    }
    if (response.status === 409) {
      return {
        status: "conflict",
        resolutionBranch: json.resolution_branch,
        diffUrl: json.diff_url,
        currentSha: json.current_sha,
      };
    }
    if (response.status === 401 || response.status === 403) {
      return { status: "auth_error" };
    }
    return {
      status: "error",
      message: json.message || `${response.status} ${response.statusText}`,
    };
  }

  /** One-click publish (phase 2): the platform generates the artefact
   *  server-side and creates the course module. */
  async publish(format: string): Promise<PublishResult> {
    if (!this.cfg.publish_endpoint) {
      return { status: "error", message: "publish_endpoint not configured" };
    }

    let response: Response;
    try {
      response = await fetch(this.cfg.publish_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: this.cfg.file,
          sha: this.cfg.sha,
          format,
          token: this.cfg.token,
        }),
      });
    } catch (e) {
      return { status: "error", message: String(e) };
    }

    const json = await response.json().catch(() => ({}));

    if (response.ok) {
      this.applyUpdate(json);
      return { status: "published", cmid: json.cmid, url: json.url };
    }
    if (response.status === 401 || response.status === 403) {
      return { status: "auth_error" };
    }
    return {
      status: "error",
      message: json.message || `${response.status} ${response.statusText}`,
    };
  }

  /** Renew the single-use token without saving. Returns false when the
   *  refresh endpoint is missing or the renewal failed. */
  async refreshToken(): Promise<boolean> {
    if (!this.cfg.token_refresh_endpoint) return false;

    try {
      const response = await fetch(this.cfg.token_refresh_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: this.cfg.file,
          branch: this.cfg.branch,
          token: this.cfg.token,
        }),
      });
      if (!response.ok) return false;

      const json = await response.json().catch(() => ({}));
      if (!json.token) return false;

      this.cfg.token = json.token;
      this.onUpdate?.({ token: json.token });
      return true;
    } catch {
      return false;
    }
  }
}
