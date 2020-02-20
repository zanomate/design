import { ContainerProps, StylizableProps } from '../../../types/props'

export type ColSize = (
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
)

export enum ColVAlign {
  TOP = 'flex-start',
  CENTER = 'center',
  BOTTOM = 'flex-end',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around'
}

export interface ColProps extends ContainerProps, StylizableProps {
  gutters?: number
  vAlign?: ColVAlign
  xs?: ColSize
  sm?: ColSize
  md?: ColSize
  lg?: ColSize
  xl?: ColSize
  xxl?: ColSize
}

export interface ColContainerProps {
  gutters: number
  vAlign?: ColVAlign
  xs?: ColSize
  sm?: ColSize
  md?: ColSize
  lg?: ColSize
  xl?: ColSize
  xxl?: ColSize
}
