const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: './index.html'
    }),
    new CleanWebpackPlugin()
],
module: {
  rules: [
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      },
      {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env'],
              plugins: [
                  '@babel/plugin-proposal-class-properties'
              ]
                  }
              }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react'],
            plugins: [
                '@babel/plugin-proposal-class-properties'
            ]
                }
            }
    }              
  ]
}
}

