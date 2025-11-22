import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TMovieInfo } from 'src/api/responseTypes';

import { DESKTOP_MIN } from '../../constants/variables';

type TMoviesSliceInitialState = {
	settings: {
		isDesktop: boolean;
	};

	loading: boolean;
	error: string;
	movies: TMovieInfo[];
	page: number;
	pages: number | null;

	limit: number;
	genre: string;
	sortField: string;
	sortType: string;

	queryMovieName: string;
	isLastPageReached: boolean;

	favoriteMovies: TMovieInfo[];
};

const initialState: TMoviesSliceInitialState = {
	settings: {
		isDesktop: window.innerWidth >= DESKTOP_MIN,
	},

	loading: false,
	error: '',
	movies: [],
	page: 1,
	pages: null,

	limit: 20,
	genre: 'все',
	sortField: 'votes.imdb',
	sortType: '-1',

	queryMovieName: '',
	isLastPageReached: false,

	favoriteMovies:
		localStorage.getItem('favorites') === null ? [] : JSON.parse(localStorage.getItem('favorites')),
};

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		updateResponsive: (state, { payload }: PayloadAction<number>) => {
			state.settings.isDesktop = payload >= DESKTOP_MIN;
		},

		setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.loading = payload;
		},
		setError: (state, { payload }: PayloadAction<string>) => {
			state.error = payload;
		},

		setMovies: (state, { payload }: PayloadAction<TMovieInfo[]>) => {
			if (state.page !== 1) {
				state.movies.push(...payload);
			} else {
				state.movies = payload;
			}
		},

		setPage: (state, { payload }: PayloadAction<number>) => {
			state.page = payload;
		},

		setPages: (state, { payload }: PayloadAction<number>) => {
			state.pages = payload;
		},

		setGenre: (state, { payload }: PayloadAction<string>) => {
			state.genre = payload;
		},

		setSortField: (state, { payload }: PayloadAction<string>) => {
			state.sortField = payload;
		},

		toggleFavoriteMovie: (state, { payload }: PayloadAction<TMovieInfo>) => {
			const isInFavorites =
				state.favoriteMovies && state.favoriteMovies.some((movie) => movie.id === payload.id);

			if (isInFavorites) {
				state.favoriteMovies =
					state.favoriteMovies && state.favoriteMovies.filter((movie) => movie.id !== payload.id);
			} else {
				state.favoriteMovies && state.favoriteMovies.push(payload);
			}

			localStorage.setItem('favorites', JSON.stringify(state.favoriteMovies));
		},

		removeFavoriteMovie: (state, { payload }: PayloadAction<TMovieInfo>) => {
			state.favoriteMovies =
				state.favoriteMovies && state.favoriteMovies.filter((movie) => movie.id !== payload.id);

			localStorage.setItem('favorites', JSON.stringify(state.favoriteMovies));
		},

		setQueryMovieName: (state, { payload }: PayloadAction<string>) => {
			state.queryMovieName = payload;
			state.isLastPageReached = initialState.isLastPageReached;
		},

		setIsLastPageReached: (state, { payload }: PayloadAction<boolean>) => {
			state.isLastPageReached = payload;
		},

		resetParamsState: (state) => {
			state.page = initialState.page;
			state.pages = initialState.pages;
			state.movies = initialState.movies;
			state.isLastPageReached = initialState.isLastPageReached;
		},
	},
	selectors: {
		isDesktop: (state) => state.settings.isDesktop,
		loading: (state) => state.loading,
		error: (state) => state.error,
		movies: (state) => state.movies,
		page: (state) => state.page,
		pages: (state) => state.pages,
		limit: (state) => state.limit,
		genre: (state) => state.genre,
		sortField: (state) => state.sortField,
		sortType: (state) => state.sortType,
		queryMovieName: (state) => state.queryMovieName,
		isLastPageReached: (state) => state.isLastPageReached,
		favoriteMovies: (state) => state.favoriteMovies,
	},
});

export const {
	updateResponsive,
	setIsLoading,
	setError,
	setMovies,
	setPage,
	setPages,
	setGenre,
	setSortField,
	toggleFavoriteMovie,
	removeFavoriteMovie,
	setQueryMovieName,
	setIsLastPageReached,
	resetParamsState,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;

export const {
	isDesktop,
	loading,
	error,
	movies,
	page,
	pages,
	limit,
	genre,
	sortField,
	sortType,
	favoriteMovies,
	queryMovieName,
	isLastPageReached,
} = moviesSlice.selectors;
