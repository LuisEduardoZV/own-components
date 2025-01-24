import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		label: 'Click me',
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		onClick: () => {},
	},
}
