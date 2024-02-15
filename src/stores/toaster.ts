import { defineStore } from 'pinia'
import { type ToastStatus } from '@/components/v-toaster.vue'
import { nanoid } from 'nanoid'

type Toast = {
  text: string
  status: ToastStatus
  id: string
}
type ToastPayload = { duration?: number; text: string }

export const useToasterStore = defineStore({
  id: 'toaster-store',
  state: () => ({
    toasts: [] as Toast[],
    toastTimeouts: new Map<string, ReturnType<typeof setTimeout>>()
  }),
  actions: {
    updateState(payload: ToastPayload, status: ToastStatus) {
      const { text, duration } = payload

      const toast = {
        text,
        status,
        id: nanoid()
      }
      this.toasts = [toast, ...this.toasts]
      this.dismiss(toast.id, duration ?? 3000)
    },
    default(payload: ToastPayload) {
      this.updateState(payload, 'default')
    },
    success(payload: ToastPayload) {
      this.updateState(payload, 'success')
    },

    warning(payload: ToastPayload) {
      this.updateState(payload, 'warning')
    },

    error(payload: ToastPayload) {
      this.updateState(payload, 'error')
    },
    remove(toastId: string) {
      this.toasts = this.toasts.filter((t) => t.id !== toastId)
    },
    dismiss(toastId: string, duration: number) {
      console.log('removing toast', duration)

      if (this.toastTimeouts.has(toastId)) return
      const timeout = setTimeout(() => {
        this.toastTimeouts.delete(toastId)
        this.remove(toastId)
      }, duration)

      this.toastTimeouts.set(toastId, timeout)
    }
  }
})
