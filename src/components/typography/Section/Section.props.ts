import { ContainerProps, StylizableProps } from '../../../types/props'

export interface SectionProps extends ContainerProps, StylizableProps {
  top?: number
  left?: number
  right?: number
  bottom?: number
  side?: number
}

export interface SectionContainerProps {
  top: number
  left: number
  right: number
  bottom: number
}
