import React, { FC } from 'react'
import styled from 'styled-components'

interface TestProps {
  num: number
  str: string
}

const Container = styled.div`
  color: red;
  background-color: black;
  margin: 25px;
`

const Test: FC<TestProps> = ({ num, str }) => (
  <Container>
    {`String ${str} with number ${num}`}
  </Container>
)

export default Test
