import { css } from 'styled-components';

import * as styleVariables from '../constants/variables';

export const PrimaryStyle = css`
	color: ${styleVariables.DEEP_BLUE};
	background-color: ${styleVariables.COLD_WHITE};
	border: 2px solid ${styleVariables.COLD_WHITE};
	border-radius: 3px;
`;

export const SecondaryStyle = css`
	background-color: transparent;
	border: 2px solid ${styleVariables.COLD_WHITE};
	border-radius: 3px;
	color: ${styleVariables.COLD_WHITE};
`;
