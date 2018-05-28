import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
	entry: "./web_src/index.ts",
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader"
				// exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".ts"]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};

export default config;
