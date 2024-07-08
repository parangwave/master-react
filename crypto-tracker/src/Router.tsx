import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function Router({ toggleTheme, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/">
          <Coins toggleTheme={toggleTheme} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
