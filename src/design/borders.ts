import { css } from 'styled-components'
import { Colors } from 'design/colors'
import Size from 'design/size'

export const borderStyle = css`
  border-color: ${p => p.theme.colors[Colors.GREY_SUPER_DARK]};
  border-width: ${Size.PX_2};
  border-style: solid;
`
