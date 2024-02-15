<script setup lang="ts">
import { cva } from 'cva'
import { clsxm } from '@/utils/clsx'
import { computed, type HTMLAttributes } from 'vue'

interface Props {
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full' | 'fit'
  rounded?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | boolean
  disabled?: boolean
  class?: HTMLAttributes['class']
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  color: 'primary',
  size: 'lg',
  rounded: '3xl',
  disabled: false,
  class: ''
})
const button = computed(() =>
  cva(
    [
      'flex w-full items-center justify-center gap-x-3 whitespace-nowrap rounded-3xl text-center text-white px-4 py-2',
      'focus:outline focus:outline-4',
      'disabled:bg-gray disabled:text-white disabled:border-none disabled:outline-none disabled:cursor-not-allowed'
    ],
    {
      variants: {
        variant: {
          solid: '',
          outline: 'bg-transparent border-solid border border-primary-600',
          ghost: ''
        },
        color: {
          primary: 'bg-primary-600 focus:outline-primary-200',
          secondary:
            'bg-secondary border-none hover:bg-secondary-dark focus:hover:bg-secondary  focus:!outline-secondary-tint',
          error:
            'bg-error border-none hover:bg-error-dark focus:hover:bg-error  focus:!outline-error-tint',
          success:
            'bg-success border-none hover:bg-success-dark focus:hover:bg-success  focus:!outline-success-tint',
          info: 'bg-info border-none hover:bg-info-dark focus:hover:bg-info  focus:!outline-info-tint'
        },
        size: {
          xs: 'max-w-xs',
          sm: 'max-w-sm',
          md: 'max-w-md',
          lg: 'max-w-lg',
          full: 'w-full',
          fit: 'max-w-fit'
        },
        rounded: {
          md: 'rounded-md',
          lg: 'rounded-lg',
          xl: 'rounded-xl',
          '2xl': 'rounded-2xl',
          '3xl': 'rounded-3xl',
          false: 'rounded-none',
          true: '3xl'
        }
      },
      compoundVariants: [
        {
          variant: 'solid',
          color: 'primary',
          class: 'border-none hover:bg-primary-700'
        },
        {
          variant: 'outline',
          color: 'primary',
          class: 'bg-transparent   border-primary-600 text-primary-600 hover:bg-primary-600/10'
        },
        {
          variant: 'ghost',
          color: 'primary',
          class:
            'bg-transparent   border-none text-primary-600  hover:bg-primary-50 focus:hover:bg-transparent  hover:text-primary-700 focus:text-primary-800 '
        }
      ]
    }
  )
)
</script>

<template>
  <button
    :disabled="disabled"
    :class="clsxm(button({ variant, color, size, rounded }), props.class)"
  >
    <slot></slot>
  </button>
</template>
