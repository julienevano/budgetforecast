var path = require('path');

// Webpack Plugins
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    publicPath: '',
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[id].[chunkhash].chunk.js',
    pathinfo: false
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.sass|\.scss$/,
      loaders: ['style', 'css', 'autoprefixer','sass?sourceMap']
    }, {
      test: /\.png$/,
      // Any png-image below or equal to 100K will be converted to inline base64 instead
      loader: 'url?limit=10000&mimetype=image/png&name=assets/images/[hash].[ext]'
    }, {
      test: /\.handlebars$/,
      loader: 'handlebars'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.handlebars'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/privacy-policy/index.handlebars'),
      filename: 'privacy-policy/index.html',
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/terms-conditions/index.handlebars'),
      filename: 'terms-conditions/index.html',
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true
      }
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/assets/images/icon.png'),
      prefix: 'assets/icons/favicons-[hash]/',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ]
};