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
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Private from "./Private.jsx";

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
        loader: ({ params }) => fetch(`https://coffees-store-server.vercel.app/coffee/${params.id}`),
        element: <Details />,
      },
      {
        path: "/add-coffee",
        element: <Private><AddCoffee /></Private>,
      },
      {
        path: "/update-coffee/:id",
        loader: ({ params }) => fetch(`https://coffees-store-server.vercel.app/coffee/${params.id}`),
        element: <Private><UpdateCoffee /></Private>,
      },
      {
        path: "/sign_in",
        element: <SignIn />,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        loader: () => fetch('https://coffees-store-server.vercel.app/user'),
        element: <Private><Dashboard /></Private>
      },
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
