import { useContext } from 'react'
import { ThemeContext, ThemeSettings } from './context'
import { defaultTheme } from './Theme'

const useTheme = (): ThemeSettings => {
  const theme = useContext(ThemeContext)
  return theme || defaultTheme
}

export default useTheme
