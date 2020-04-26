const path = require("path");

module.exports = {
    entry: "./.components/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://localhost:8080",
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
        writeToDisk: true,
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sass|css)$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    }
};
