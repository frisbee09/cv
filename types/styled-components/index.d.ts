import 'styled-components';
import { CVThemeType } from '../../src/components/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends CVThemeType {}
}
