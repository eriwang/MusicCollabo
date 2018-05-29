import * as path from "path";

import CopyWebpackPlugin from "copy-webpack-plugin";
import * as webpack from "webpack";

const DIST_PATH = path.resolve(__dirname, "dist");
const STATIC_PATH = path.resolve(DIST_PATH, "static");

const config: webpack.Configuration = {
    entry: "./web_src/index.ts",
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "web_src/index.html", to: DIST_PATH
            },
            {
                from: "web_src/styles.css", to: STATIC_PATH
            }
        ]),
    ],
    output: {
        filename: "bundle.js",
        path: STATIC_PATH
    }
};

export default config;
