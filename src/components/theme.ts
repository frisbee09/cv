import { Colour, ColourType } from '@cj09/css';

export interface CVThemeType {
	background: Colour;
	foreground: Colour;
	accent: Colour;
}

// Colour Scheme generated with coolors.co :)
export const MidnightBlueTheme: CVThemeType = {
	background: new Colour({ mode: ColourType.hex, values: '2B2D42' }),
	foreground: new Colour({ mode: ColourType.hex, values: 'B8BEDD' }),
	accent: new Colour({ mode: ColourType.hex, values: 'FFB140' }),
};

export const GunmetalTheme: CVThemeType = {
	background: new Colour({ mode: ColourType.hex, values: '292F36' }),
	foreground: new Colour({ mode: ColourType.hex, values: '4ECDC4' }),
	accent: new Colour({ mode: ColourType.hex, values: 'FF6B6B' }),
};
