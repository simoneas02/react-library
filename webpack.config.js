const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{ 
        exclude: /node_modules/,
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};
