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
import PackagesOffers from "../pages/packagesoffers/PackagesOffers";
import Gallery from "../pages/gallery/Gallery";
import AboutUs from "../pages/aboutus/AboutUs";
import TermsConditions from "../pages/termsconditions/TermsConditions";

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
        path: "all-rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch("https://roomio-a11-server.vercel.app/rooms"),
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
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "terms-conditions",
        element: <TermsConditions></TermsConditions>,
      },
      {
        path: "packages-offers",
        element: (
          <PrivateRoute>
            <PackagesOffers></PackagesOffers>
          </PrivateRoute>
        ),
      },
      {
        path: "/room-details/:id",
        element: <Room></Room>,
        loader: ({ params }) =>
          fetch(`https://roomio-a11-server.vercel.app/rooms/${params.id}`),
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
