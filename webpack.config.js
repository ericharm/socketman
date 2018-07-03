const path = require('path')

module.exports = {

  entry: {
    bundle: path.join(__dirname, '/src/index.js')
  },

  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
    inline: true
  },

  node: {
    fs: 'empty'
  }

}
