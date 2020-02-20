import React from 'react'
import { Input } from './Input'
import defaultInputColorSchema from '../../../../.storybook/props/defaultInputColorSchema'
import InputElement from '../InputElement/InputElement'
import { InputElementType } from '../InputElement/InputElement.types'

const InputStory = () => (
  <Input
    colorSchema={defaultInputColorSchema}
    width={400}
  >
    <InputElement type={InputElementType.DETAIL} tabIndex={1} />
    <InputElement type={InputElementType.DETAIL} tabIndex={2} width={50} />
  </Input>
)

export default InputStory
