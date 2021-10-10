const path = require('path');

function resolve(dir) {
  return path.join(__dirname,dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set('components',resolve('./src/components'))
    .set('assets',resolve('./src/assets'))
  },
    //全局分享样式
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [path.resolve(__dirname, './src/assets/Styles/mixins.scss'),
                   path.resolve(__dirname, './src/assets/Styles/variables.scss')]
    }
  }
}