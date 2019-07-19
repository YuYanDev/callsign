const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/runtime/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'callsign.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
