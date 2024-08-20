import React, { useContext } from "react";
import { DashboardContext } from "../../../context/DB_DataStrgContext";
import {
  FaChartBar,
  FaChartPie,
  FaUsers,
  FaPercentage,
} from "react-icons/fa";
const DetailsCards = () => {
  const { emplength, allBookingLength } = useContext(DashboardContext);
  const Cards_Data = [
    {
      id: 1,
      name: "User",
      count: 500,
      icon: <FaChartBar />,
      bgClr: "#F5365C",
    },
    {
      id: 2,
      name: "Branch",
      count: 500,
      icon: <FaChartPie />,
      bgClr: "#FB6340",
    },
    {
      id: 3,
      name: "Employee",
      count: emplength,
      icon: <FaUsers />,
      bgClr: "#FFD600",
    },
    {
      id: 4,
      name: "Booking",
      count: allBookingLength,
      icon: <FaPercentage />,
      bgClr: "#11CDEF",
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2">
      {Cards_Data.map((items) => {
        return (
          <div key={items.id} className="flex justify-center mx-4">
            <div
              className="md:w-[230px] w-full bg-white grid grid-cols-2 md:p-4 p-3 rounded-md m-2"
            >
              <div className="font-sans ">
                <div className="text-gray-400 uppercase md:text-[.8125rem] text-[10px]">
                  {items.name}
                </div>
                <div className="md:text-[1.25rem] text-sm font-[600]">
                  {items.count}
                </div>
              </div>
              <div className="flex justify-end">
                <div
                  style={{ background: `${items.bgClr}` }}
                  className=" md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full text-white text-[20px] md:p-[15px] p-[10px]"
                >
                  {items.icon}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsCards;
