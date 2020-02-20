import { ContainerProps, StylizableProps } from '../../../types/props'

export enum RowJustify {
  LEFT = 'flex-start',
  CENTER = 'center',
  RIGHT = 'flex-end',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around'
}

export interface RowProps extends ContainerProps, StylizableProps {
  gutters?: number
  justify?: RowJustify
}

export interface RowContainerProps {
  gutters: number
  justify: RowJustify
}
