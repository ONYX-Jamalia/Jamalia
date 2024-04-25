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
import { Cart } from "./pages/cart";
import { PaymentNotice } from "./pages/payment-notice";
// import { OrderHistory } from "./pages/order-history/index.jsx";
// import { BillingHistory } from "./pages/billing-history/index.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/products", element: <Products /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/productdetails/:productName", element: <ProductDetails />},
  { path: "/invoice", element: <Invoice/> },
  { path: "/ordermanagement", element: <OrderMgtPage/> },

  { path: "/supplierdashboard", element: <SupplierDashboard /> },
  { path: "/addnewproducts", element: <AddNewProducts /> },
  // { path: "/orderhistory", element: <OrderHistory /> },
  // { path: "/billinghistory", element: <BillingHistory /> },
  {path: "payment-notice", element: <PaymentNotice/> },


  { path: "/cart", element: <Cart/>}
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
