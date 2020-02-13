import merge from 'lodash/merge'
import React, { FC } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { basicColors, Colors, defaultColors } from '../design/color'
import { defaultFonts, Fonts } from '../design/font'

export interface Theme {
  colors: Colors
  fonts: Fonts
}

export interface ThemeConfig {
  colors?: Partial<Colors>
  fonts?: Partial<Fonts>
}

export const defaultTheme: Theme = {
  colors: { ...basicColors, ...defaultColors },
  fonts: defaultFonts
}

export interface ThemeProps {
  config: Theme
}

const ThemeProvider: FC<ThemeProps> = props => {
  const { config, children } = props
  const theme = merge(defaultTheme, config)
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <>
        {children}
      </>
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider
