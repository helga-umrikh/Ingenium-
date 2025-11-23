import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { config } from './common.config';
import { rootPath } from './common.config';

const prodConfig: Configuration = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(rootPath, './public/build'),
		clean: true,
		publicPath: "/Ingenium-Movies/"
	},
};

export default merge(config, prodConfig);
