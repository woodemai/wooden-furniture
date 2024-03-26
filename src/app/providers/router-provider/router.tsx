import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "@/pages/home";
import Kitchens from "@/pages/kitchens";
import Stairs from "@/pages/stairs";
import Cnc from "@/pages/cnc/Cnc";
import Order from "@/pages/order";
import Contacts from "@/pages/contacts";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Kitchens />,
        path: '/kitchens',
      },
      {
        element: <Stairs />,
        path: '/stairs',
      },
      {
        element: <Cnc />,
        path: '/cnc',
      },
      {
        element: <Order />,
        path: '/order',
      },
      {
        element: <Contacts />,
        path: '/contacts',
      },
    ],
  },
]);