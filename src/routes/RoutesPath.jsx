import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/ErrorPage/Error404";
import LoginPage from "../components/LoginPage/LoginPage";
import Layout from "../components/Layout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SalonUsers from "../Pages/User/SalonUsers";
import Category from "../Pages/category/Category";
import SubCategory from "../Pages/SubCategory/SubCategory";
import Employee from "../Pages/Employee/Employee";
import Branch from "../Pages/Branch/Branch";
import Offer from "../Pages/Offer/Offer";
import Notification from "../Pages/Notification/Notification";
import Customer from "../Pages/Customer/Customer";
import Booking from "../Pages/Booking/Booking";
import PrivacyAndPolicy from "../Pages/PrivacyAndPolicy/PrivacyAndPolicy";
import Setting from "../Pages/Setting/Setting";
import Report from "../Pages/Report/Report";
import Reviews from "../Pages/Reviews/Reviews";
import CustomNotfication from "../Pages/CustomNotfication/CustomNotfication";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <SalonUsers />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/sub-category",
        element: <SubCategory />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/branch",
        element: <Branch />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/custom-notification",
        element: <CustomNotfication />,
      },
      {
        path: "/privacy-and-policy",
        element: <PrivacyAndPolicy />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
