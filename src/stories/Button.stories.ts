import Button from '@/components/v-button.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'stories/Button',
  component: Button,
  parameters: {
    slots: {
      default: {
        description: 'Default slot',
        template: `<p>{{ args.default }}</p>`
      }
    }
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'info', 'error'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'full', 'fit'] },
    rounded: { control: 'select', options: ['md', 'lg', 'xl', '2xl', '3xl', true, false] },
    disabled: { control: 'boolean' }
  },
  args: {
    color: 'primary',
    variant: 'solid',
    rounded: 'md',
    size: 'fit',
    default: 'button',
    disabled: false
  } // default value
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary'
  }
}

export const Success: Story = {
  args: {
    color: 'success'
  }
}

export const Info: Story = {
  args: {
    color: 'info'
  }
}

export const Error: Story = {
  args: {
    color: 'error'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
}
