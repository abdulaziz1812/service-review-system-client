import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
import AddService from "../pages/AddService";
import Services from "../pages/Services";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import MyServices from "../pages/MyServices";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>no page</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/my-reviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/my-services",
        element: <MyServices></MyServices>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
