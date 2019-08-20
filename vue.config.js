const TerserPlugin = require('terser-webpack-plugin')

const vueConfig = {
  filenameHashing: false,
  pages: {
    index: {
      entry: 'src/main.js',
      minify: false
    }
  },
  chainWebpack: (config) => {
    config.optimization.splitChunks(false)
    config.optimization.minimizer([
      new TerserPlugin({
        cache: false,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          warnings: 'verbose',
          compress: {
            drop_console: true,
            drop_debugger: true
          },
          mangle: {
            properties: {
              debug: true
            }
          }
        }
      })
    ])
  }
}

module.exports = vueConfig
