import React from 'react'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'
import Responsive from './Responsive'
import { borderPlaceholder, backgroundPlaceholder } from '../../../../.storybook/utils/placeholders'
import Space from '../Space/Space'

const CustomResponsive = styled(Responsive)`
  border: ${borderPlaceholder};
  background: ${backgroundPlaceholder}
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
