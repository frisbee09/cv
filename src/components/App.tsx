import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import CV from "./CV";
import { GunmetalTheme } from "./theme";

interface IAppProps {}

const GS = createGlobalStyle`
  html, body {
    background: ${(props) => props.theme.background.getHexA()};
    * {
      box-sizing: border-box;
    }
  }
  body {
    height: 100vh;
    width: 100vw;
    color: ${props => props.theme.text.getHexA()};

    #root {
      height: 100%;
      width: 100%;
    }
  }
`;

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <ThemeProvider theme={GunmetalTheme}>
      <CV/>
      <GS />
    </ThemeProvider>
  );
};

export default App;
