import React from 'react'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'
import Responsive from './Responsive'
import { placeholderBorder, placeholderBackground } from '../../../../.storybook/utils/placeholders'
import Space from '../Space/Space'

const CustomResponsive = styled(Responsive)`
  border: ${placeholderBorder};
  background: ${placeholderBackground}
`

const ResponsiveStory = () => {
  const props = {
    fluid: boolean('fluid', false, 'props')
  }
  return (
    <CustomResponsive {...props}>
      <Space height={200} />
    </CustomResponsive>
  )
}

export default ResponsiveStory
