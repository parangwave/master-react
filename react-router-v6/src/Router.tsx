import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";

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
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
