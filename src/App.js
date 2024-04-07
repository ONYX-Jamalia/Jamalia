import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/homepage';
import AddNewProducts from './pages/add-new-products';
import Products from './pages/products-page';
import SignIn from './pages/signin-page';
import SignUp from './pages/signup-page';

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/addnewproducts", element: <AddNewProducts /> },
  { path: "/products", element: <Products /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
