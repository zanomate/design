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

// const loaderFn = () => {
//   require('./style/index.css')
//
//   const assets = require.context('./assets', true)
//   assets.keys().map(name => assets(name))
//
//   const components = require.context('../src/components', true, /\.stories\.mdx/)
//   components.keys().map(name => components(name))
// }

// configure(loaderFn, module)

// configure(() => {
//   // require('./style/index.css')
//   // require.context('./assets', true)
//   require.context('../src', true, /\.stories\.mdx$/)
// }, module)

require('./style/index.css')

configure(require.context('../src', true, /\.stories\.mdx$/), module)
