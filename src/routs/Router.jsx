import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Registration from "../pages/auth/Registration";
import Login from "./../pages/auth/Login";
import PrivateRoute from "./PrivateRoute";
import Rooms from "../components/Rooms";
import Room from "../components/Room";
import MyBookings from "../pages/my-bookings/MyBookings";

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
        path: "/all-rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch("http://localhost:5000/rooms"),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/room-details/:id",
        element: (
          <PrivateRoute>
            <Room></Room>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
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
