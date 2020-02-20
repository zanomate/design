import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { motion } from 'framer-motion'
import { InputElementContainerProps, InputElementProps, InputElementType } from './InputElement.types'
import size from '../../../design/size'
import useTheme from '../../../theme/useTheme'
import { useInputContext } from '../Input/Input'
import themed from '../../../theme/themed'

const Container = styled(motion.a)<InputElementContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${p => size(p.width)};
  flex-grow: ${p => (p.width ? 0 : p.flex)};
  flex-shrink: ${p => (p.width ? 0 : p.flex)};
  cursor: default;
  text-decoration: none;
  user-select: none;
  outline: none;
  overflow: hidden;
  border-style: solid;
  border-width: ${size(1)};
  border-color: ${themed.colorFrom('border')};
  background: ${themed.colorFrom('background')};
  color: ${themed.colorFrom('content')};
`

const InputElement: FC<InputElementProps> = props => {
  const { children, type, tabIndex = -1, width, flex = 0, ...otherProps } = props
  const { colorSchema, addFocusedElement, removeFocusedElement } = useInputContext()
  const { colors } = useTheme()
  const [hasFocus, setHasFocus] = useState(false)

  const variants = {
    blur: {
      zIndex: 1,
      boxShadow: `0px 0px 3px 3px ${transparentize(1, colors[colorSchema.emphasis])}`
    },
    focus: {
      zIndex: 10,
      boxShadow: `0px 0px 3px 3px ${transparentize(0, colors[colorSchema.emphasis])}`
    }
  }

  const getColors = () => {
    switch (type) {
      case InputElementType.EMPHASIS:
        return {
          background: colorSchema.emphasis,
          border: colorSchema.emphasis,
          content: colorSchema.base
        }
      case InputElementType.DETAIL:
        return {
          background: colorSchema.shadow,
          border: colorSchema.details,
          content: colorSchema.contrast
        }
      case InputElementType.NORMAL:
      default:
        return {
          background: colorSchema.base,
          border: colorSchema.details,
          content: colorSchema.contrast
        }
    }
  }

  const setFocus = (focus: boolean) => {
    if (focus) {
      setHasFocus(true)
      addFocusedElement(tabIndex)
    } else {
      setHasFocus(false)
      removeFocusedElement(tabIndex)
    }
  }

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({ hasFocus, setFocus })
    }
    return children
  }

  return (
    <Container
      initial="blur"
      variants={variants}
      animate={hasFocus ? 'focus' : 'blur'}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      tabIndex={tabIndex}
      width={width}
      flex={flex}
      {...getColors()}
      {...otherProps}
    >
      {renderChildren()}
    </Container>
  )
}

export default InputElement
