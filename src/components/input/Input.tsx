import { motion, useAnimation } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'
import Color from '../../design/color'
import { rem } from '../../design/size'
import themed from '../../theme/themed'
import { ContainerProps, StylizableProps } from '../../types/Comp'

export interface InputColorSchema {
  background: Color
  border: Color
  content: Color
  details: Color
}

export interface InputProps
  extends ContainerProps, StylizableProps {
  colorSchema: InputColorSchema
  tabindex: number
}

const Container = styled(motion.a)<InputColorSchema>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: ${rem(40)};
  width: ${rem(200)};
  border-radius: ${rem(20)};
  cursor: default;
  text-decoration: none;
  user-select: none;
  background: ${p => themed.color(p.background)};
  overflow: hidden;
  
  &:first-child {
    border-top-left-radius: ${rem(20)};
    border-bottom-left-radius: ${rem(20)};
  }
  
  &:last-child {
    border-top-right-radius: ${rem(20)};
    border-bottom-right-radius: ${rem(20)};
  }
`

const Input: FC<InputProps> = props => {
  const { colorSchema, children } = props
  const animation = useAnimation()

  const variants = {
    blur: { scale: 1 },
    focus: { scale: 1.15 }
  }

  return (
    <Container
      initial="blur"
      variants={variants}
      animate={animation}
      onFocus={async () => animation.start('focus')}
      onBlur={async () => animation.start('blur')}
      {...colorSchema}
    >
      {children}
    </Container>
  )
}

export default Input
