import { motion, useAnimation } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'
import Color from '../../design/color'
import { rem } from '../../design/size'
import useTheme from '../../theme/useTheme'
import { ContainerProps, StylizableProps } from '../../types/Comp'

export interface InputElementContainerProps {
  width?: number
  flex?: number
}

const Container = styled(motion.a)<InputElementContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: ${p => rem(p.width)};
  flex-grow: ${p => p.flex};
  flex-shrink: ${p => p.flex};
  border-width: ${rem(5)};
  border-style: solid;
  border-color: transparent;
  cursor: default;
  text-decoration: none;
  user-select: none;
`

export interface InputElementProps
  extends InputElementContainerProps, ContainerProps, StylizableProps {
  tabIndex: number
}

const InputElement: FC<InputElementProps> = props => {
  const { children, ...styles } = props
  const { colors } = useTheme()
  const animation = useAnimation()

  const variants = {
    blur: { borderColor: 'transparent' },
    focus: { borderColor: colors[Color.PRIMARY_STANDARD] }
  }

  return (
    <Container
      initial="blur"
      variants={variants}
      animate={animation}
      onFocus={async () => animation.start('focus')}
      onBlur={async () => animation.start('blur')}
      {...styles}
    >
      {children}
    </Container>
  )
}

export default InputElement
