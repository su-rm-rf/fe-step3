const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const nodeExternals = require('webpack-node-externals')

const client = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    index: './src/client/index.tsx'
  },
  output: {
    path: resolve(__dirname, '../dist/static'),
    filename: 'client.js',
    // clean: true,
  },
})

const server = merge(common, {
  mode: 'development',
  entry: {
    index: './src/server/index.tsx'
  },
  output: {
    path: resolve(__dirname, '../dist/static'),
    filename: 'server.js',
  },
  target: 'node',
  externals: [nodeExternals()]
})

module.exports = [client, server]