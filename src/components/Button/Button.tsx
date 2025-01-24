import React from 'react'
import { cx } from '../../utils/utils'

import './Button.css'

type ButtonType = 'default' | 'text'
type ButtonVariant = 'solid' | 'outlined' | 'dashed' | 'filled'

interface ButtonProps {
	label: string
	onClick: () => void
	disabled?: boolean
	type?: ButtonType
	className?: string
	variant?: ButtonVariant
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, type = 'default', className = '', variant = 'solid' }) => {
	const baseClasses = 'px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none shadow-own cursor-pointer'

	const typeClasses = {
		default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
		text: 'bg-transparent text-blue-500 hover:underline',
	}

	const classes = `${baseClasses} ${typeClasses[type]}`

	return (
		<button onClick={onClick} disabled={disabled} className={cx(classes, className)}>
			{label}
		</button>
	)
}
