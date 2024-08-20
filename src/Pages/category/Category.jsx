import React, { useContext, useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import AddCategory from "./AddCategory";
import { NavLink } from "react-router-dom";
import { DashboardContext } from "../../context/DB_DataStrgContext";

function Category() {
  const [componetHandler, setComponetHandler] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const { allCategory, removeCategory } = useContext(DashboardContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmpData = allCategory.filter((category) =>
    category && category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="">
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Categories</span>
        </div>
        <div className="userUrl p-4">
          <NavLink href="" className="pr-2 text-yellow-400">
            <FaHome />
          </NavLink>
          <span className="text-gray-400">/</span>
          <NavLink href="" className="pl-2 text-yellow-400">
            Category List
          </NavLink>
        </div>
      </div>
      <div className="userList p-10 bg-white mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">
            {componetHandler ? "Categories" : "Add New Categories"}
          </div>
          <div>
            {componetHandler ? (
              <button
                onClick={() => setComponetHandler(false)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow"
              >
                Add Category
              </button>
            ) : (
              <button
                onClick={() => setComponetHandler(true)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow"
              >
                Back list
              </button>
            )}
          </div>
        </div>
        <hr className="my-6" />

        {componetHandler ? (
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
                  Search By Title :
                </label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="px-2 py-1 border rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <hr />
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="heading-row grid gap-4 grid-cols-5 font-bold text-xs bg-zinc-100 py-5">
                  <div className="text-center">#</div>
                  <div className="text-center">Name</div>
                  <div className="text-center">Image</div>
                  <div className="text-center">Status</div>
                  <div className="text-center">Action</div>
                </div>

                <hr />

                {filteredEmpData?.map((items, index) => {
                  const { title, img, _id, status } = items;
                  return (
                    <div key={_id}>
                      <div className="data-row grid gap-4 grid-cols-5 text-gray-600 text-xs my-4 items-center">
                        <div className="text-center">{index + 1}</div>
                        <div className="text-center">{title}</div>
                        <div className="text-center">
                          <div className="flex justify-center">
                            <div className="rounded-full bg-yellow-400 w-10 h-10 flex justify-center items-center">
                              <img
                                src={img}
                                alt=""
                                className="w-8 h-8 object-cover rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          {status === true ? (
                            <span className="bg-green-200 text-green-600 px-2 py-1 rounded font-bold text-[10px]">
                              Active
                            </span>
                          ) : (
                            <span className="bg-red-300 text-red-600 px-2 py-1 rounded font-bold text-[10px]">
                              Disable
                            </span>
                          )}
                        </div>
                        <div className="text-center flex justify-center gap-2">
                          <span className="text-xl text-green-500 cursor-pointer hover:text-blue-600 p-2">
                            <BsPencil
                              onClick={() => {
                                setEditItem(items);
                                setComponetHandler(false);
                              }}
                            />
                          </span>
                          <span
                            className="text-xl text-red-500 cursor-pointer hover:text-blue-600 p-2"
                            onClick={() => removeCategory(_id)}
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
          <div>
            <AddCategory editItem={editItem} setEditItem={setEditItem} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
