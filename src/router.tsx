import { createBrowserRouter } from "react-router-dom";

import PageHome from "./components/PageHome/PageHome";
import PageAbout from "./components/PageAbout/PageAbout";
import LayoutPages from "./components/LayoutPages/LayoutPages";
import NestedRoute from "./components/NestedRoute/NestedRoutes";
import ParameterRoutes from "./components/ParameterRoute/ParameterRoute";
import ParameterRouteRecieved from "./components/ParameterRouteRecieved/ParameterRouteRecieved";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPages />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/about",
        element: <PageAbout />,
      },
      {
        path: "/nested-routes",
        element: <NestedRoute />,
        children: [
          {
            path: "nested-1",
            element: <h2>Nested 1 Content Children</h2>,
          },
          {
            path: "nested-2",
            element: <h2>Nested 2 Content Children</h2>,
          },
        ],
      },
      {
        path: `/parameter-routes`,
        element: <ParameterRoutes />,
        children: [
          { path: "/:randomId", element: <ParameterRouteRecieved /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found Page</h1>,
  },
]);

export default router;