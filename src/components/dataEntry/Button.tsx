import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'index'
import { Comp } from 'types/Comp'

interface ButtonProps {
  background: string
  color: string
}

const Container = styled.div<ButtonProps>`
  display: inline-block;
  width: 150px;
  height: 30px;
  background-color: ${p => p.background};
  color: ${p => p.color}
`

const Button: Comp<ButtonProps> = ({ children, background, color }) => {
  const { colors } = useTheme()
  return (
    <Container
      background={background || colors.PRIMARY}
      color={color || colors.SECONDARY}
    >
      {children}
    </Container>
  )
}

export default Button
