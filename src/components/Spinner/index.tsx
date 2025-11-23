import { FC } from 'react';

import { StyledContainer } from '@components/Styleds/Container/styled';

import { DESKTOP_MIN } from '../../constants/variables';
import { StyledSpinner, TStyledSpinnerProps } from './styled';

type TSpinnerProps = TStyledSpinnerProps;

export const Spinner: FC<TSpinnerProps> = ({ maxwidth, maxheight }) => {
	return (
		<StyledContainer $display='fl' $flex='col' $width='100%' $height='100%'>
			<StyledSpinner
				$display='fl'
				$flex='col'
				$margin={['auto']}
				maxwidth={maxwidth}
				maxheight={maxheight}
			>
				<picture>
					<source srcSet={`${process.env.PUBLIC_URL}assets/film-reel-mob.png`} media={`(max-width: ${DESKTOP_MIN}px)`} />
					<img src={`${process.env.PUBLIC_URL}assets/film-reel-desk.png`} alt='spinner' width={'100%'} height={'100%'} />
				</picture>
			</StyledSpinner>
		</StyledContainer>
	);
};
