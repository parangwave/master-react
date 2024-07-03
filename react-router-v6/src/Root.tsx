import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      <Header />
      {/* 2. render children comp (= url you want) */}
      <Outlet
        context={{
          darkmode: true,
        }}
      />
    </div>
  );
}

export default Root;
