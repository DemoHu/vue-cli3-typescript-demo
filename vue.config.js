/*
 * @Author: Siwen
 * @Date: 2019-08-08 13:50:07
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-12 11:11:52
 * @Description: 
 */
'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: './',
  lintOnSave: process.env.NODE_ENV === 'development',
  // productionSourceMap: false,
  devServer: {
    open: true,
  },
  configureWebpack: config => {
    config.resolve.alias["@"] = resolve("src")
    if (process.env.NODE_ENV === 'production') {
     
    } else {
      // 为开发环境修改配置...
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/colorConfig.scss";
        `
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        },
        elementUI: {
          name: 'chunk-elementUI', // split vant into a single package
          priority: 30, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'), // can customize your rules
          minChunks: 2, //  minimum common number
          priority: 5,
          reuseExistingChunk: true
        }
      }
    })
  }
}