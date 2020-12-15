const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    devtool: "source-map",
    devServer: {
        disableHostCheck: true,
        port: 9876,
        historyApiFallback: true,
        hot: true,
    },
    output: {
        filename: "bundle.js?v=[hash]",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            inject: "body",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanTerminalPlugin(),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            api: path.resolve(__dirname, "src/js/api/"),
            components: path.resolve(__dirname, "src/js/components/"),
            containers: path.resolve(__dirname, "src/js/containers/"),
            pages: path.resolve(__dirname, "src/js/pages/"),
            routes: path.resolve(__dirname, "src/js/routes/"),
            stores: path.resolve(__dirname, "src/js/stores/"),
            config: path.resolve(__dirname, "src/js/config/"),
            utils: path.resolve(__dirname, "src/js/utils/"),
            middleware: path.resolve(__dirname, "src/js/middleware/"),
            decorators: path.resolve(__dirname, "src/js/decorators/"),
            wrappers: path.resolve(__dirname, "src/js/wrappers/"),
            hooks: path.resolve(__dirname, "src/js/hooks/"),
        },
    },
};
