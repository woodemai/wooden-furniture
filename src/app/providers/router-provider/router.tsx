import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";
import Home from "@/pages/home";
import Contacts from "@/pages/contacts";
import Undone from "@/pages/undone";
import AdviceLayout from "@/pages/advice/Layout";
import Care from "@/pages/advice/care";
import Gluing from "@/pages/advice/gluing";
import Materials from "@/pages/advice/materials";
import Storage from "@/pages/advice/storage";
import Varnish from "@/pages/advice/varnish";
import Staining from "@/pages/advice/staining";
const Catalog = lazy(() => import("@/pages/catalog"))

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/catalog',
        element: <Catalog/>
      },
      {
        element: <Contacts />,
        path: '/contacts',
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
        element: <Undone />,
        path: '/undone',
      },
    ],
  },
]);