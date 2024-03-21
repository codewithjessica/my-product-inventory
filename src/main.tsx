import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
// import EditProduct from "./pages/EditProduct";
import { Layout } from "./components /Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AddProduct",
        element: <AddProduct />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      // {
      //   path: "/EditProduct",
      //   element: <EditProduct />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
