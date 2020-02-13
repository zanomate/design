import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { defaultTheme, Theme } from './Theme'

const useTheme = (): Theme => {
  const theme = useContext(ThemeContext)
  return theme || defaultTheme
}

export default useTheme
