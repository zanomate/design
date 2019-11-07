import { addDecorator, addParameters, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

addParameters({
  options: {
    name: 'Zanomate Design',
    showPanel: true,
    panelPosition: 'right',
  },
  knobs: {
    escapeHTML: false
  }
})

require('./style/index.css')

configure([
  require.context('./stories', true, /\.stories\.mdx$/),
  require.context('../src', true, /\.stories\.mdx$/)
], module)
