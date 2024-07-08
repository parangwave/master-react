import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

// global style
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const isDark = useRecoilValue(isDarkAtom); // connected to isDarkAtom

  return (
    <>
      {/* apply global style for whole doc */}
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
