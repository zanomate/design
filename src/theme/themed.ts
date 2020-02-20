import { ThemedStyledProps } from 'styled-components'
import { ThemeConfig } from './Theme'
import Color from '../design/color'
import { Font } from '../design/font'

const themed = {
  color: (colorName: Color) => (
    (p: ThemedStyledProps<any, ThemeConfig>) => p.theme.colors[colorName]
  ),
  colorFrom: (colorProp: string) => (
    (p: ThemedStyledProps<any, ThemeConfig>) => p.theme.colors[p[colorProp]]
  ),
  font: (fontName: Font) => (
    (p: ThemedStyledProps<any, ThemeConfig>) => p.theme.fonts[fontName]
  ),
  fontFrom: (fontProp: string) => (
    (p: ThemedStyledProps<any, ThemeConfig>) => p.theme.fonts[fontProp]
  )
}

export default themed
