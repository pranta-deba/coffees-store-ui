import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddCoffee from "./pages/AddCoffee.jsx";
import UpdateCoffee from "./pages/UpdateCoffee.jsx";
import Error404 from "./pages/Error404.jsx";
import Details from "./pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
        element: <Details />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
        element: <UpdateCoffee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
