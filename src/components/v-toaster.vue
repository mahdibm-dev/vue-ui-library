<script setup lang="ts">
import { useToasterStore } from '@/stores/toaster'
import { clsxm } from '@/utils/clsx'
import { cva } from 'cva'
import { storeToRefs } from 'pinia'
import { computed, type HTMLAttributes } from 'vue'

export type ToastStatus = 'default' | 'success' | 'warning' | 'error'

interface Props {
  status?: ToastStatus
  class?: HTMLAttributes['class']
}
withDefaults(defineProps<Props>(), {
  status: 'default',
  class: ''
})

const toastVariants = computed(() =>
  cva('flex justify-between my-1 gap-2 p-2 ', {
    variants: {
      status: {
        default:
          'bg-white text-primary-800 border-solid border border-secondary-tint shadow-lg rounded-md ',
        success:
          'bg-success-tint text-success border-solid border border-success shadow-lg rounded-md ',

        error: 'bg-error-tint text-error border-solid border border-error shadow-lg rounded-md ',

        warning:
          'bg-warning-tint text-warning border-solid border border-warning shadow-lg rounded-md '
      }
    },
    defaultVariants: {
      status: 'default'
    }
  })
)

const toastStore = useToasterStore()
const { toasts } = storeToRefs(toastStore)
</script>
]
<template>
  <Teleport to="body">
    <transition-group
      v-if="toasts.length"
      name="toast"
      tag="ul"
      class="fixed z-50 p-2 flex flex-col w-full max-w-80 top-1 right-1"
      enter-active-class="transition ease-out duration-500"
      leave-active-class="transition ease-out duration-500"
      enter-class="opacity-0 translate-x-8"
      enter-to-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-8"
      move-class="transition duration-500"
    >
      <li v-for="toast in toasts" :key="toast.text" class="w-full">
        <div :class="clsxm(toastVariants({ status: toast.status }))">
          <i v-if="toast.status === 'success'" class="icon-done text-success text-sm"></i>
          <i v-if="toast.status === 'error'" class="icon-error text-error text-sm"></i>
          <i v-if="toast.status === 'warning'" class="icon-warning text-warning text-sm"></i>
          <span class="flex-1 flex flex-col">
            <span class="text-sm font-bold"> {{ toast.status }} </span>
            <span class="text-sm font-bold"> {{ toast.text }} </span>
          </span>
          <button
            class="h-fit"
            @click="
              () => {
                console.log('clicked')
                toastStore.remove(toast.id)
              }
            "
          >
            <i class="icon-clear cursor-pointer text-sm"></i>
          </button>
        </div>
      </li>
    </transition-group>
  </Teleport>
</template>
