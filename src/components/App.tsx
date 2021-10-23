import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import CV from './CV';
import { GunmetalTheme } from './theme';

interface IAppProps {}

const GS = createGlobalStyle`
  html, body {
    background: ${props => props.theme.background.getHexA()};
    * {
      box-sizing: border-box;
    }
    min-height: 100vh;
  }
  body {
    color: ${props => props.theme.text.getHexA()};

    #root {
      min-height: 100%;
    }

    /* Set the default 1rem font size to 14px */
    font-size: ${(14 * 100) / 16}%;
  }
`;

const App: React.FunctionComponent<IAppProps> = props => {
	return (
		<ThemeProvider theme={GunmetalTheme}>
			<CV />
			<GS />
		</ThemeProvider>
	);
};

export default App;
