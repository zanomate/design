import React from 'react'
import Input from './Input'
import Background from '../../../.storybook/components/Background'
import { defaultColors } from '../../design/color'
import defaultInputColorSchema from '../../../.storybook/props/defaultInputColorSchema'

const InputStory = () => (
  <Background color={defaultColors.PRIMARY_LIGHT}>
    <Input colorSchema={defaultInputColorSchema}>test</Input>
  </Background>
)

export default InputStory
