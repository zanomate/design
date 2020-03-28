import React, { FC } from 'react'
import styled from 'styled-components'
import { RowContainerProps, RowJustify, RowProps } from './Row.types'
import size from '../../../design/size'

const Container = styled.div<RowContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.justify};
  align-items: stretch;
  
  & > div {
    padding-left: ${p => size(p.gutters)};
    padding-right: ${p => size(p.gutters)};
  }
`

const Row: FC<RowProps> = props => {
  const {
    gutters = 16,
    justify = RowJustify.CENTER,
    className,
    style,
    children
  } = props
  return (
    <Container {...{ gutters, justify, className, style }}>
      {children}
    </Container>
  )
}

export default Row
