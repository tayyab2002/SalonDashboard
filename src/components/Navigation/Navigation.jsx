import React, { useContext, useState } from "react";
import logo from "../../assets/logo/log.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  IoSpeedometer,
  IoPersonSharp,
  IoFolderSharp,
  IoListSharp,
  IoLockClosedSharp,
  IoSettingsSharp,
  IoNotifications,
  IoPerson,
} from "react-icons/io5";
import { FaShop } from "react-icons/fa6";
import {
  FaSignOutAlt,
  FaWhatsappSquare,
  FaBookmark,
  FaTeamspeak,
  FaGift,
} from "react-icons/fa";
import { MdReviews, MdReport } from "react-icons/md";
const Navigation = () => {
  const Navigator_Menu = [
    {
      id: 1,
      name: "Dashboard",
      url:"",
      icon: <IoSpeedometer />,
    },
    {
      id: 3,
      name: "User",
      url:"/user",
      icon: <IoPersonSharp />,
    },
    {
      id: 4,
      name: "Category",
      url:"/category",
      icon: <IoFolderSharp />,
    },
    {
      id: 5,
      name: "Sub Category",
      url:"/sub-category",
      icon: <IoListSharp />,
    },
    {
      id: 6,
      name: "Employee",
      url:"/employee",
      icon: <IoPerson />,
    },
    {
      id: 7,
      name: "Branch",
      url:"/branch",
      icon: <FaShop />,
    },
    {
      id: 8,
      name: "Offer",
      url:"/offer",
      icon: <FaGift />,
    },
    {
      id: 9,
      name: "Customer",
      url:"/customer",
      icon: <FaTeamspeak />,
    },
    {
      id: 10,
      name: "Booking",
      url:"/booking",
      icon: <FaBookmark />,
    },
    {
      id: 11,
      name: "Notification",
      url:"/notification",
      icon: <IoNotifications />,
    },
    {
      id: 12,
      name: "Report",
      url:"/report",
      icon: <MdReport />,
    },
    {
      id: 13,
      name: "Custom Notification",
      url:"/custom-notification",
      icon: <FaWhatsappSquare />,
    },
    {
      id: 14,
      name: "Setting",
      url:"/setting",
      icon: <IoSettingsSharp />,
    },
    {
      id: 15,
      name: "Privacy &  Policy",
      url:"/privacy-and-policy",
      icon: <IoLockClosedSharp />,
    },
    {
      id: 16,
      name: "Reviews",
      url:"/reviews",
      icon: <MdReviews />,
    },
    {
      id: 17,
      name: "Sign Out",
      icon: <FaSignOutAlt />,
    },
  ];
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const signOut = () => {
    localStorage.clear("adminLogin");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="sticky lg:hidden h-[100vh] z-50">
        <button className="text-gray-400 text-3xl m-8" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div
          className={`fixed overflow-auto top-0 left-0 h-full w-[250px] bg-white z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 shadow-lg`}
        >
          <button
            className="absolute top-5 right-5 text-gray-400 text-3xl"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
          <div className="px-10 mt-12">
            <img src={logo} alt="logo not Found!" className="w-[160px]" />
          </div>
          <div className="mx-4 p-2 text-gray-400 mt-24">
            <p className="mt-10 text-[13px] font-sans font-semibold">
              NAVIGATION
            </p>
            <div className="mb-3">
              <ul className="list-none">
                {Navigator_Menu.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item?.url}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#fecd03] text-[17px] duration-500"
                        : "text-gray-400"
                    }
                    onClick={() => {
                      if (item.name === "Sign Out") {
                        signOut();
                      }
                      toggleMenu();
                    }}
                  >
                    <li key={item.id} className="my-5">
                      <div className="flex flex-row gap-4">
                        <span className="text-[#fecd03] text-[17px] pt-1">
                          {item.icon}
                        </span>
                        <span className="font-thin hover:text-[#fecc03d7] cursor-pointer">
                          {item.name}
                        </span>
                      </div>
                    </li>
                  </NavLink>
                ))}
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white hidden lg:block h-[100vh] overflow-auto relative">
        <div className="px-10 absolute top-5">
          <img src={logo} alt="logo not Found!" className="w-[160px]" />
        </div>
        <div className="mx-4 p-2 text-gray-400 absolute top-[8%]">
          <p className="mt-10 text-[13px] font-sans font-semibold">
            NAVIGATION
          </p>
          <div className="mb-3">
            <ul className="list-none">
              {Navigator_Menu.map((item, index) => (
                <NavLink
                  key={index}
                  to={item?.url}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#fecd03] text-[17px] duration-500"
                      : "text-gray-400"
                  }
                  onClick={() => {
                    if (item.name === "Sign Out") {
                      signOut();
                    }
                  }}
                >
                  <li key={item.id} className="my-5">
                    <div className="flex flex-row gap-4">
                      <span className="text-[#fecd03] text-[17px] pt-1">
                        {item.icon}
                      </span>
                      <span className="font-thin hover:text-[#fecc03d7] cursor-pointer">
                        {item.name}
                      </span>
                    </div>
                  </li>
                </NavLink>
              ))}
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
