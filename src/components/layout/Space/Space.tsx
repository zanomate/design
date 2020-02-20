import React, { FC } from 'react'
import styled from 'styled-components'
import { SpaceContentProps, SpaceProps } from './Space.props'
import size from '../../../design/size'

const Content = styled.div<SpaceContentProps>`
  display: flex;
  width: ${p => size(p.width)};
  height: ${p => size(p.height)};
  user-select: none;
`

const Space: FC<SpaceProps> = props => {
  const { width = 0, height = 0, className, style } = props
  return (
    <Content {...{ width, height, className, style }} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />
  )
}

export default Space
