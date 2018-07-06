var path = require('path')
var WebpackStrip = require('strip-loader');

module.exports = {
  context: path.resolve('js'),
	entry: ["./utils.js", "./app.js"],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: 'public'
  },
  watch: true,
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'jshint-loader'
    //   }
    // ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
       {
         test: /\.css$/,
         exclude: /node_modules/,
         loader: "style-loader!css-loader"
       },
       {
         test: /\.scss$/,
         exclude: /node_modules/,
         loader: "style-loader!css-loader!sass-loader"
       },
       {
         test: /\.(png|jpg)$/,
         exclude: /node_modules/,
         loader: "url-loader?limit=100000"
       }
      // {
      //   test: [/\.js$/],
      //   exclude: /node_modules/,
      //   loader: WebpackStrip.loader('console.log')
      // }
    ]
  },
  resolve: {

  }
};
