import React, { useContext } from "react";
import { MdCategory, MdRoomService, MdRocketLaunch } from "react-icons/md";
import { DashboardContext } from "../../../context/DB_DataStrgContext";

const CategoryCards = () => {
  const {offerCount, allCategoryLength, allSubCategoryLength} = useContext(DashboardContext);
  
  const CategoryCards_Data = [
    {
      id: 1,
      name: "category",
      count: allCategoryLength,
      icon: <MdCategory />,
      bgClr: "#531ECF",
    },
    {
      id: 2,
      name: "service",
      count: allSubCategoryLength,
      icon: <MdRoomService  />,
      bgClr: "#FB6340",
    },
    {
      id: 3,
      name: "offer",
      count: offerCount,
      icon: <MdRocketLaunch />,
      bgClr: "#11CDEF",
    },
  ];
  return (
    <div className="p-[1.5rem] grid md:grid-cols-3 grid-cols-1 justify-items-center">
      {CategoryCards_Data.map((items) => {
        return (
          <div
            key={items.id}
            style={{backgroundColor:items.bgClr}}
            className="md:w-[330px] w-full grid grid-cols-2 p-5 rounded-md border m-1 "
          >
            <div className="font-sans text-white">
              <div className=" uppercase text-[.8125rem] font-[600] ">
                {items.name}
              </div>
              <div className="text-[1.25rem]">{items.count}</div>
            </div>
            <div className="flex justify-end">
              <div
                className=" w-[50px] h-[50px] rounded-full bg-white text-black text-[20px] p-[15px]"
              >
                {items.icon}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCards;
