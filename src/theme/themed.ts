import { StyledProps } from 'styled-components'
import { ThemeConfig } from './Theme'
import Color from '../design/color'

const themed = {
  color: (colorName: Color) => (
    (p: StyledProps<ThemeConfig>) => p.theme.colors[colorName]
  ),
  font: (colorName: Color) => (
    (p: StyledProps<ThemeConfig>) => p.theme.colors[colorName]
  )
}

export default themed
