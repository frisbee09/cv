import { Colour, ColourType } from '@cj09/css';

export interface CVThemeType {
	background: Colour;
	foreground: Colour;
	accent: Colour;
	text: Colour;
}

// Colour Scheme generated with coolors.co :)
export const MidnightBlueTheme: CVThemeType = {
	background: new Colour({ mode: ColourType.hex, values: '2B2D42' }),
	foreground: new Colour({ mode: ColourType.hex, values: 'B8BEDD' }),
	accent: new Colour({ mode: ColourType.hex, values: 'FFB140' }),
	get text() {
		return this.accent.override({ l: 90 });
	},
};

export const GunmetalTheme: CVThemeType = {
	background: new Colour({ mode: ColourType.hex, values: '292F36' }),
	foreground: new Colour({ mode: ColourType.hex, values: '31AFA7' }),
	accent: new Colour({ mode: ColourType.hex, values: 'FF6B6B' }),
	get text() {
		return this.accent.override({ l: 95, s: 20 });
	},
};