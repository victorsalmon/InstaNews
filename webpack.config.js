var webpack = require ('webpack');
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: './build/webpack-bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ 
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]'
            }
        }]
      }
    ]   
  }
}
