'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const SpritesmithPlugin = require('webpack-spritesmith')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: ['babel-polyfill', './src/main.js']
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath:
            process.env.NODE_ENV === 'production'
                ? config.build.assetsPublicPath
                : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            style: '@/style',
            assets: '@/assets'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('test'),
                    resolve('node_modules/webpack-dev-server/client')
                ]
            },
            {
                test: /\.(jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            // 对图标单独设置，以便生成雪碧图
            {
                test: /\.png$/,
                // 使用 file-loader 对 png 图标进行设置
                loaders: ['file-loader']
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        // 雪碧图设置
        new SpritesmithPlugin({
            // 目标小图标
            src: {
                cwd: path.resolve(__dirname, '../src/assets/icons/'), // 图标根路径
                glob: '**/*.png' // 匹配任意 png 图标
            },
            // 输出雪碧图文件及样式文件
            target: {
                image: path.resolve(__dirname, '../src/assets/sprites.png'), // 生成雪碧图目标路径与名称
                css: path.resolve(__dirname, '../src/style/sprites.css')
            },
            // css文件中引用雪碧图的相对位置路径配置
            apiOptions: { cssImageRef: '~@/assets/sprites.png' },
            spritesmithOptions: { padding: 4 }
        })
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        'element-ui': 'ELEMENT',
        'qiniu-js': 'qiniu',
        quill: 'Quill',
        qs: 'Qs',
        echarts: 'echarts'
    }
}
