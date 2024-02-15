<script setup lang="ts">
import Button from '@/components/v-button.vue'
import Modal from '@/components/v-modal.vue'
import { ref } from 'vue'
const open = ref(false)
const handleClick = () => {
  open.value = !open.value
}
function closeModal() {
  open.value = false
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Button variant="solid" color="primary" size="xs" @click="handleClick"> open modal </Button>
    <Modal v-if="open" @close="closeModal">
      <template v-slot:title>
        <h1>title</h1>
      </template>
      <template v-slot:content> body </template>
      <template v-slot:actions>
        <div class="flex justify-between gap-2 items-center">
          <Button variant="solid" color="secondary" size="md" class="w-full">confirm</Button>
          <Button variant="solid" color="error" size="md" @click="handleClick">cancel</Button>
        </div>
      </template>
    </Modal>
  </div>
  <Toaster />
</template>
