require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'react-express-webpack-searchcarAPP',
    description: '汽车搜索应用',
    head: {
      title: 'react-express-webpack-searchcarAPP',
      meta: [
        { name: 'description', content: '汽车搜索应用'},
        { charset: 'utf-8'},
        { property: 'og:site_name', content: 'react-express-webpack-searchcarAPP'},
        { property: 'og:images', content: ''},
        { property: 'og:locale', content: 'zh_CN'},
        { property: 'og:title', content: 'react-express-webpack-searchcarAPP'},
        { property: 'og:description', content: '汽车搜索应用'},
        { property: 'og:card', content: 'summary'},
        { property: 'og:site', content: '@shawn'},
        { property: 'og:creator', content: '@shawn'}
      ]
    }
  }
}, environment);
