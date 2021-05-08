import { Colour, ColourType } from '@cj09/css';

// Colour Scheme generated with coolors.co :)
export const CVTheme = {
	primary: new Colour({ mode: ColourType.rgb, values: [34, 124, 157] }),
	secondary: new Colour({ mode: ColourType.rgb, values: [132, 220, 198] }),
	tertiary: new Colour({ mode: ColourType.rgb, values: [44, 42, 74] }),
	accentOne: new Colour({ mode: ColourType.rgb, values: [215, 38, 61] }),
	accentTwo: new Colour({ mode: ColourType.rgb, values: [237, 174, 73] }),
};

export type CVThemeType = typeof CVTheme;
