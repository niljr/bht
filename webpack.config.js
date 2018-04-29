const path = require('path');

const options = {
  entry: {
    user: './src/frontend/',
  },

  output: {
    path: path.join(process.cwd(), 'public'),
    filename: 'js/bundle.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [],

};


module.exports = options;