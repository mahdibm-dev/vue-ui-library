<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)

onClickOutside(target, () => closeModal())

const emit = defineEmits(['close'])
function closeModal() {
  emit('close')
}
</script>
<template>
  <div class="fixed min-h-screen min-w-full flex justify-center items-center bg-black/50">
    <div
      ref="target"
      class="bg-white w-full md:max-w-lg max-h-[70vh] overflow-y-scroll flex flex-col gap-y-4 rounded-lg shadow"
    >
      <header
        class="flex justify-between items-center p-4 border-solid border-b border-secondary-tint"
      >
        <slot name="title"></slot>
        <button @click="closeModal" class="text-primary-600 hover:text-primary-800 p-2">X</button>
      </header>
      <main class="p-4">
        <slot name="content"></slot>
      </main>
      <footer class="border-solid border-t border-secondary-tint p-4">
        <slot name="actions"></slot>
      </footer>
    </div>
  </div>
</template>
