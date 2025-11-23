import React, { FC, useState } from 'react';
import { TMovieInfo } from 'src/api/responseTypes';

import { Banner } from '@components/Banner';
import { StyledContainer } from '@components/Styleds/Container/styled';

import { favoriteMovies, isDesktop, toggleFavoriteMovie } from '../../redux/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { StyledMovieCard, StyledMovieCardCover } from './styled';

type TMovieCardProps = {
	movie: TMovieInfo;
};

export const MovieCard = React.forwardRef(
	({ movie }: TMovieCardProps, ref: React.Ref<HTMLDivElement>) => {
		const dispatch = useAppDispatch();
		const selectIsDesktop = useAppSelector(isDesktop);
		const favorites = useAppSelector(favoriteMovies);
		const [imageError, setImageError] = useState<boolean>(false);
		const {
			id,
			name,
			enName,
			alternativeName,
			poster,
			ageRating,
			movieLength,
			genres,
			countries,
			year,
			rating,
		} = movie;

		return (
			<StyledMovieCard
				$display='fl'
				$flex='col'
				$align='center'
				$justify='fl-st'
				ref={ref}
				$width={`${selectIsDesktop ? '280px' : '180px'}`}
				$height={`${selectIsDesktop ? '480px' : '315px'}`}
			>
				<StyledContainer
					$display='block'
					$position='rel'
					$width={`100%`}
					$height={`85%`}
					$margin={['0', '0', '1rem', '0']}
				>
					<picture>
						<source
							srcSet={
								imageError
									? `${process.env.PUBLIC_URL}assets/movie_icon.png`
									: poster && poster.url
										? poster.url
										: `${process.env.PUBLIC_URL}assets/movie_icon.png`
							}
						/>
						<img
							src={
								imageError
									? `${process.env.PUBLIC_URL}assets/movie_icon.png`
									: poster && poster.url
										? poster.url
										: `${process.env.PUBLIC_URL}assets/movie_icon.png`
							}
							alt='no poster movie tape icon'
							onError={() => {
								setImageError(true);
							}}
						/>
					</picture>
					{typeof ageRating !== 'number' && <Banner title={`${ageRating}+`} />}
					<StyledMovieCardCover
						$width='100%'
						$height='100%'
						$display='fl'
						$flex='col'
						$justify='betw'
						$align='fl-end'
					>
						<StyledContainer
							$display='block'
							$width='40px'
							$height='40px'
							$margin={['1rem']}
							onClick={() => {
								dispatch(toggleFavoriteMovie(movie));
							}}
						>
							<img
								src={`${process.env.PUBLIC_URL}assets/heart${favorites.some((favoriteMovie) => favoriteMovie.id === movie.id) ? '_filled' : ''}.svg`}
								alt='bookmark'
							/>
						</StyledContainer>
						<StyledContainer $display='block' $width='inherit' $padding={['1rem']}>
							<p>{rating?.imdb.toFixed(1)}</p>
							<p>
								{year ? `${year}, ` : ''}
								{countries && countries.length ? `${countries[0].name}, ` : ''}
								{genres && genres.length ? `${genres[0].name} ` : ''}
							</p>
							{movieLength && <p>{movieLength} мин.</p>}
						</StyledContainer>
					</StyledMovieCardCover>
				</StyledContainer>
				<p>{name || alternativeName || enName}</p>
			</StyledMovieCard>
		);
	}
);
