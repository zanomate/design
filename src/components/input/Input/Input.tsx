import React, { createContext, FC, useContext, useMemo } from 'react'
import { InputContextValue, InputProps } from './Input.types'
import InputContainer from './InputContainer'
import noop from '../../../utils/noop'
import Color from '../../../design/color'
import useList from '../../../utils/hooks/useList'

const defaultInputContext: InputContextValue = {
  focusedElements: [],
  addFocusedElement: noop,
  removeFocusedElement: noop,
  colorSchema: {
    base: Color.TRANSPARENT,
    contrast: Color.TRANSPARENT,
    details: Color.TRANSPARENT,
    shadow: Color.TRANSPARENT,
    emphasis: Color.TRANSPARENT
  }
}

export const InputContext = createContext<InputContextValue>(defaultInputContext)

export const useInputContext = () => useContext<InputContextValue>(InputContext)

export const Input: FC<InputProps> = props => {
  const { children, ...otherProps } = props
  const [focusedElements, addFocusedElement, removeFocusedElement] = useList<number>()

  const value: InputContextValue = useMemo(
    () => ({
      focusedElements, addFocusedElement, removeFocusedElement, ...otherProps
    }),
    [focusedElements.length, addFocusedElement, removeFocusedElement, ...Object.values(otherProps)]
  )

  return (
    <InputContext.Provider value={value}>
      <InputContainer>
        {children}
      </InputContainer>
    </InputContext.Provider>
  )
}
