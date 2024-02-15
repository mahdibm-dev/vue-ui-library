// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/vue3'

import UseToast from './use-toast.vue'

const meta: Meta<typeof UseToast> = {
  component: UseToast
}

export default meta
type Story = StoryObj<typeof UseToast>

export const Simple: Story = {}
