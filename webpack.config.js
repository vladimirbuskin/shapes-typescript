const path = require('path');
const plugins = require('./webpack/plugins');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:3000');
    sources.push('webpack/hot/dev-server');
  }

  return sources;
}

module.exports = {
  entry: {
    app: getEntrySources([
      //'babel-polyfill',
      './src/index.ts'
    ])
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: '',
    sourceMapFilename: '[name].[hash].js.map',
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  plugins: plugins,

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }

};
