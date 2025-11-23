import React, { FC } from 'react';
import { TMovieInfo } from 'src/api/responseTypes';

import { Button } from '@components/Button';
import { StyledContainer } from '@components/Styleds/Container/styled';

import { StyledFavoriteMovieCard } from './styled';

type TFavoriteMovieCardProps = {
	movie: TMovieInfo;
	onClick: () => void;
};
export const FavoriteMovieCard: FC<TFavoriteMovieCardProps> = ({ movie, onClick }) => {
	const { name, enName, alternativeName, poster, movieLength, countries, year, rating } = movie;

	return (
		<StyledFavoriteMovieCard>
			<picture>
				<source srcSet={poster && poster.url ? poster.url : `${process.env.PUBLIC_URL}assets/movie_icon.png`} />
				<img
					src={
						poster && poster.url
							? poster.url
							: `${process.env.PUBLIC_URL}assets/movie_icon.png' alt='no poster movie tape icon`
					}
				/>
			</picture>
			<StyledContainer $display='fl' $flex='col' $align='fl-st'>
				<p>{name || alternativeName || enName}</p>
				<p>
					{year && `${year}, `}
					{countries && `${countries[0].name}`}
					{movieLength && `, ${movieLength} мин`}
				</p>
				<p>{rating?.kp.toFixed(1)}</p>
			</StyledContainer>
			<Button icon={`${process.env.PUBLIC_URL}assets/delete_icon.png`} size='btn-plain' onClick={onClick} />
		</StyledFavoriteMovieCard>
	);
};
