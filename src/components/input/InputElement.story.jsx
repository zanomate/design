import React from 'react'
import styled from 'styled-components'
import InputElement from './InputElement'
import Input from './Input'
import Color from '../../design/color'
import { rem } from '../../design/size'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const InputElementStory = () => {
  const colorSchema = {
    background: Color.PRIMARY_LIGHT,
    border: Color.PRIMARY_LIGHT,
    content: Color.GREY_SUPER_DARK,
    details: Color.SECONDARY_PALE
  }
  return (
    <Container>
      <Input colorSchema={colorSchema} tabindex={1}>
        <InputElement width={rem(90)} tabIndex={2}>
          El 1
        </InputElement>
        <InputElement width={rem(90)} tabIndex={3}>
          El 2
        </InputElement>
      </Input>
    </Container>
  )
}

export default InputElementStory
