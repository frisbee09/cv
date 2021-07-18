import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { CVGrid } from "./structureSC";
import { GunmetalTheme } from "./theme";

interface IAppProps {}

const GS = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background.getHexA()};
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
    <ThemeProvider theme={GunmetalTheme}>
      <CVGrid>Hi</CVGrid>
      <GS />
    </ThemeProvider>
  );
};

export default App;
