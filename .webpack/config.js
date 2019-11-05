const fs = require('fs')
const path = require('path')
const AutoprefixerPlugin = require('autoprefixer')
const PostcssFlexbugsFixesPlugin = require('postcss-flexbugs-fixes')

/* Paths */
const appDir = fs.realpathSync(process.cwd())
const outDir = path.resolve(appDir, 'lib')
const srcDir = path.resolve(appDir, 'src')
const indexJsFile = path.resolve(srcDir, 'index.js')
const webpackDir = path.resolve(appDir, '.webpack')
const polyfills = path.resolve(webpackDir, 'polyfills')

/* Filenames */
const libraryName = 'design'
const outputFile = 'design.js'

module.exports = {
  bail: true,
  mode: 'development',
  devtool: 'inline-source-map',
  // optimization: {
  //   minimize: true
  // },
  // entry: [polyfills, indexJsFile],
  entry: './src/index.ts',
  output: {
    path: outDir,
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    // modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.css']
  },
  module: {
    // strictExportPresence: true,
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                PostcssFlexbugsFixesPlugin(),
                AutoprefixerPlugin()
              ]
            }
          }
        ]
      }
    ]
  }
}
