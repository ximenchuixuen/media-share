const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader', 
          'css-loader', 
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.html'),
    }),
    // require('autoprefixer')
  ],
  devServer: {
    static: path.join(__dirname,'public'),
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/**': {
        target: 'http://127.0.0.1:3000',
        secure: false, 
      }
    }
  },
}
