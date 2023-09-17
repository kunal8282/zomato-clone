import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import RestaurantMenuPage from "./Pages/RestaurantMenuPage.jsx";
import TabIndex from "./Pages/TabIndex.jsx";
import DeliveryPage from "./Pages/DeliveryPage.jsx";
import DiningOutPage from "./Pages/DiningOutPage.jsx";
import NightLifePage from "./Pages/NightLifePage.jsx"

const AppRouterConfig = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children : [
      {
        path : "/",
        element : <TabIndex />,
        children : [
          {
            path : '/',
            element : <DeliveryPage />
          },
          {
            path : "/diningout",
            element : <DiningOutPage />
          },
          {
            path : "/nightlife",
            element : <NightLifePage />
          }
        ]
      },
      {
        path : '/restaurant/mumbai/:id/order',
        element : <RestaurantMenuPage />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouterConfig} />
  </React.StrictMode>
);
