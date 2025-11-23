import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/Button';
import { Heading } from '@components/Heading';
import { StyledContainer } from '@components/Styleds/Container/styled';

import { StyledEmptyFavoriteMovieSection } from './styled';

export const EmptyFavoriteMoviesSection: FC = () => {
	const navigate = useNavigate();

	return (
		<StyledEmptyFavoriteMovieSection $display='fl' $flex='col' $align='center'>
			<StyledContainer
				$display='fl'
				$flex='col'
				$align='center'
				$justify='fl-st'
				$margin={['2rem', '1rem', '0']}
			>
				<h3>Список любимых фильмов пуст</h3>
				<picture>
					<img src={`${process.env.PUBLIC_URL}assets/drama__icon.png`} />
				</picture>

				<p>
					Вероятнее всего, вы еще не нашли свои любимые фильмы.
					<br /> Для того, чтобы найти любимое кино, перейдите на главную страницу
				</p>
				<picture>
					<img src={`${process.env.PUBLIC_URL}assets/movie-empty__icon.png`} />
				</picture>
				<Button title={'Вернуться назад'} onClick={() => navigate('/')} />
			</StyledContainer>
		</StyledEmptyFavoriteMovieSection>
	);
};
