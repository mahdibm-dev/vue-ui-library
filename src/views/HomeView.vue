<script setup lang="ts">
import { useToast } from '@/components/toast/use-toast'
import Button from '@/components/v-button.vue'
import Input from '@/components/v-input.vue'
import Modal from '@/components/v-modal.vue'
import { ref } from 'vue'
import { useToasterStore } from '@/stores/toaster'
const toasterStore = useToasterStore()

const open = ref(false)
const errorTxt = ref('')
const handleClick = () => {
  open.value = !open.value
  console.log('clicked')
}
function closeModal() {
  open.value = false
}

const { toast } = useToast()
</script>

<template>
  <main
    class="flex p-10 flex-col gap-y-4 justify-center items-center min-h-screen w-screen border-solid border-4 border-red-500"
  >
    <Input modelValue="username" label="username" error :errorText="errorTxt" />
    <p>store-toast</p>
    <Button
      variant="solid"
      color="secondary"
      @click="
        () => {
          console.log('clicked default')
          toasterStore.default({ text: 'default!' })
        }
      "
    >
      default
    </Button>
    <Button
      variant="solid"
      color="error"
      @click="
        () =>
          toasterStore.error({
            text: 'my error content'
          })
      "
    >
      Error
    </Button>
    <Button
      variant="solid"
      color="success"
      @click="() => toasterStore.success({ text: 'success!' })"
      >success</Button
    >
    <Button
      variant="solid"
      @click="() => toasterStore.warning({ text: 'warning!' })"
      class="bg-warning"
      >warning</Button
    >
    <p>use-toast</p>
    <Button
      variant="outline"
      color="primary"
      size="md"
      @click="
        () => {
          toast({ text: 'press', status: 'success' })
        }
      "
    >
      press
    </Button>
    <Button
      variant="outline"
      color="error"
      size="md"
      @click="
        () => {
          toast({ text: 'press', status: 'error' })
        }
      "
    >
      press
    </Button>
    <Button variant="solid" color="secondary" size="md" @click="handleClick">press</Button>
    <Modal v-if="open" @close="closeModal">
      <template v-slot:title>
        <h1>my modal</h1>
      </template>
      <template v-slot:content>
        <Input modelValue="username" label="username" error errorText="error" />
      </template>
      <template v-slot:actions>
        <div class="flex justify-between items-center">
          <Button variant="solid" color="secondary" size="md" class="w-full">confirm</Button>
          <Button variant="outline" color="primary" size="md">cancel</Button>
        </div>
      </template>
    </Modal>
  </main>
</template>
