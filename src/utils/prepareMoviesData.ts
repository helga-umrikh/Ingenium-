import { TMovieInfo } from 'src/api/responseTypes';

import { notNullFields } from '@pages/MainPage';

export const prepareMoviesData = (movies: TMovieInfo[]) => {
	const preparedData: TMovieInfo[] = [];
	movies.reduce((acc: TMovieInfo[], movie: TMovieInfo) => {
		const {
			id,
			name,
			enName,
			alternativeName,
			shortDescription,
			poster,
			ageRating,
			movieLength,
			genres,
			countries,
			year,
			rating,
			votes,
		} = movie;

		const preparedMovie: TMovieInfo = {
			id,
			name,
			enName,
			alternativeName,
			shortDescription,
			poster,
			ageRating,
			movieLength,
			genres,
			countries,
			year,
			rating,
			votes,
		};

		const isMovieValid = notNullFields.every((field: string) => {
			if (preparedMovie[field as keyof TMovieInfo] === null) {
				return false;
			} else if (
				preparedMovie.movieLength === 0 ||
				(preparedMovie.rating && preparedMovie.rating.imdb <= 1) ||
				preparedMovie.votes.imdb < 10000
			) {
				return false;
			} else {
				return true;
			}
		});

		isMovieValid && acc.push(preparedMovie);

		return acc;
	}, preparedData);

	return preparedData;
};
