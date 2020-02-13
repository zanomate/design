import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background: ${p => p.color};
`

const Background = props => {
  const { color, children } = props
  return (
    <Container color={color}>
      {children}
    </Container>
  )
}

export default Background
