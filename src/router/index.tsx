import { RouteObject, useRoutes } from "react-router-dom";
import { ReactElement } from "react";
import { HomePage } from "../views";
import { Test } from "../views/test";
import { LoginPage } from "../views/login";

export function AllAvailableRouter() {
  const allRoutes: RouteObject[] = [
    {
      element: <HomePage />,
      path: "/",
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
  const allRouters: ReactElement = useRoutes(allRoutes) || <></>;
  return allRouters;
}
