import React from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MyApp_HomePage from "../pages/homePage/HomePage";
import MyApp_LoginPage from "../pages/loginPage/LoginPage";
import MyApp_RegisterPage from "../pages/registerPage/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";

type Props = {};

const MyApp_ReactRouterBrowser = (props: Props) => {
  const listRoutes = [
    {
      path: "/",
      element: (
        <PrivateRoutes>
          <MyApp_HomePage />
        </PrivateRoutes>
      ),
    },
    {
      path: "/login",
      element: <MyApp_LoginPage />,
    },
    {
      path: "/register",
      element: <MyApp_RegisterPage />,
    },
  ];
  const router = createBrowserRouter(listRoutes as RouteObject[]);
  return <RouterProvider router={router} />;
};

export default MyApp_ReactRouterBrowser;
