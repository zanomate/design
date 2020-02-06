import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultFonts, Fonts } from 'design/fonts'
import { Comp } from 'types/Comp'
import { Colors, defaultColors } from 'design/colors'

export interface ThemeConfig {
  colors?: Partial<{ [colorName in keyof Colors]: string }>
  fonts?: Partial<{ [fontName in keyof Fonts]: string }>
}

export const defaultTheme: ThemeConfig = {
  colors: defaultColors,
  fonts: defaultFonts
}

export interface ThemeProps {
  config: ThemeConfig
}

const Theme: Comp<ThemeProps> = props => {
  const { config, children } = props
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...config }}>
      <>
        {children}
      </>
    </ThemeProvider>
  )
}

export default Theme
