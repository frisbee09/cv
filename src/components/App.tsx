import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { CVGrid } from "./structureSC";
import { CVTheme } from "./theme";

interface IAppProps {}

const GS = createGlobalStyle`
  body {
    background: ${(props) => props.theme.secondary.getHexA()};
    height: 100vh;
    widtH: 100vw;

    #root {
      height: 100%;
      width: 100%;
    }
  }
`;

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <ThemeProvider theme={CVTheme}>
      <CVGrid>Hi</CVGrid>
      <GS />
    </ThemeProvider>
  );
};

export default App;
