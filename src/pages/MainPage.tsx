import React, { FC } from 'react';

import { MoviesFeedSection } from '@components/MoviesFeedSection';
import { PageContainer } from '@components/Styleds/PageContainer';

import { useFetchData } from '@utils/hooks';

export const selectedFields = [
	'id',
	'name',
	'enName',
	'alternativeName',
	'shortDescription',
	'year',
	'ageRating',
	'movieLength',
	'genres',
	'countries',
	'poster',
	'rating',
	'votes',
];

export const notNullFields = [
	'id',
	'year',
	'movieLength',
	'genres.name',
	'poster.url',
	'rating.imdb',
	'votes.imdb',
	'ageRating',
];

export const MainPage: FC = () => {
	useFetchData({ selectedFields, notNullFields });

	return (
		<PageContainer>
			<MoviesFeedSection />
		</PageContainer>
	);
};
