import { Size } from '../../../design/size'
import { ExtendibleProps } from '../../../types/props'

export enum InputElementType {
  EMPHASIS = 'emphasis',
  DETAIL = 'detail',
  NORMAL = 'normal'
}

export interface InputElementChildrenProps {
  hasFocus: boolean
  setFocus: (focus: boolean) => void
}

export interface InputElementProps extends ExtendibleProps<InputElementChildrenProps> {
  type: InputElementType
  tabIndex?: number
  width?: Size
  flex?: number
}

export interface InputElementContainerProps extends Omit<InputElementProps, 'type'> {
  background: string
  border: string
  content: string
}
