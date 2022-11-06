import {
  Navigate,
  RouteObject,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { ReactElement, useState } from "react";
import { HomePage } from "../views";
import { Test } from "../views/test";
import { LoginPage } from "../views/login";

export function AllAvailableRouter() {
  const currentRoute = useLocation();
  const [show, setShow] = useState(false);
  const allRoutes: RouteObject[] = [
    {
      element: <HomePage />,
      path: "/",
    },
    {
      element: show ? (
        <Navigate to={"/"} state={{ from: currentRoute }}></Navigate>
      ) : (
        <div>Not show</div>
      ),
      path: "/show",
    },
    {
      element: <Test />,
      path: "/test",
    },
    {
      element: <LoginPage />,
      path: "/login",
    },
  ];
  setTimeout(() => {
    setShow(true);
  }, 3000);
  const allRouters: ReactElement = useRoutes(allRoutes) || <></>;
  return allRouters;
}
