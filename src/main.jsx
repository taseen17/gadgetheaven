import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
import AllProducts from './components/Allproducts/AllProducts.jsx';
import Gadgets from './components/Gadgets/Gadgets.jsx';
import SmartPhones from './components/SmartPhones/SmartPhones.jsx';
import Accessories from './components/Accessories/Accessories.jsx';
import SmartWatch from './components/SmartWach/SmartWatch.jsx';
import MacBook from './components/MacBook/MacBook.jsx';
import Iphone from './components/Iphone/Iphone.jsx';
import Cart from './components/Cart/Cart.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path:"/",
            element: <Gadgets></Gadgets>,
          },
          {
            path: "allproducts",
            element: <Gadgets></Gadgets>,
          },
          {
            path: "smartphones",
            element: <SmartPhones></SmartPhones>,
            loader: () => fetch('/gadgets.json'),
          },
          {
            path: "accessories",
            element: <Accessories></Accessories>,
            loader: () => fetch('/gadgets.json'),
          },
          {
            path: "smartwatch",
            element: <SmartWatch></SmartWatch>,
            loader: () => fetch('/gadgets.json'),
          },
          {
            path: "macbook",
            element: <MacBook></MacBook>,
            loader: () => fetch('/gadgets.json'),
          },
          {
            path: "iphone",
            element: <Iphone></Iphone>,
            loader: () => fetch('/gadgets.json'),
          }
        ]
      },
      {
        path: "gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/gadgets.json'),
      },  
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
