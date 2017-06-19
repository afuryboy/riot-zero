const webpack = require('webpack');
module.exports={

  entry:'./src/js/boot.js',
  output:{

    filename:'bundle.js'
  },
  plugins:[
    new webpack.ProvidePlugin({
            riot: 'riot',
    })
  ],
  module: {
        // preLoaders: [
        //     { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
        // ],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js|\.tag$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015'],
                    compact: false
                }
            }
        ]
    },
    devServer:{
      contentBase: "./src",
      colors: true,
      historyApiFallback: true,
      inline: true
    }
}
