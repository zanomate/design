import React, { FC } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../index'

interface ContainerProps {
  background: string
  color: string
}

const Container = styled.div<ContainerProps>`
  display: inline-block;
  width: 150px;
  height: 30px;
  background-color: ${p => p.background};
  color: ${p => p.color}
`

const Button: FC<ContainerProps> = ({ children, background, color }) => {
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
