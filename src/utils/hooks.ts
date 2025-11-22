import { useEffect } from 'react';

import { TParams, fetchKinopoiskAPI } from '../api/api';
import {
	genre,
	limit,
	page,
	queryMovieName,
	setError,
	setIsLastPageReached,
	setIsLoading,
	setMovies,
	setPage,
	setPages,
	sortField,
	sortType,
} from '../redux/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { prepareMoviesData } from './prepareMoviesData';

export type TUseFetchDataProps = {
	selectedFields: string[];
	notNullFields: string[];
};

export const useFetchData = ({ selectedFields, notNullFields }: TUseFetchDataProps) => {
	const dispatch = useAppDispatch();
	const selectPage = useAppSelector(page);
	const selectLimit = useAppSelector(limit);
	const selectGenres = useAppSelector(genre);
	const selectSortField = useAppSelector(sortField);
	const selectSortType = useAppSelector(sortType);
	const selectQueryMovieName = useAppSelector(queryMovieName);

	useEffect(() => {
		const getData = async () => {
			try {
				dispatch(setIsLoading(true));

				const params: TParams = {
					page: selectPage,
					limit: selectLimit,
					...(selectQueryMovieName
						? {
								query: selectQueryMovieName,
							}
						: {
								movieLength: ['!0'],
								'rating.imdb': ['1 - 10'],
								'votes.imdb': ['10000-6666666'],
							}),
				};

				if (!selectQueryMovieName) {
					if (selectGenres !== 'все') {
						params['genres.name'] = [selectGenres];
					}

					params.sortField = selectSortField;
					params.sortType = selectSortType;
				}

				const fetchResults = await fetchKinopoiskAPI({
					params,
					selectedFields,
					notNullFields,
				});

				if (fetchResults.page === 1) {
					dispatch(setPages(fetchResults.pages));
				}

				const preparedMovies = prepareMoviesData(fetchResults.docs);

				if (preparedMovies.length > 0) {
					dispatch(setMovies(preparedMovies));
				} else if (
					preparedMovies.length === 0 &&
					fetchResults.page < fetchResults.pages &&
					selectPage === fetchResults.page
				) {
					dispatch(setPage(selectPage + 1));
				} else {
					dispatch(setIsLastPageReached(true));
				}
			} catch (error: unknown) {
				if (error instanceof Error && 'message' in error) {
					dispatch(setError(error.message));
				}
			} finally {
				dispatch(setIsLoading(false));
			}
		};

		getData();
	}, [selectPage, selectLimit, selectGenres, selectSortField, selectQueryMovieName]);
};
