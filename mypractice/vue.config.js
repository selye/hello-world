const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('layout', resolve('src/layout'))
            .set('base', resolve('src/base'))
            .set('static', resolve('src/static'))
    },
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://weread.qq.com',
                ws: true, //是否代理websockets
                changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    }
}