import { ContainerProps, StylizableProps } from '../../../types/props'

export interface ResponsiveProps extends ContainerProps, StylizableProps {
  fluid?: boolean
}

export interface ResponsiveContainerProps {
  fluid: boolean
}
