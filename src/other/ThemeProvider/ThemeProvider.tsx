import React, { createContext, ReactNode, useContext } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
	theme: Theme
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

interface ThemeProviderProps {
	initialTheme?: Theme
	children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ initialTheme = 'light', children }) => {
	const [theme, setTheme] = React.useState<Theme>(initialTheme)

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={theme}>{children}</div>
		</ThemeContext.Provider>
	)
}

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
