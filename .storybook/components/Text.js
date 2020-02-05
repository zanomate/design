import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: ${p => p.fontFamily};
  font-size: ${p => p.fontSize};
`

const Font = ({ fontFamily, fontSize }) => (
  <Container
    fontFamily={fontFamily}
    fontSize={fontSize}
  >
    The quick brown fox jumps over the lazy dog
  </Container>
)

export default Font
