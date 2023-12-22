// Copyright 2023 shawn
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                pathRewrite: {'^/api': '' }
            },
            '/user':{
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                pathRewrite: {'^/user': '' }
            }
          },
        static: {
            directory: path.join(__dirname, 'dist'), // 告诉服务器从哪里提供内容
        },
        compress: true, // 启用gzip压缩
        port: 8081, // 端口号
        open: true, // 自动打开浏览器
        hot: true, // 启用热模块替换功能
        historyApiFallback: true, // 任何404响应都可能需要被替代为index.html
    },
    entry: './client/index.js', // 客户端应用程序的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s?css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader','postcss-loader',]
            }
            // 你可以根据需要添加更多的加载器
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html' // 指向你的HTML文件模板
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'] // 自动解析确定的扩展
    },
    mode: 'development', // 设置为开发模式
};
