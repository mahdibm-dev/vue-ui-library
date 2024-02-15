<script setup lang="ts">
import Button from '@/components/v-button.vue'
import { useToast } from '@/components/toast/use-toast'
import Toaster from '@/components/toast/v-toaster.vue'
const { toast } = useToast()
</script>

<template>
  <div class="flex flex-col gap-2">
    <Button
      variant="solid"
      color="primary"
      size="xs"
      @click="() => toast({ text: 'press', status: 'success' })"
    >
      show succes toast
    </Button>
    <Button
      variant="solid"
      color="secondary"
      size="xs"
      @click="() => toast({ text: 'press', status: 'warning' })"
    >
      show warning toast
    </Button>
    <Button
      variant="solid"
      size="xs"
      color="error"
      @click="() => toast({ text: 'press', status: 'error' })"
    >
      show error toast
    </Button>
  </div>
  <Toaster />
</template>
