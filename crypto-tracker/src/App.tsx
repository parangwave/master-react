import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

// global style
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((current) => !current);

  return (
    <>
      {/* apply global style for whole doc */}
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router isDark={isDark} toggleTheme={toggleTheme} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
