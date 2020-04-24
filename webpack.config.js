const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.s[ac]ss$/i,
    //       use: [
    //         'style-loader',
    //         'css-loader',
    //         {
    //           loader: 'sass-loader',
    //           options: {
    //             webpackImporter: false,
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
  };