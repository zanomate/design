import { useContext } from 'react'
import { ThemeContext, ThemeSettings } from './context'

const useTheme = (): ThemeSettings => useContext(ThemeContext)

export default useTheme
