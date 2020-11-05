const HtmlWebpackInlinePlugin = require('@oxn/html-webpack-inline-plugin');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new HtmlWebpackInlinePlugin({
        compress: false
      })
    ]
  },
}
