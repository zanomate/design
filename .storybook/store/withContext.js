import React from 'react'
import styled from 'styled-components'
import ThemeProvider from '../../src/theme/Theme'
import Layout from '../../src/components/layout/Layout/Layout'
import themed from '../../src/theme/themed'
import Color from '../../src/design/color'
import size from '../../src/design/size'

const StoryLayout = styled(Layout)`
  padding-top: ${size(24)};
  background: ${themed.color(Color.GREY_ULTRA_LIGHT)};
`

const withContext = (Story) => {
  return (
    <ThemeProvider>
      <StoryLayout>
        <Story />
      </StoryLayout>
    </ThemeProvider>
  )
}

export default withContext
