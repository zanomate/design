import Color from '../../../design/color'
import { ContainerProps, StylizableProps } from '../../../types/props'
import { Size } from '../../../design/size'

export interface InputColorSchema {
  base: Color // default background
  contrast: Color // default text
  details: Color // default border
  emphasis: Color // emphasis main color
  shadow: Color // option main color
}

export interface InputProps
  extends ContainerProps, StylizableProps {
  colorSchema: InputColorSchema
  width?: Size
}

export interface InputContextValue extends Omit<InputProps, 'children'> {
  focusedElements: number[]
  addFocusedElement: (element: number) => void
  removeFocusedElement: (element: number) => void
}
