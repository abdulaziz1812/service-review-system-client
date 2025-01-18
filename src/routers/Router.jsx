
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AddService from "./pages/AddService";
import MyReviews from "./pages/MyReviews";
import Login from "./pages/Login";
import Register from "./pages/Register";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <h2>no page</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/add-service',
        element: <AddService></AddService>,
      },
      {
        path: '/my-reviews',
        element: <MyReviews></MyReviews>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ]
  },
]);

export default router;