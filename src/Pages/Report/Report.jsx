import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";

const Report = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    branch: "",
    user: "",
    employee: "",
    status: "All",
  });
  const branches = ["Branch 1", "Branch 2", "Branch 3"];
  const users = ["User 1", "User 2", "User 3"];
  const employees = ["Employee 1", "Employee 2", "Employee 3"];
  const statuses = ["All", "Confirm", "Waiting", "Complete", "Cancel"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSearch = () => {
    
  // };

  const handleReset = () => {
    setFormData({
      from: "",
      to: "",
      branch: "",
      user: "",
      employee: "",
      status: "All",
    });
  };

  return (
    <div>
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Report</span>
        </div>

        <div className="userUrl p-4">
          <a href="" className="pr-2 text-yellow-400">
            <FaHome />
          </a>
          <span className="text-gray-400">/</span>{" "}
          <a href="" className="pl-2 text-yellow-400">
            Report List
          </a>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">Report</div>
          <div></div>
        </div>
        <div>
          <form>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-4 mt-4">
              <div className="flex flex-col w-full lg:w-1/6">
                <label
                  htmlFor="from"
                  className="block text-sm font-medium text-gray-700"
                >
                  From
                </label>
                <input
                  type="date"
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/6">
                <label
                  htmlFor="to"
                  className="block text-sm font-medium text-gray-700"
                >
                  To
                </label>
                <input
                  type="date"
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/6">
                <label
                  htmlFor="branch"
                  className="block text-sm font-medium text-gray-700"
                >
                  Branch
                </label>
                <select
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All</option>
                  {branches.map((branch, index) => (
                    <option key={index} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-1/6">
                <label
                  htmlFor="user"
                  className="block text-sm font-medium text-gray-700"
                >
                  User
                </label>
                <select
                  id="user"
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All</option>
                  {users.map((user, index) => (
                    <option key={index} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-1/6">
                <label
                  htmlFor="employee"
                  className="block text-sm font-medium text-gray-700"
                >
                  Employee
                </label>
                <select
                  id="employee"
                  name="employee"
                  value={formData.employee}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All</option>
                  {employees.map((employee, index) => (
                    <option key={index} value={employee}>
                      {employee}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-1/6">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  {statuses.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-start gap-4">
              <button
                type="button"
                // onClick={handleSearch}
                className="shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold cursor-pointer text-[14px] text-white hover:scale-105 bg-yellow-400 duration-500"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold cursor-pointer text-[14px] text-black hover:scale-105
                bg-gray-50 duration-500"
              >
                Reset
              </button>
            </div>
          </form>
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
          <div className="min-w-[800px]">
            <div className="heading-row grid gap-1 md:gap-2 grid-cols-8 font-bold text-xs bg-zinc-100 py-5">
              <div className="text-center">#</div>
              <div className="text-center">User</div>
              <div className="text-center">Branch</div>
              <div className="text-center">Booking Time</div>
              <div className="text-center">Amount</div>
              <div className="text-center">Payment</div>
              <div className="text-center">Status</div>
              <div className="text-center">Action</div>
            </div>

            <hr />

            <div className="data-row grid gap-1 md:gap-2 grid-cols-8 text-gray-600 text-xs my-4 items-center">
              <div className="text-center">1</div>
              <div className="text-center">Admin</div>
              <div className="text-center">ABC</div>
              <div className="text-center">
                <span className="">Active</span>
              </div>
              <div className="text-center">
                <span className="">Active</span>
              </div>
              <div className="text-center">
                <span className="">Active</span>
              </div>
              <div className="text-center">
                <span className="bg-green-200 text-green-600 px-2 py-1 rounded font-bold text-[10px]">
                  Completed
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-xl hover:text-green-500 cursor-pointer text-yellow-500 p-2">
                  <FaPrint />
                </span>
              </div>
            </div>

            <hr />

            <div className="data-row grid gap-1 md:gap-2 grid-cols-8 text-gray-600 text-xs my-4 items-center">
              <div className="text-center">2</div>
              <div className="text-center">Admin</div>
              <div className="text-center">XYZ</div>
              <div className="text-center">
                <span className="">Active</span>
              </div>
              <div className="text-center">
                <span className="">Active</span>
              </div>
              <div className="text-center">
                <span className="">Active</span>
              </div>
              <div className="text-center">
                <span className="bg-green-200 text-green-600 px-2 py-1 rounded font-bold text-[10px]">
                  Completed
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-xl hover:text-green-500 cursor-pointer text-yellow-500 p-2">
                  <FaPrint />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Report;
