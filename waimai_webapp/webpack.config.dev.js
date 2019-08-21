const webpack = require("webpack");

const path = require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcDir = path.resolve(__dirname, "./src");
const pagesDir = path.resolve(srcDir, "./pages");

function getHtmlArray(entryMap) {
    let htmlArray = [];

    Object.keys(entryMap).forEach((key) => {
        let fullPath = path.resolve(pagesDir, key+"/index.html");   // 每个page的入口html固定为index.html

        htmlArray.push(new HtmlWebpackPlugin({
            filename: key + ".html",
            template: fullPath,
            chunks: [key]
        }));
    });

    return htmlArray;
}

function getEntry() {
    let entryMap = {};

    console.log(pagesDir);

    fs.readdirSync(pagesDir).forEach((pathname) => {
        console.log(pathname);

        let fullPathname = path.resolve(pagesDir, pathname),
            indexDir = path.resolve(fullPathname, "./index.js");

       if( fs.statSync(fullPathname).isDirectory() && fs.existsSync(indexDir) ) {
            entryMap[pathname] = indexDir;
       }
    });

    return entryMap;
}

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
    mode: "development",

    devtool: "cheap-module-eval-source-map",

    entry: entryMap,

    output: {
        path: path.resolve(__dirname, "./dev"),
        filename: "./[name].[hash].min.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules",
                // 需要安装babel-loader、@babel/core、@babel/preset-env、
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "./src"),
                use:[
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "./src"),
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // Provide path to the file with resources
                            resources: path.resolve(srcDir, "./common/common.scss"),
                        },
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|woff|eot|ttf)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "[name].[ext]",
                            outputPath: "imgs/" 
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ].concat(htmlArray),

    devServer: {
        contentBase: path.resolve(__dirname, "./dev"),
        open: true,
        hot: true
    }

};