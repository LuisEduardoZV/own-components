import React from 'react'

interface ButtonProps {
	label: string
	onClick: () => void
	disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
	return (
		<button onClick={onClick} disabled={disabled} className='bg-blue-500 text-white rounded hover:bg-blue-700'>
			{label}
		</button>
	)
}
