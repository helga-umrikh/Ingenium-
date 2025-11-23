import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { config } from './common.config';
import { rootPath } from './common.config';
import webpack from 'webpack'

const prodConfig: Configuration = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(rootPath, './public/build'),
		clean: true,
		publicPath: "/Ingenium-Movies/"
	},
	plugins: [
			new webpack.DefinePlugin({
				'process.env.PUBLIC_URL': JSON.stringify('/Ingenium-Movies/'),
			}),
		]
};

export default merge(config, prodConfig);
