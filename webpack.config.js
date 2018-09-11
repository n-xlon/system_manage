const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: path.resolve(__dirname, './src/index.js'),
		vendors: ['vue']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.sass'],
		alias: {
			'vue': 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				use: ['vue-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg|woff|eot|ttf)$/,
				use: [{loader: 'file-loader?limit=4098&name=images/[name].[ext]'}]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("index.css"),
		new htmlWebpackPlugin({
			filename: './index.html',
			template: path.resolve(__dirname, './src/index.html'),
			inject: true
		})
	]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}