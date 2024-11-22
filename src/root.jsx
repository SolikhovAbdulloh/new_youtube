import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Dashboard from "./dashboard";
import Home from "./pages/home";
import Reels from "./pages/Reels";
import Videos from "./pages/videos";
import Shorts from "./pages/Shorts";
import List from "./pages/Playlist";
import PrivateRoute from "./component/private";
import Login from "./component/login";

const auth = localStorage.getItem("token");

  const root = createBrowserRouter([
    {
      path: "/dashboard",
      element: (
        <>
          <Navbar />
          <Dashboard />
        </>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "Reels", element: <Reels /> },
        { path: "Videos", element: <Videos /> },
        { path: "Shorts", element: <Shorts /> },
        { path: "login", element: <Login /> },
        {
          path: "List",
          element: (
            <PrivateRoute token={auth}>
              <List />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <h1 className="text-red-800 text-center">404 not found</h1>,
    },
  ]);

  

export default root;
