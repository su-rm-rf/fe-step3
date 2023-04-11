const { resolve, join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development' 

module.exports = {
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-runtime'],
              // cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /.s?css$/,
        exclude: /node_modules/,
        use: [
          // isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // options: {
            //   modules: true,
            // }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          'less-loader',
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json', '.scss'],
    alias: {
      '@': [join(__dirname, '../src/client')]
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: 'static/css/[name].[chunkhash:8].css'
      filename: 'main.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: resolve(__dirname, '../public'), to: resolve(__dirname, '../dist')}
      ]
    })
  ]
}