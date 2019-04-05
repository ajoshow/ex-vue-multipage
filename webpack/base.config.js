const merge = require('webpack-merge');
const pathConfig = require('./path.config.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const config = merge(pathConfig, {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.tsx'],
        alias: {
            'vue$': 'vue/dist/vue', // vue/dist/vue.esm.js
            '@src': path.resolve(__dirname, '../src'),
            '@': path.resolve(__dirname, '../')
        }
    }
});

module.exports = config;
