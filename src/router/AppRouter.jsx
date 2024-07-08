import { Layout } from "@components";
import { Cart, Checkout, Home } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const children = [
  { element: <Home />, path: "/" },
  { element: <Cart />, path: "/cart" },
  { element: <Checkout />, path: "/checkout" },
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    errorElement: (
      <a href="/" className="text-center">
        This page does not exist
      </a>
    ),
    children,
  },
]);
