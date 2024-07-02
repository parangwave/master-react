import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      <Header />
      {/* 2. render children comp (= url you want) */}
      <Outlet />
    </div>
  );
}

export default Root;
