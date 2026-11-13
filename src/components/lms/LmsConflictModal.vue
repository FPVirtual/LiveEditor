<script lang="ts">
// LMS save-conflict dialog (409). The server kept the user's work on a
// resolution branch; the user chooses between reloading the server version
// (discarding local changes), forcing their version on top of the new head,
// or cancelling and inspecting the diff first.

import Modal from "bootstrap/js/dist/modal";

export default {
  name: "LmsConflictModal",
  props: {
    busy: { type: Boolean, default: false },
  },
  emits: ["reload", "force", "close"],
  data() {
    return {
      modal: null as Modal | null,
      info: {} as {
        resolutionBranch?: string;
        diffUrl?: string;
        currentSha?: string;
      },
    };
  },
  methods: {
    open(info: any) {
      this.info = info || {};
      if (!this.modal) {
        this.modal = new Modal(this.$refs.el as Element);
      }
      this.modal.show();
    },
    close() {
      this.modal?.hide();
      this.$emit("close");
    },
  },
};
</script>

<template>
  <div ref="el" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title h5 fw-bold">{{ $t("lms.conflictTitle") }}</h2>
          <button
            type="button"
            class="btn-close"
            :aria-label="$t('modal.close')"
            @click="close"
          ></button>
        </div>
        <div class="modal-body">
          <p>{{ $t("lms.conflictNote") }}</p>
          <p v-if="info.resolutionBranch" class="small mb-2">
            <i class="bi bi-git me-1" aria-hidden="true"></i
            >{{ $t("lms.conflictBranch", { branch: info.resolutionBranch }) }}
          </p>
          <a
            v-if="info.diffUrl"
            :href="info.diffUrl"
            target="_blank"
            rel="noopener"
            class="small"
          >
            <i class="bi bi-box-arrow-up-right me-1" aria-hidden="true"></i
            >{{ $t("lms.viewDiff") }}
          </a>
          <p class="small text-body-secondary mt-3 mb-0">
            {{ $t("lms.conflictHint") }}
          </p>
        </div>
        <div class="modal-footer flex-wrap">
          <button
            type="button"
            class="btn btn-outline-secondary"
            :disabled="busy"
            @click="close"
          >
            {{ $t("lms.conflictCancel") }}
          </button>
          <button
            type="button"
            class="btn btn-outline-danger"
            :disabled="busy"
            @click="$emit('reload')"
          >
            <i class="bi bi-arrow-clockwise me-1" aria-hidden="true"></i
            >{{ $t("lms.conflictReload") }}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :disabled="busy"
            @click="$emit('force')"
          >
            <i class="bi bi-cloud-upload me-1" aria-hidden="true"></i
            >{{ $t("lms.conflictForce") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
