import * as path from "path";

import CopyWebpackPlugin from "copy-webpack-plugin";
import * as webpack from "webpack";

const distPath = path.resolve(__dirname, "dist");
const staticPath = path.resolve(distPath, "static");

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
			from: "web_src/index.html", to: distPath
		},
		{
			from: "web_src/styles.css", to: staticPath
		}
		]),
	],
	output: {
		filename: "bundle.js",
		path: staticPath
	}
};

export default config;
