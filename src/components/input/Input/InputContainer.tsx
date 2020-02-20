import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInputContext } from './Input'
import size, { Size } from '../../../design/size'
import themed from '../../../theme/themed'
import { ContainerProps } from '../../../types/props'
import Color from '../../../design/color'
import { BORDER_RADIUS } from '../../../design/border'

const Container = styled(motion.div)<{ width?: Size }>`
  position: relative;
  height: ${size(40)};
  width: ${p => size(p.width)};
  user-select: none;
  
  &, & > * {
    border-radius: ${size(BORDER_RADIUS)};
  }
`

const Background = styled.div<{ background: Color; border: Color }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${themed.colorFrom('background')};
  border-color: ${themed.colorFrom('border')};
  border-width: ${size(1)};
  border-style: solid;
`

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  
  & > *:first-child {
    border-top-left-radius: ${size(BORDER_RADIUS)};
    border-bottom-left-radius: ${size(BORDER_RADIUS)};
  }
  
  & > *:last-child {
    border-top-right-radius: ${size(BORDER_RADIUS)};
    border-bottom-right-radius: ${size(BORDER_RADIUS)};
  }
`

const InputContainer: FC<ContainerProps> = props => {
  const { children } = props
  const { colorSchema, width, focusedElements } = useInputContext()

  const variants = {
    blur: { scale: 1 },
    focus: { scale: 1.05 }
  }

  return (
    <Container
      initial="blur"
      variants={variants}
      animate={focusedElements.length ? 'focus' : 'blur'}
      width={width}
    >
      <Background
        background={colorSchema.base}
        border={colorSchema.details}
      />
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default InputContainer
