import { nanoid } from 'nanoid'
import { computed, ref } from 'vue'

export type ToastStatus = 'default' | 'success' | 'warning' | 'error'

type ToasterToast = {
  text: string
  status: ToastStatus
  id: string
  duration?: number
}

type ToastPayload = {
  text: string
  duration?: number
  status?: ToastStatus
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST'
} as const

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
      duration?: ToasterToast['duration']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

function addToRemoveQueue(toastId: string, duration?: number) {
  if (toastTimeouts.has(toastId)) return

  const timeout = setTimeout(() => {
    console.log('removing toast', duration)
    toastTimeouts.delete(toastId)
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId
    })
  }, duration ?? 3000)

  toastTimeouts.set(toastId, timeout)
}

const state = ref<State>({
  toasts: []
})

function dispatch(action: Action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      state.value.toasts = [action.toast, ...state.value.toasts]
      addToRemoveQueue(action.toast.id, action.toast.duration)
      break

    case actionTypes.DISMISS_TOAST: {
      const { toastId, duration } = action

      if (toastId) {
        addToRemoveQueue(toastId, duration)
      } else {
        state.value.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id, duration)
        })
      }

      break
    }

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) state.value.toasts = []
      else state.value.toasts = state.value.toasts.filter((t) => t.id !== action.toastId)

      break
  }
}

function useToast() {
  return {
    toasts: computed(() => state.value.toasts),
    toast,
    dismiss: (toastId?: string) => dispatch({ type: actionTypes.REMOVE_TOAST, toastId })
  }
}

function toast(props: ToastPayload) {
  const id = nanoid()
  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      status: props.status ?? 'default',
      id
    }
  })
  return {
    id
  }
}

export { toast, useToast }
