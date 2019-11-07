import React, { FC } from 'react'

export type ComponentProps<T> = Partial<T> & {
  children?: React.ReactChildren
}

export type Component<T> = FC<ComponentProps<T>>
