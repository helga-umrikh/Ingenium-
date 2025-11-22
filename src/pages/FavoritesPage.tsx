import React, { FC } from 'react';

import { EmptyFavoriteMoviesSection } from '@components/EmptyFavoriteMovieSection';
import { FavoriteMoviesSection } from '@components/FavoriteMoviesSection';
import { PageContainer } from '@components/Styleds/PageContainer';

import { favoriteMovies } from '../redux/slices/moviesSlice';
import { useAppSelector } from '../redux/store';

export const FavoritesPage: FC = () => {
	const favorites = useAppSelector(favoriteMovies);
	return (
		<PageContainer>
			{favorites && favorites.length ? (
				<FavoriteMoviesSection moviesData={favorites} />
			) : (
				<EmptyFavoriteMoviesSection />
			)}
		</PageContainer>
	);
};
