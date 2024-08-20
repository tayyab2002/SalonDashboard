import React from "react";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const SalonUsers = () => {
  return (
    <div className="">
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Users</span>
        </div>
        <div className="userUrl p-4">
          <a href="" className="pr-2 text-yellow-400">
            <FaHome />
          </a>
          <span className="text-gray-400">/</span>{" "}
          <a href="" className="pl-2 text-yellow-400">
            User List
          </a>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">Users</div>
          <div>
            <button className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow">
              Add User
            </button>
          </div>
        </div>
        <hr className="my-6" />

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
              Search :{" "}
            </label>
            <input
              type="text"
              name="search"
              id="search"
              className="px-2 py-1 border rounded-lg sm:w-[-webkit-fill-available]"
            />
          </div>
        </div>

        <hr />

        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="heading-row font-bold text-xs bg-zinc-100 py-5 flex justify-between lg:justify-evenly">
              <div className="w-1/12 text-center">#</div>
              <div className="w-3/12 text-center">Name</div>
              <div className="w-3/12 text-center">Email</div>
              <div className="w-2/12 text-center">Role</div>
              <div className="w-1/12 text-center">Action</div>
            </div>

            <hr />

            <div className="data-row text-gray-600 text-xs my-4 flex justify-between lg:justify-evenly">
              <div className="w-1/12 text-center">1</div>
              <div className="w-3/12 text-center">Admin</div>
              <div className="w-3/12 text-center text-amber-500 hover:text-blue-700">
                <a href="#">abc@gmail.com</a>
              </div>
              <div className="w-2/12 text-center">
                <span className="text-blue-700 bg-zinc-200 p-2 rounded font-bold">
                  Admin
                </span>
              </div>
              <div className="w-1/12 text-center">
                <span className="text-xl text-red-500 cursor-pointer hover:text-red-600">
                  <RiDeleteBinLine />
                </span>
              </div>
            </div>

            <hr />

            <div className="data-row text-gray-600 text-xs my-4 flex justify-between lg:justify-evenly">
              <div className="w-1/12 text-center">2</div>
              <div className="w-3/12 text-center">xyz</div>
              <div className="w-3/12 text-center text-amber-500 hover:text-blue-700">
                <a href="#">xyz@gmail.com</a>
              </div>
              <div className="w-2/12 text-center">
                <span className="text-blue-700 bg-zinc-200 p-2 rounded font-bold">
                  No_Data
                </span>
              </div>
              <div className="w-1/12 text-center">
                <span className="text-xl text-red-500 cursor-pointer hover:text-red-600">
                  <RiDeleteBinLine />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonUsers;
