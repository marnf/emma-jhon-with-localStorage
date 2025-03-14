import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './components/loader/cartProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>
      },
      {
        path:'/orders',
        element:<Orders></Orders>,
        loader: cartProductsLoader
        
      },
      {
        path:'/checkout',
        element:<CheckOut></CheckOut>
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
