import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Comp } from 'types/Comp'
import { borderStyle } from 'design/borders'

export type InputChildren = (value: string) => Element

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string | Element | InputChildren
  children: InputChildren
}

const Container = styled.input`
  ${borderStyle}
`

export const Input: Comp<InputProps> = props => {
  const { placeholder, children, ...otherProps } = props
  return (
    <Container {...otherProps}>
      {children}
    </Container>
  )
}

export default Input
