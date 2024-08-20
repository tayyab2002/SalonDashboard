import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import AddSubCategory from "./AddSubCategory";
import { NavLink } from "react-router-dom";
import { DashboardContext } from "../../context/DB_DataStrgContext";

const SubCategory = () => {
  const [componentHandler, setComponentHandler] = useState(true);
  const { allSubCategory , removeSubCategory} = useContext(DashboardContext);
  const sortedSubCategory = [...allSubCategory].sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div className="">
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Sub-Categories</span>
        </div>
        <div className="userUrl p-4">
          <NavLink href="" className="pr-2 text-yellow-400">
            <FaHome />
          </NavLink>
          <span className="text-gray-400">/</span>
          <NavLink href="" className="pl-2 text-yellow-400">
            Categories
          </NavLink>
        </div>
      </div>
      <div className="userList p-10 bg-white mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">
            {componentHandler
              ? "Sub-Category List"
              : "Add Sub-Category Details "}
          </div>
          <div>
            {componentHandler ? (
              <button
                onClick={() => setComponentHandler(false)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow"
              >
                Add Category
              </button>
            ) : (
              <button
                onClick={() => setComponentHandler(true)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow"
              >
                Back List
              </button>
            )}
          </div>
        </div>
        <hr className="my-6" />
        {componentHandler ? (
          <div>
            <div className="row userMenu justify-between my-3">
              <div>
                <a
                  href="#"
                  className="px-6 py-4 bg-slate-100 shadow rounded-l-lg font-bold text-xs hover:bg-slate-50"
                >
                  Copy
                </a>
                <a
                  href="#"
                  className="px-6 py-4 bg-slate-100 shadow font-bold text-xs hover:bg-slate-50"
                >
                  Excel
                </a>
                <a
                  href="#"
                  className="px-6 py-4 bg-slate-100 shadow font-bold text-xs hover:bg-slate-50"
                >
                  CSV
                </a>
                <a
                  href="#"
                  className="px-6 py-4 bg-slate-100 shadow rounded-r-lg font-bold text-xs hover:bg-slate-50"
                >
                  PDF
                </a>
              </div>
              <div className="search-box">
                <label htmlFor="search" className="text-gray-600">
                  Search :
                </label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="px-2 py-1 border rounded-lg"
                />
              </div>
            </div>

            <hr />
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="heading-row grid gap-2 md:gap-4 grid-cols-9 font-bold text-xs bg-zinc-100 py-5 text-center">
                  <div>#</div>
                  <div>Name</div>
                  <div>Category</div>
                  <div>Description</div>
                  <div>Price</div>
                  <div>Services For</div>
                  <div>Duration</div>
                  <div>Preparation Time</div>
                  <div>Action</div>
                </div>

                <hr />

                {sortedSubCategory.map((items, index) => {
                  const { _id, title, category} = items;
                  return (
                    <div key={_id}>
                      <div className="data-row grid gap-2 md:gap-4 grid-cols-9 text-gray-600 text-xs my-4 items-center text-center">
                        <div>{index + 1}</div>
                        <div>{title}</div>
                        <div>{category}</div>
                        <div>Eyebrows & Lashes and face polish</div>
                        <div>
                          <span className="font-bold">$10</span>
                        </div>
                        <div>Women</div>
                        <div>20min</div>
                        <div>10min</div>
                        <div className="mx-10">
                          <span
                           className="text-2xl text-red-500 cursor-pointer hover:text-red-700 "
                           onClick={()=>removeSubCategory(_id)}
                           >
                            <RiDeleteBinLine />
                          </span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <AddSubCategory />
        )}
      </div>
    </div>
  );
};

export default SubCategory;
