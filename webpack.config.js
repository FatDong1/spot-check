var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var devserverpath = 'http://localhost:8081/';
module.exports = {
  // entry: './js/entry.js',
  entry: [
    `webpack-dev-server/client?${devserverpath}`, // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
     path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: __dirname + '/',
    filename: 'app.js',
    publicPath: devserverpath
  },
  
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loaders: [
          'react-hot',
          'babel-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
            limit: 8192
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  // eslint: {
  //   configFile: '.eslintrc'
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
  // target: 'electron'
};

