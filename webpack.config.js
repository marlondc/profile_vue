// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // This is the "main" file which should include all other modules
  entry: path.join(__dirname, 'src/main.js'),
  // Where should the compiled file go?
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.common.js'
    }
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        // Ask webpack to check: If this file ends with .vue, then apply some transforms
        test: /\.vue$/,
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /(node_modules|bower_components)/,
        // Transform it with vue
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.woff$|\.woff2$|\.ttf$|\.otf$|\.eot$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000,
              name: '/name=/fonts/[name].[ext]'
            },
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.ico$/,
        loader: 'file-loader',
        options: {
          limit: 100000,
          name: '/images/[name].[ext]'
        }
      },
    ]
  },
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin("styles.css"),
    new UglifyJsPlugin(),
  ]
}