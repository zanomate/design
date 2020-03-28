import React, { FC } from 'react'
import styled from 'styled-components'
import { SectionContainerProps, SectionProps } from './Section.props'
import size from '../../../design/size'

const Container = styled.div<SectionContainerProps>`
  margin-top: ${p => size(p.top)};
  margin-left: ${p => size(p.left)};
  margin-right: ${p => size(p.right)};
  margin-bottom: ${p => size(p.bottom)};
`

const Section: FC<SectionProps> = props => {
  const {
    top, left, right, bottom, side,
    className, style, children
  } = props
  return (
    <Container
      top={top || 0}
      left={left || side || 0}
      right={right || side || 0}
      bottom={bottom || 0}
      {...{ className, style }}
    >
      {children}
    </Container>
  )
}

export default Section
