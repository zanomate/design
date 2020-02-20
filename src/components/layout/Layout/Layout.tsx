import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { LayoutContainerProps, LayoutProps } from './Layout.types'

// $zindex-dropdown:          1000 !default;
// $zindex-sticky:            1020 !default;
// $zindex-fixed:             1030 !default;
// $zindex-modal-backdrop:    1040 !default;
// $zindex-modal:             1050 !default;
// $zindex-popover:           1060 !default;
// $zindex-tooltip:           1070 !default;

const Container = styled(motion.div)<LayoutContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Layout: FC<LayoutProps> = props => {
  const {
    className, style,
    children
  } = props

  return (
    <Container {...{ className, style }}>
      {children}
    </Container>
  )
}

export default Layout
