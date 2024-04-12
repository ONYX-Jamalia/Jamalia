import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Products from "./pages/products-page";
import SignIn from "./pages/signin-page";
import SignUp from "./pages/signup-page";
import ProductDetails from "./pages/products-details";
import Invoice from "./pages/invoice";
import OrderMgtPage from "./pages/order-management/order-mgt-page";

import SupplierDashboard from "./pages/supplier/dashboard";
import AddNewProducts from "./pages/supplier/add-new-products";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/products", element: <Products /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/productdetails", element: <ProductDetails />},
  { path: "/invoice", element: <Invoice/> },
  { path: "/ordermanagement", element: <OrderMgtPage/> },

  { path: "/supplierdashboard", element: <SupplierDashboard /> },
  { path: "/addnewproducts", element: <AddNewProducts /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
