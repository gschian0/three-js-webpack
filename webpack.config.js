const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index2.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [{
      test: /\.(glsl|frag|vert)$/,
      exclude: [/node_modules/],
      use: [
        'raw-loader',
        path.resolve('/node_modules/glslify-loader/glslify-loader.js')
      ]
    }]
  },
}
