import React from 'react'

export interface ContainerProps {
  children?: React.ReactChildren
}

export interface ExtendibleProps<P> {
  children: (params: P) => React.ReactElement
}

export interface StylizableProps {
  style?: object
  className?: string
}
