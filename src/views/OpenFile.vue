<script lang="ts">
// Editable "open from URL" flow. Unlike File.vue (read-only preview), this
// view turns the fetched document into a full editor project and hands it
// over to the editor. If the document declares a `liascript-lms` block, its
// config travels with the project meta so the editor can save back to the
// learning platform (see ts/lms/config.ts).

import Toast from "../components/Toast.vue";
import { createProjectFromFiles } from "../ts/createProject";
import { extractLmsConfig, LmsConfig } from "../ts/lms/config";
import { replaceURLs, replaceMacroURLs } from "../ts/urlRewrite";

export default {
  name: "LiaScript-OpenFileView",
  props: ["fileUrl"],
  data() {
    return {
      loading: true,
      // "forbidden" | "network" | "notfound" | undefined
      error: undefined as string | undefined,
      returnUrl: undefined as string | undefined,
    };
  },
  async created() {
    let markdown: string;
    let lms: LmsConfig | undefined;

    try {
      const response = await fetch(this.fileUrl as string);

      if (!response.ok) {
        this.error =
          response.status === 401 || response.status === 403
            ? "forbidden"
            : response.status === 404
              ? "notfound"
              : "network";
        this.loading = false;
        return;
      }

      markdown = await response.text();
    } catch (e) {
      console.warn(e);
      this.error = "network";
      this.loading = false;
      return;
    }

    // Resolve relative references against the document's own base URL,
    // mirroring the read-only preview (File.vue).
    const baseURL = (this.fileUrl as string).replace(/\/[^\/]*$/, "/");
    markdown = replaceURLs(baseURL, markdown);
    markdown = replaceMacroURLs("script", baseURL, markdown);
    markdown = replaceMacroURLs("link", baseURL, markdown);

    const extracted = extractLmsConfig(markdown);
    lms = extracted.lms;
    if (lms) lms.source_url = this.fileUrl as string;
    this.returnUrl = lms?.return_url;

    try {
      const bytes = new TextEncoder().encode(extracted.strippedMarkdown);
      await createProjectFromFiles(
        [{ path: "README.md", bytes, mime: "text/markdown" }],
        lms ? { lms } : {}
      );
      // createProjectFromFiles navigates to the editor on success
    } catch (e) {
      console.warn(e);
      this.error = "network";
      this.loading = false;
    }
  },
  components: { Toast },
};
</script>

<template>
  <div class="container py-5" style="max-width: 42rem">
    <div v-if="loading && !error" class="text-center py-5">
      <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
        <span class="visually-hidden">{{ $t("lms.openLoading") }}</span>
      </div>
      <p class="mt-3">{{ $t("lms.openLoading") }}</p>
    </div>

    <div v-else-if="error" class="alert alert-warning mt-4" role="alert">
      <h4 class="alert-heading">{{ $t("lms.openErrorTitle") }}</h4>
      <p>{{ $t("lms.openError." + error) }}</p>
      <hr />
      <a v-if="returnUrl" class="btn btn-outline-secondary" :href="returnUrl">
        {{ $t("lms.backToLms") }}
      </a>
      <span v-else class="small text-body-secondary">
        {{ $t("lms.reopenHint") }}
      </span>
    </div>
  </div>

  <Toast v-if="!loading && !error">
    {{ $t("lms.openLoading") }}
  </Toast>
</template>
