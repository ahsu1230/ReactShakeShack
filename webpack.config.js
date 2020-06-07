const path = require("path");

module.exports = {
    mode: "development",
    entry: [path.resolve(__dirname, "components/main.js")],
    output: {
        publicPath: "/dist",
        filename: "./bundle.js"
    },
    devServer: {
        host: "localhost",
        port: 8080
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
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    }
};
