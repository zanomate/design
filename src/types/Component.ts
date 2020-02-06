import React, { FC } from 'react'

export type Props<T> = {
  style?: object
  className?: string
  children?: React.ReactChildren
} & Partial<T>

export type Component<T> = FC<Props<T>>
