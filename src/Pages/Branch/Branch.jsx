import React from "react";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import demoImage from "../../assets/images/demo.jpg";
import { BsPencil } from "react-icons/bs";

function Branch() {
  return (
    <div className="">
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Branches</span>
        </div>
        <div className="userUrl p-4">
          <a href="" className="pr-2 text-yellow-400">
            <FaHome />
          </a>
          <span className="text-gray-400">/</span>{" "}
          <a href="" className="pl-2 text-yellow-400">
            Branch List
          </a>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">Branches</div>
          <div>
            <button className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow">
              Add Branch
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
            <div className="heading-row grid gap-2 md:gap-4 grid-cols-7 font-bold text-xs bg-zinc-100 py-5">
              <div className="text-center">#</div>
              <div className="text-center">Name</div>
              <div className="text-center">Email</div>
              <div className="text-center">Address</div>
              <div className="text-center">Image</div>
              <div className="text-center">Status</div>
              <div className="text-center">Action</div>
            </div>

            <hr />

            <div className="data-row grid gap-2 md:gap-4 grid-cols-7 text-gray-600 text-xs my-4 items-center">
              <div className="text-center">1</div>
              <div className="text-center">xyz</div>
              <div className="text-center text-amber-500 hover:text-blue-700">
                xyz@gmail.com
              </div>
              <div className="text-center">Address of the Employee</div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="rounded-full bg-yellow-400 w-10 h-10 flex justify-center items-center">
                    <img
                      src={demoImage}
                      alt="branch Img Not Found!"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="bg-green-200 text-green-600 px-2 py-1 rounded font-bold text-[10px]">
                  Active
                </span>
              </div>
              <div className="text-center flex flex-nowrap">
                <span className="text-xl text-green-500 cursor-pointer hover:text-blue-600 p-2">
                  <BsPencil />
                </span>
                <span className="text-xl text-red-500 cursor-pointer hover:text-blue-600 p-2">
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

export default Branch;
