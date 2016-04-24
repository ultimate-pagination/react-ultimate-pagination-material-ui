module.exports = {
  entry: './src/react-ultimate-pagination-material-ui.js',
  output: {
    path: './dist',
    library: 'reactUltimatePaginationMaterialUi',
    libraryTarget: 'umd',
  },
  externals: [
    'react',
    /^material-ui(\/.+)?$/
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
