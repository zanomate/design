import React from 'react'
import styled from 'styled-components'
import ThemeProvider from '../../src/theme/Theme'
import Layout from '../../src/components/layout/Layout/Layout'
import themed from '../../src/theme/themed'
import Color from '../../src/design/color'
import { select } from '@storybook/addon-knobs'

const StoryLayout = styled(Layout)`
  background: ${themed.color(Color.GREY_ULTRA_LIGHT)};
`

const withContext = (Story) => {

  const config = select('theme', { 'Default': null }, null, 'config')

  return (
    <ThemeProvider config={config}>
      <StoryLayout>
        <Story />
      </StoryLayout>
    </ThemeProvider>
  )
}

export default withContext
