const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: './client/dist/public/js',
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      {
	      test: /\.scss/,
	      loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded',
	    },
    ],
  },
};
