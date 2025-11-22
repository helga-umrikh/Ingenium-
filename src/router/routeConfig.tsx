import { RouteProps } from 'react-router-dom';

import { FavoritesPage } from '@pages/FavoritesPage';
import { MainPage } from '@pages/MainPage';

export enum AppRoutes {
	MAIN = 'main',
	FAVORITES = 'favorites',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.FAVORITES]: '/favorites',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />,
	},
	[AppRoutes.FAVORITES]: {
		path: RoutePath[AppRoutes.FAVORITES],
		element: <FavoritesPage />,
	},
};
