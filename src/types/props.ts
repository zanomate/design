import React from 'react'

export interface ContainerProps {
  children?: React.ReactChildren
}

export interface ExtendibleProps<P> {
  children?: React.ReactChildren | ((params: P) => any)
}

export interface StylizableProps {
  style?: object
  className?: string
}
