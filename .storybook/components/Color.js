import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 192px;
  height: 128px;
  margin: 8px;
  background-color: ${p => p.color};
  color: ${p => p.color};
`

const Text = styled.span`
  font-family: 'Bold', sans-serif;
  font-size: 18px;
  filter: invert(1) grayscale(1) contrast(20) brightness(20);
`

const Color = ({name, code}) => (
  <Container color={code}>
    <Text>{name}</Text>
    <Text>{code}</Text>
  </Container>
)

export default Color
