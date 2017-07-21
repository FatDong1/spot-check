var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var devserverpath = 'http://localhost:8080/';
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
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [
          'react-hot',
          'babel-loader',
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
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
