import path from 'path';
import { Configuration } from 'webpack';
import webpack from 'webpack';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';

import { config } from './common.config';
import { rootPath } from './common.config';

const devConfig: Configuration = {
	mode: 'development',
	devtool: 'source-map',

	devServer: {
		static: {
			// директория со статическими файлами
			directory: path.join(rootPath, 'public'),
			// hot - изменения в модульных файлах будут применяться без полной перезагрузки страницы
			publicPath: '/',
		},
		client: {
			overlay: {
				warnings: true,
				errors: true,
			},
		},
		// обновляет модули без перезагрузки страницы
		hot: true,
		//контролирует, какие файлы WDS будет отслеживать для изменений
		watchFiles: {
			paths: ['src/**/*.{js,jsx,ts,tsx}'],
		},
		// сжатие
		compress: true,
		port: 8080,
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.PUBLIC_URL': JSON.stringify('/'),
		}),
	]
};

export default merge(config, devConfig);
