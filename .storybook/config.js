import { addDecorator, addParameters, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

addParameters({
  // options: {
  //   name: 'Zanomate Design',
  //   goFullScreen: false,
  //   showStoriesPanel: true,
  //   showAddonPanel: true,
  //   showSearchBox: true,
  //   addonPanelInRight: true,
  //   hierarchySeparator: '.',
  //   hierarchyRootSeparator: null
  // }

  options: {
    showPanel: true,
    panelPosition: 'right',
    // https://storybook.js.org/docs/configurations/theming/
    // theme,
  },
  knobs: {
    escapeHTML: false,
  },
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

configure(require.context('../src', true, /\.stories\.mdx$/), module)
