import { Layout, NotFound } from "@components";
import { Cart, Checkout, Home } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const children = [
  { element: <Home />, path: "/", errorElement: <NotFound /> },
  { element: <Cart />, path: "/cart", errorElement: <NotFound /> },
  { element: <Checkout />, path: "/checkout", errorElement: <NotFound /> },
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    errorElement: <NotFound />,
    children,
  },
]);
