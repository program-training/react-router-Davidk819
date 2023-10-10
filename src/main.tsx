import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Users from "./components/Users/Users.tsx";
import User from "./components/User/User.tsx";
import axios from "axios";
import Tasks from './components/Tasks/Tasks.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/user/:id",
    element: <User/>,
  },
  {
    path: "/users/tasks/:id",
    element: <Tasks/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
