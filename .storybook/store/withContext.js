import React from 'react'
import ThemeProvider from '../../src/theme/Theme'

const withContext = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}

export default withContext
