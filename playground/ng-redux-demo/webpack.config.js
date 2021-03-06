const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "main.js"
    },
    mode : "development",
    devServer : {
        port : 8082,
        contentBase : "./src"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/index.html"
        })
    ]
}