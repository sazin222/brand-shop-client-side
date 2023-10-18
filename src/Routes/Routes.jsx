import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
          path:"/addproduct"
        }
      ]
    },
  ]);


export default Routes;