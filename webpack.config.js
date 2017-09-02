const webpack = require('webpack'),
	path = require('path'),
	HtmlPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	merge = require('webpack-merge'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	ImageminPlugin = require('imagemin-webpack-plugin').default

const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
}

const common = {
	entry: [
		PATHS.src + '/script.js'
	],
	output: {
		filename: '[name].js',
		path: PATHS.dist
	},
	module: {
		rules: [
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: "url-loader?limit=10000&mimetype=application/font-woff",
						options:{
							name: './fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: "file-loader",
						options:{
							name: './fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(jpe?g|gif|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './images/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(mp4)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './media/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.pug$/,
				use: [
					{
						loader: 'pug-loader',
						options: {
							pretty: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('./styles.css')
	]
}

const dev = merge(
	common,
	{
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						use: [
							'css-loader'
						]
					})
				},
				{
					test: /\.sass$/,
					use: ExtractTextPlugin.extract({
						use: [
							'css-loader',
							'sass-loader'
						]
					})
				}
			]
		},
		plugins: [
			new HtmlPlugin({
				template: PATHS.src + "/index.pug",
				filename: "index.html"
			})
		]
	}
);

const prod = merge(
	common,
	{
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						use: [
							'css-loader',
							'postcss-loader'
						]
					})
				}
			]
		},
		plugins:[
			new ImageminPlugin({
				test: /\.(jpe?g|gif|png)$/,
				optipng: {
					optimizationLevel: 4
				}
			}),
			new HtmlPlugin({
				template: PATHS.src + "/index.pug",
				filename: "index.html",
				minify: {
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true,
					removeComments: true
				}
			}),
			new UglifyJsPlugin({
				comments: false
			}),
		]
	}
);

/* module.exports = env => {
	if (env === 'development') return dev
	else if (env === 'production') return prod
} */
module.exports = function(){
	return dev
}