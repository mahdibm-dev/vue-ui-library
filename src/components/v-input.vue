<script setup lang="ts">
import { clsxm } from '@/utils/clsx'
import { computed, type HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'

interface Props {
  label?: string
  modelValue?: string
  type?: 'text' | 'password' | 'number'
  placeholder?: string
  error?: boolean
  errorText?: string
  disabled?: boolean
  class?: HTMLAttributes['class']
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  modelValue: '',
  type: 'text',
  placeholder: 'type here',
  error: false,
  errorText: '',
  disabled: false,
  class: ''
})
const model = useVModel(props, 'modelValue')
const computedClass = computed(() => {
  const { error, class: cls } = props
  return clsxm(
    'text-sm w-full px-3 py-2 rounded-md border-solid border border-secondary-tint focus:outline focus:border-none focus:outline-2 focus:outline-primary-600 placeholder:text-sm flex h-10 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:opacity-50',
    error && 'border-error focus:outline-error-tint disabled:bg-error-tint/50 ',
    cls
  )
})
</script>

<template>
  <div class="flex flex-col w-full gap-y-2">
    <label>{{ label }}</label>
    <input
      v-model="model"
      v-bind="$attrs"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
      :class="computedClass"
    />
    <p v-if="props.error" class="text-error">
      {{ errorText }}
    </p>
  </div>
</template>
