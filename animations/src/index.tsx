import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import App from "./App";

const element = document.getElementById("root");
const root = createRoot(element!);
root.render(
  <>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </>
);
