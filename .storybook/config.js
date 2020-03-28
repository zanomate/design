import { addDecorator, addParameters, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import withContext from './store/withContext'

addDecorator(withKnobs)
addDecorator(withContext)

addParameters({
  options: {
    name: 'Z Design',
    showPanel: true,
    panelPosition: 'right',
  },
  knobs: {
    escapeHTML: false
  }
})

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

require('./style/index.css')

configure(() => {
  requireAll(require.context('../src', true, /stories\.js$/))
  requireAll(require.context('../src', true, /\.story\.jsx$/))
}, module)
