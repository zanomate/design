import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { ColContainerProps, ColProps, ColVAlign } from './Col.types'
import size from '../../../design/size'
import { Breakpoint, minWidth } from '../../../design/breakpoints'

const Container = styled.div<ColContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${p => p.vAlign};
  align-items: stretch;
  flex-grow: 0;
  flex-shrink: 1;
  width: 100%;
  
  & > div:not(:last-child) {
    margin-top: ${p => size(p.gutters)};
    margin-bottom: ${p => size(p.gutters)};
  }
  
  ${p => p.xs && css`
    width: calc(5% * ${p.xs});
  `}
  
  ${p => p.sm && css`
    @media screen and (min-width: ${minWidth(Breakpoint.SM)}px) {
      width: calc(5% * ${p.sm});
    }
  `}
  
  ${p => p.md && css`
    @media screen and (min-width: ${minWidth(Breakpoint.MD)}px) {
      width: calc(5% * ${p.md});
    }
  `}
  
  ${p => p.lg && css`
    @media screen and (min-width: ${minWidth(Breakpoint.LG)}px) {
      width: calc(5% * ${p.lg});
    }
  `}
  
  ${p => p.xl && css`
    @media screen and (min-width: ${minWidth(Breakpoint.XL)}px) {
      width: calc(5% * ${p.xl});
    }
  `}
  
  ${p => p.xxl && css`
    @media screen and (min-width: ${minWidth(Breakpoint.XXL)}px) {
      width: calc(5% * ${p.xxl});
    }
  `}
`

const Col: FC<ColProps> = props => {
  const {
    gutters = 4, vAlign = ColVAlign.TOP,
    children,
    ...otherProps
  } = props
  return (
    <Container {...{ gutters, vAlign, ...otherProps }}>
      {children}
    </Container>
  )
}

export default Col
