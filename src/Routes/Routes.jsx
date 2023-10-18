import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import PrivetRoute from "./PrivetRoute";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element:<Home></Home>,
          loader: ()=> fetch('/brandName.json')
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path:"/addproduct",
          element: <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        },
        {
          path: "/mycart",
          element: <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        }
      ]
    },
  ]);


export default Routes;