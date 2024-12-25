import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Registration from "../pages/auth/Registration";
import Login from "./../pages/auth/Login";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
