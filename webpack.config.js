const path = require('path')

module.exports = {
  entry: './src/react-ultimate-pagination-material-ui.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    library: 'reactUltimatePaginationMaterialUi',
    libraryTarget: 'umd',
  },
  externals:
  [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    /^material-ui(\/.+)?$/
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
