const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
require('dotenv').config()
const path = require('path')
const fs = require('fs')
const withOptimizedImage = require('next-optimized-images')

const srcFolder = [
  path.resolve('components'),
  path.resolve('constants'),
  path.resolve('pages')
]

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/less/antd.less'), 'utf8')
)

module.exports = withCSS(withSass(withLess(withOptimizedImage({
  optimizedImagesOptions: {
    optimizedImagesInDev: true,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 60 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 10,
  },
}))))