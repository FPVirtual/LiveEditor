<script lang="ts">
// LMS save/publish toolbar controls. Rendered only when the current project
// carries `meta.lms` (opened from a learning platform). All network logic
// lives in ts/lms/LmsBridge.ts — this component only maps results to UI
// states. Conflicts are emitted upwards for the conflict modal (C5).

import { LmsBridge, LmsUpdate } from "../../ts/lms/LmsBridge";
import { LmsConfig } from "../../ts/lms/config";

const PUBLISH_FORMATS = ["scorm", "h5p", "epub", "pdf"];

export default {
  name: "LmsSaveBar",
  props: {
    lms: { type: Object as () => LmsConfig, required: true },
    /** Returns the current markdown of the main document. */
    getContent: { type: Function, required: true },
    /** Persists a meta patch ({sha?, token?}) for the current project. */
    persist: { type: Function, required: true },
  },
  emits: ["conflict", "auth-expired"],
  data() {
    return {
      bridge: new LmsBridge(this.lms, (patch: LmsUpdate) =>
        this.persist(patch)
      ),
      saveState: "idle" as "idle" | "saving" | "saved" | "error",
      publishState: "idle" as "idle" | "publishing" | "published" | "error",
      publishFormats: PUBLISH_FORMATS,
      errorMessage: "",
      stateTimer: undefined as ReturnType<typeof setTimeout> | undefined,
      refreshTimer: undefined as ReturnType<typeof setInterval> | undefined,
    };
  },
  watch: {
    // The persisted meta can be replaced externally (conflict flow); the
    // bridge must always work with the freshest config object
    lms(newLms: LmsConfig) {
      this.bridge.updateConfig(newLms);
    },
  },
  mounted() {
    // The editing token is single-use and short-lived: renew it periodically
    // while the editor is open (no-op without token_refresh_endpoint)
    this.refreshTimer = setInterval(() => {
      if (this.canSave && !document.hidden) {
        this.bridge.refreshToken();
      }
    }, 10 * 60 * 1000);
  },
  unmounted() {
    clearInterval(this.refreshTimer);
    clearTimeout(this.stateTimer);
  },
  computed: {
    canSave(): boolean {
      return this.bridge.canSave();
    },
    canPublish(): boolean {
      return this.bridge.canPublish();
    },
    shortSha(): string {
      return (this.lms.sha || "").slice(0, 7);
    },
    branchTitle(): string {
      return this.$t("lms.branchInfo", {
        branch: this.lms.branch,
        sha: this.shortSha,
      }) as string;
    },
  },
  methods: {
    // Transient success/error states return to idle after a moment
    flash(group: "save" | "publish", state: "saved" | "published" | "error") {
      const prop = group === "save" ? "saveState" : "publishState";
      (this as any)[prop] = state;
      clearTimeout(this.stateTimer);
      this.stateTimer = setTimeout(() => ((this as any)[prop] = "idle"), 4000);
    },

    async save() {
      if (!this.canSave || this.saveState === "saving") return;
      this.saveState = "saving";
      this.errorMessage = "";

      const result = await this.bridge.save(this.getContent());

      switch (result.status) {
        case "saved":
          this.flash("save", "saved");
          break;
        case "conflict":
          this.saveState = "idle";
          this.$emit("conflict", result);
          break;
        case "auth_error":
          this.saveState = "error";
          this.errorMessage = this.$t("lms.authError") as string;
          this.$emit("auth-expired");
          break;
        default:
          this.errorMessage = result.message;
          this.flash("save", "error");
      }
    },

    async publish(format: string) {
      if (!this.canPublish || this.publishState === "publishing") return;
      this.publishState = "publishing";
      this.errorMessage = "";

      const result = await this.bridge.publish(format);

      switch (result.status) {
        case "published":
          this.flash("publish", "published");
          break;
        case "auth_error":
          this.publishState = "error";
          this.errorMessage = this.$t("lms.authError") as string;
          this.$emit("auth-expired");
          break;
        default:
          this.errorMessage = result.message;
          this.flash("publish", "error");
      }
    },
  },
};
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <span
      v-if="lms.readonly"
      class="badge text-bg-secondary"
      :title="branchTitle"
      >{{ $t("lms.readonlyBadge") }}</span
    >

    <template v-else>
      <button
        type="button"
        class="btn btn-sm lia-bar-btn"
        :class="
          saveState === 'error'
            ? 'btn-danger'
            : saveState === 'saved'
              ? 'btn-success'
              : 'btn-primary'
        "
        :disabled="!canSave || saveState === 'saving'"
        :title="branchTitle"
        @click="save"
      >
        <i
          class="bi"
          :class="
            saveState === 'saving'
              ? 'bi-arrow-repeat'
              : saveState === 'saved'
                ? 'bi-cloud-check'
                : saveState === 'error'
                  ? 'bi-exclamation-triangle'
                  : 'bi-cloud-upload'
          "
          aria-hidden="true"
        ></i>
        <span class="d-none d-md-inline">{{
          saveState === "saving"
            ? $t("lms.saving")
            : saveState === "saved"
              ? $t("lms.saved")
              : saveState === "error"
                ? $t("lms.retry")
                : $t("lms.save")
        }}</span>
      </button>

      <div v-if="canPublish" class="dropdown">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary lia-bar-btn dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
          :disabled="publishState === 'publishing'"
          :title="branchTitle"
        >
          <i class="bi bi-mortarboard" aria-hidden="true"></i>
          <span class="d-none d-md-inline">{{
            publishState === "publishing"
              ? $t("lms.publishing")
              : publishState === "published"
                ? $t("lms.published")
                : $t("lms.publish")
          }}</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li v-for="format in publishFormats" :key="format">
            <button
              type="button"
              class="dropdown-item text-uppercase"
              @click="publish(format)"
            >
              {{ format }}
            </button>
          </li>
        </ul>
      </div>
    </template>

    <span
      v-if="errorMessage"
      class="small text-danger"
      role="alert"
      style="max-width: 16rem"
      >{{ errorMessage }}</span
    >
  </div>
</template>
