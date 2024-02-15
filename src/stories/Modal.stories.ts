// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/vue3'

import Modal from './modal-preview.vue'

const meta: Meta<typeof Modal> = {
  component: Modal
}

export default meta
type Story = StoryObj<typeof Modal>

export const Simple: Story = {}
