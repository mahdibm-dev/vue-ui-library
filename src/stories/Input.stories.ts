import type { Meta, StoryObj } from '@storybook/vue3'
import Input from '@/components/v-input.vue'

const meta = {
  title: 'stories/Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    type: { control: 'select', options: ['text', 'password', 'number'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    errorText: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  args: {
    modelValue: '',
    type: 'text',
    label: 'username',
    placeholder: 'Enter your username',
    error: false,
    errorText: '',
    disabled: false
  } // default value
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const TextInput: Story = {
  args: {
    modelValue: 'username',
    type: 'text',
    label: 'username',
    placeholder: 'Enter your username',
    class: 'max-w-xs'
  }
}

export const ErrorInput: Story = {
  args: {
    modelValue: '',
    type: 'text',
    label: 'username',
    placeholder: 'Enter your username',
    error: true,
    errorText: 'This field is required',
    class: 'max-w-xs'
  }
}

export const DisabledInput: Story = {
  args: {
    modelValue: 'username',
    type: 'text',
    label: 'username',
    placeholder: 'Enter your username',
    disabled: true,
    class: 'max-w-xs'
  }
}
