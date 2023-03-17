import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import CV from './CV';
import { GunmetalTheme, MidnightBlueTheme } from './theme';

interface IAppProps {}

const GS = createGlobalStyle`
  html {
    /* Set the default 1rem font size to 12px */
    font-size: ${(12 * 100) / 16}%;
  }
  html, body {
    background: ${props => props.theme.background.getHexA()};
    &,
    * {
      -webkit-print-color-adjust: exact;
      box-sizing: border-box;
    }
    min-height: 100vh;
  }
  body {
    color: ${props => props.theme.text.getHexA()};

    #root {
      min-height: 100%;
    }

    /* Just a little tighter on the margin-bottoms. I prefer headings to be
    slightly weighted towards the content underneath them */
    h2 {
      margin-bottom: 0.8rem;
    }
    h3 {
      margin-bottom: 0.75rem;
    }
    h2, h3 {
      & + * {
        margin-top: 0;
      }
    }

    hr {
      z-index: 0;
    }
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
