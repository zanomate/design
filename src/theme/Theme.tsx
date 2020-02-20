import merge from 'lodash/merge'
import React, { FC } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import Color, { Colors, defaultColors } from '../design/color'
import { defaultFonts, Fonts } from '../design/font'
import { defaultWidths, BreakpointValues } from '../design/breakpoints'

export interface Theme {
  colors: Colors
  fonts: Fonts
  widths: Omit<BreakpointValues, 'base' | 'xs'>
}

export interface ThemeConfig {
  colors?: Partial<Colors>
  fonts?: Partial<Fonts>
  widths?: Partial<Omit<BreakpointValues, 'base' | 'xs'>>
}

const basicColors = {
  [Color.TRANSPARENT]: 'transparent'
}

export const defaultTheme: Theme = {
  colors: {
    ...basicColors,
    ...defaultColors
  },
  fonts: defaultFonts,
  widths: defaultWidths
}

export interface ThemeProps {
  config?: Theme
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
