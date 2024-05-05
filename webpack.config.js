const path = require('path');
const htmlWP = require('html-webpack-plugin');
const cssEP = require('mini-css-extract-plugin');

debugger;
module.exports = {
	entry: "./src/js/app",
	plugins: [
		new htmlWP({
			template: "./src/index.html",
		}),
		new cssEP({
			filename: "main.css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: [
					cssEP.loader,
					'css-loader',
				]
			}
		]
	},
	devServer:{
		static: path.join(__dirname, 'dist')
	}

};