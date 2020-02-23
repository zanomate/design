import React, { FC } from 'react'
import styled from 'styled-components'
import Section from './Section'
import { SectionProps } from './Section.props'

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Centered: FC<SectionProps> = props => {
  const { children, ...superProps } = props
  return (
    <Container {...superProps}>
      {children}
    </Container>
  )
}

export default Centered
