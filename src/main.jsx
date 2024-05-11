import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Components/Router/Router.jsx";
import Home from "./Components/Pages/Home/Home.jsx";

import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import "./index.css";
import Login from "./Components/Pages/User/Login.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import SignUp from "./Components/Pages/User/SingUp.jsx";
import CardDetails from "./Components/Pages/Home/CardDetails.jsx";
import Bookings from "./Components/Pages/Home/Bookings.jsx";
import UpdateJob from "./Components/Pages/Home/UpdateJob.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    errorElement: <div>Opps..!</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/cardDetails/:_id",
        element:<CardDetails></CardDetails>
      },
      {
        path:"/bookings",
        element:<Bookings></Bookings>
      },
      {
        path:"/updatejob/:id",
        element:<UpdateJob></UpdateJob>,
        loader:({params})=>
          fetch(`https://car-doctor-server-3q8l2oj5w-utpolra1s-projects.vercel.app//services/${params.id}`),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
