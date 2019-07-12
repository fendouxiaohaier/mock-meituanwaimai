const path = require("path");
const fs = require("fs");

const srcDir = path.resolve(__dirname, "./src");
const pagesDir = path.resolve(srcDir, "./pages");


function getEntry() {
    let entryMap = {};

    console.log(pagesDir);

    fs.readdirSync(pagesDir).forEach((pathname) => {
        console.log(pathname);

        let fullPathname = path.resolve(pagesDir, pathname),
            indexDir = path.resolve(pageDir, "./index.js");

       if( fs.statSync(fullPathname).isDirectory() && fs.existsSync(indexDir) ) {
            entryMap[page] = indexDir;
       }
    });

    return entryMap;
}

const entryMap = getEntry();

module.exports = {
    mode: "devolopment",

    entry: entryMap,

    output: {
        path: path.resolve(__dirname, "./dev"),
        filename: "[name].min.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "./src"),
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "./src"),
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
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
    }

};