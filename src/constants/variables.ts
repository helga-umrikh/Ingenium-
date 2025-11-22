//colors
const WHITE: string = '#f4f4f4';
const COLD_WHITE: string = '#e3f0ff';
const BLACK: string = '#1d2334';
const LIGHT_BLUE: string = '#a1b1d4';
const GREY_BLUE: string = '#3b4863';
const DEEP_BLUE: string = '#0a1a44';
const LAVENDER: string = `#9aa5ff`;
const RED: string = `#f51313`;

//fonts
const fontSize: number = 16;
const monoton: string = 'Monoton, sans-serif';
const mulish: string = 'Mulish, sans-serif';

//screen sizes
const DESKTOP_MAX: number = 1440;
const DESKTOP_MIN: number = 769;

//z-index slots
const Z_INDEX_HEADER: number = 1;
const Z_INDEX_SIDEBAR: number = 2;
const Z_INDEX_SELECT_ICON: number = 3;
const Z_INDEX_SELECT: number = 4;
const Z_INDEX_SEARCHINPUT: number = 6;
const Z_INDEX_CROSSICON: number = 7;
const Z_INDEX_SEARCHICON: number = 5;

export type TTheme = {
	colors: {
		mainColor: string;
		gradient: string;
		text: string;
		button?: string;
		plainBackgroud?: string;
	};
};

//themes
const LIGHT_THEME: TTheme = {
	colors: {
		mainColor: WHITE,
		gradient: `radial-gradient(circle, ${WHITE} 0%, ${LIGHT_BLUE} 100%)`,
		text: BLACK,
		button: DEEP_BLUE,
	},
};

const DARK_THEME: TTheme = {
	colors: {
		mainColor: WHITE,
		gradient: `radial-gradient(circle, ${GREY_BLUE} 0%, ${DEEP_BLUE} 100%)`,
		text: WHITE,
		plainBackgroud: DEEP_BLUE,
	},
};

export { WHITE, COLD_WHITE, BLACK, LIGHT_BLUE, GREY_BLUE, DEEP_BLUE, LAVENDER, RED };
export { fontSize, monoton, mulish };
export { DESKTOP_MAX, DESKTOP_MIN };
export {
	Z_INDEX_HEADER,
	Z_INDEX_SIDEBAR,
	Z_INDEX_SEARCHINPUT,
	Z_INDEX_SELECT,
	Z_INDEX_SELECT_ICON,
	Z_INDEX_CROSSICON,
	Z_INDEX_SEARCHICON,
};
export { LIGHT_THEME, DARK_THEME };
