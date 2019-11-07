const path = require('path')

const tsConfig = path.resolve(__dirname, 'tsconfig.json')

module.exports = [
  {
    name: '@storybook/preset-typescript',
    options: {
      tsLoaderOptions: {
        transpileOnly: true,
        configFile: tsConfig
      },
      // https://github.com/styleguidist/react-docgen-typescript#parseroptions
      tsDocgenLoaderOptions: {
        tsconfigPath: tsConfig,
        // propFilter: () => null,
        // componentNameResolver: () => null,
        // shouldExtractLiteralValuesFromEnum: true,
        // savePropValueAsString: false,
        // docgenCollectionName: null
        // setDisplayName: false,
        // shouldExtractLiteralValuesFromEnum: true
      }
    }
  },
  '@storybook/addon-docs/react/preset'
]
