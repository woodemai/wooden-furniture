import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "@/pages/home";
import Kitchens from "@/pages/kitchens";
import Stairs from "@/pages/stairs";
import Cnc from "@/pages/cnc/Cnc";
import Order from "@/pages/order";
import Contacts from "@/pages/contacts";
import Screens from "@/pages/screens";
import Furniture from "@/pages/furniture";
import Undone from "@/pages/undone";
import AdviceLayout from "@/pages/advice/Layout";
import Care from "@/pages/advice/care";
import Gluing from "@/pages/advice/gluing";
import Materials from "@/pages/advice/materials";
import Storage from "@/pages/advice/storage";
import Varnish from "@/pages/advice/varnish";
import Staining from "@/pages/advice/staining";

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
      {
        element: <Screens />,
        path: '/screens',
      },
      {
        path: '/advice',
        element: <AdviceLayout />,
        children: [
          {
            element: <Care />,
            path: '/advice/care'
          },
          {
            element: <Gluing />,
            path: '/advice/gluing'
          },
          {
            element: <Materials />,
            path: '/advice/materials'
          },
          {
            element: <Storage />,
            path: '/advice/storage'
          },
          {
            element: <Varnish />,
            path: '/advice/varnish'
          },
          {
            element: <Staining />,
            path: '/advice/staining'
          },
        ]
      },
      {
        element: <Furniture />,
        path: '/furniture',
      },
      {
        element: <Undone />,
        path: '/undone',
      },
    ],
  },
]);