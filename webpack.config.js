var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            sass: ['vue-style-loader', 'css-loader?sourceMap', 'sass-loader?indentedSyntax&sourceMap']
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["es2015", {"modules": false}]
            ]
          },
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|[ot]tf|mp3|pdf)$/i,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]?[hash]'
          }
        },

      },
      {
        test: /\.ya?ml$/,
        use: ['json-loader', 'yaml-loader']
      },
      {
        test: /\.sass$/,
        use: ['css-loader?sourceMap', 'sass-loader?indentedSyntax&sourceMap']
      }
    ]
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   vue: {
    //     loaders: {
    //       sass: ['vue-style-loader', 'css-loader?sourceMap', 'sass-loader?indentedSyntax&sourceMap']
    //     }
    //   }
    // })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), // FIXME: no source map (add option if need be, { sourceLoaders: true })
  ])
}
