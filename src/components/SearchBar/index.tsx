import { DebouncedFunc } from 'lodash';
import React, { FC, useState } from 'react';

import { StyledContainer } from '@components/Styleds/Container/styled';

import {
	Z_INDEX_CROSSICON,
	Z_INDEX_SEARCHICON,
	Z_INDEX_SEARCHINPUT,
} from '../../constants/variables';
import { StyledSearchBar, StyledSearchInput, TStyledSearchInputProps } from './styled';

type TSearchBarProps = TStyledSearchInputProps & {
	placeholder: string;
	onChange: DebouncedFunc<(value: string) => void>;
};

export const SearchBar: FC<TSearchBarProps> = ({ placeholder, onChange, isDesktop }) => {
	const [value, setValue] = useState<string>('');

	const handleValueChange = (value: string) => {
		setValue(value);
	};

	const isNotStringOfSpaces = (value: string) => Boolean(value.length === 0 || /\S/.test(value));

	return (
		<StyledSearchBar tabIndex={0} $display='block' $width='100%' $position='rel'>
			<StyledContainer
				$display='block'
				$position='rel'
				$zIndex={Z_INDEX_SEARCHINPUT}
				$width='inherit'
			>
				<StyledSearchInput
					placeholder={placeholder}
					onChange={(event) => {
						if (isNotStringOfSpaces(event.target.value)) {
							onChange(event.target.value);
						}
						handleValueChange(event.target.value);
					}}
					type='search'
					value={value}
					isDesktop={isDesktop}
				/>
			</StyledContainer>

			{value.length === 0 ? (
				<StyledContainer
					$position='abs'
					$right={'0'}
					$bottom={'0.5rem'}
					$display='block'
					$width='40px'
					$zIndex={Z_INDEX_SEARCHICON}
				>
					<img src={`${process.env.PUBLIC_URL}assets/search_white.png`} alt='search icon' width={'100%'} />
				</StyledContainer>
			) : (
				<StyledContainer
					$position='abs'
					$right={'0'}
					$bottom={'0.5rem'}
					$display='block'
					$width='40px'
					$zIndex={Z_INDEX_CROSSICON}
					onClick={() => {
						handleValueChange('');
						onChange('');
					}}
				>
					<img src={`${process.env.PUBLIC_URL}assets/cross_white.png`} alt='cross delete icon' width={'100%'} />
				</StyledContainer>
			)}
		</StyledSearchBar>
	);
};
