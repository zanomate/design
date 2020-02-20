import React from 'react'
import styled from 'styled-components'
import { boolean, number, select } from '@storybook/addon-knobs'
import { InputElementType } from './InputElement.types'
import InputElement from './InputElement'
import { Input } from '../Input/Input'
import defaultInputColorSchema from '../../../../.storybook/props/defaultInputColorSchema'

const Content = styled.div`
  padding: 10px;
`

const InputElementStory = () => {
  const type = select('type', InputElementType, InputElementType.NORMAL, 'props')
  const applyFlex = boolean('apply flex', false, 'props')
  const flex = number('flex', 0, { min: 0 }, 'props')
  const applyWidth = boolean('apply width', false, 'props')
  const width = number('width', 0, { min: 0 }, 'props')

  return (
    <Input colorSchema={defaultInputColorSchema} width={400}>
      <InputElement
        type={type}
        {...(applyFlex && { flex })}
        {...(applyWidth && { width })}
      >
        <Content>Element</Content>
      </InputElement>
      <InputElement type={InputElementType.NORMAL} flex={1} />
    </Input>
  )
}

export default InputElementStory
