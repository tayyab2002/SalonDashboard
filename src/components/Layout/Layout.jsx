import React, { useContext, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import TitleBar from "../TitleBar/TitleBar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigate } from "react-router";
import { DashboardContext } from "../../context/DB_DataStrgContext";
const Layout = () => {
  const {
    getAllCategories,
    empDetails,
    getAllOffers,
    getAllBookingsList,
    getAllSubCategory,
  } = useContext(DashboardContext);
  const navigate = useNavigate();
  const data = localStorage.getItem("adminlogin");
  useEffect(() => {
    try {
      if (!data) {
        navigate("/login");
      }
      getAllCategories();
      empDetails();
      getAllCategories();
      getAllOffers();
      getAllBookingsList();
      getAllSubCategory();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <div className="lg:h-[360px] h-[450px] bg-[#FECD03] z-[-9999] lg:w-[83.5%] w-full absolute right-0"></div>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-2 h-[100vh] lg:sticky left-0 top-0">
          <Navigation />
        </div>
        <div className="col-span-10 pt-8 ">
          <div>
            <TitleBar />
          </div>
          <div className="pt-5 lg:pt-10">
            <Outlet />
          </div>
          <div className="mt-10 ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
