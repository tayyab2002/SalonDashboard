import React from "react";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import {NavLink} from "react-router-dom";
function Customer() {
  return (
    <div className="">
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Customers</span>
        </div>
        <div className="userUrl p-4">
          <NavLink href="" className="pr-2 text-yellow-400">
            <FaHome />
          </NavLink>
          <span className="text-gray-400">/</span>{" "}
          <NavLink href="" className="pl-2 text-yellow-400">
            Customer List
          </NavLink>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">Customers</div>
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
              className="px-2 py-1 border rounded-lg"
            />
          </div>
        </div>

        <hr />

        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="heading-row grid gap-2 md:gap-4 grid-cols-5 font-bold text-xs bg-zinc-100 py-5">
              <div className="text-center">#</div>
              <div className="text-center">Name</div>
              <div className="text-center">Email</div>
              <div className="text-center">Role</div>
              <div className="text-center">Action</div>
            </div>

            <hr />

            <div className="data-row grid gap-2 md:gap-4 grid-cols-5 text-gray-600 text-xs my-4 items-center">
              <div className="text-center">1</div>
              <div className="text-center">Admin</div>
              <div className="text-center text-amber-500 hover:text-blue-700">
                <a href="#">abc@gmail.com</a>
              </div>
              <div className="text-center">
                <span className="text-blue-700 bg-zinc-200 px-2 py-1 rounded font-bold">
                  Admin
                </span>
              </div>
              <div className="text-center flex justify-center">
                <span className="text-xl text-red-500 cursor-pointer hover:text-red-600">
                  <RiDeleteBinLine />
                </span>
              </div>
            </div>

            <hr />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
