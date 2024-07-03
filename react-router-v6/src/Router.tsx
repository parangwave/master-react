import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";

// func that makes the browser more declarative without jsx comps
// router to arr[] (= js obj)
const router = createBrowserRouter([
  {
    // 1. first render "/"
    // a container of all routes
    path: "/", // parent, url itself
    element: <Root />,

    children: [
      {
        path: "",
        element: <Home />,
        // protect components from other components' error
        // error boundery
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],

    // message shows only in dev phase, not production phase
    // when component get an error and crash
    // or can't find where a component is
    // unless errorElement, show unhandled error & kills the app
    errorElement: <NotFound />,
  },
]);

export default router;
