<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";

defineProps({
  title: {
    type: String,
    default: null,
  },
  show: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close"]);
</script>

<template>
  <div>
    <Transition name="fade">
      <div v-if="show" class="modal-wrapper">
        <div class="modal-wrapper-inner">
          <button class="modal-close-button" @click="$emit('close')">
            <XMarkIcon class="h-8 w-8" />
          </button>

          <h3 v-if="title" class="modal-title">{{ title }}</h3>

          <div class="modal-inner">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-enter-active .modal-wrapper-inner,
.fade-leave-active .modal-wrapper-inner {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .modal-wrapper-inner,
.fade-leave-to .modal-wrapper-inner {
  transform: translateY(-50px);
}
</style>
