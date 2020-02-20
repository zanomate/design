import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { ResponsiveContainerProps, ResponsiveProps } from './Responsive.types'
import { Breakpoint, minWidth } from '../../../design/breakpoints'
import size from '../../../design/size'

const fluidContainer = css`
  width: 100%;
`

const responsiveContainer = css`
  width: 100%;
  @media screen and (min-width: ${minWidth(Breakpoint.SM)}px) {
    width: ${p => size(p.theme.widths[Breakpoint.SM])};
  }
  @media screen and (min-width: ${minWidth(Breakpoint.MD)}px) {
    width: ${p => size(p.theme.widths[Breakpoint.MD])};
  }
  @media screen and (min-width: ${minWidth(Breakpoint.LG)}px) {
    width: ${p => size(p.theme.widths[Breakpoint.LG])};
  }
  @media screen and (min-width: ${minWidth(Breakpoint.XL)}px) {
    width: ${p => size(p.theme.widths[Breakpoint.XL])};
  }
  @media screen and (min-width: ${minWidth(Breakpoint.XXL)}px) {
    width: ${p => size(p.theme.widths[Breakpoint.XXL])};
  }
`

const Container = styled.div<ResponsiveContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding-left: ${size(24)};
  padding-right: ${size(24)};
  margin: auto;
  
  ${p => (p.fluid ? fluidContainer : responsiveContainer)}
`

const Responsive: FC<ResponsiveProps> = props => {
  const {
    fluid = false,
    className, style,
    children
  } = props
  return (
    <Container {...{ fluid, className, style }}>
      {children}
    </Container>
  )
}

export default Responsive
