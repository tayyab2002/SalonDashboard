import { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import AddNewEmployee from "./AddNewEmployee";
import { DashboardContext } from "../../context/DB_DataStrgContext";

const Employee = () => {
  const { empData, removeEomployee, empDetails } = useContext(DashboardContext);
  const [componentHandler, setComponentHandler] = useState(true);
  const [editItem , setEditItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    empDetails();
  },[])

  const filteredEmpData = empData.filter(employee =>
    employee.empname.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="">
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Employees</span>
        </div>
        <div className="userUrl p-4">
          <a href="" className="pr-2 text-yellow-400">
            <FaHome />
          </a>
          <span className="text-gray-400">/</span>{" "}
          <a href="" className="pl-2 text-yellow-400">
            Employee List
          </a>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">
            {componentHandler ? "Employees List" : "Add Employees"}
          </div>
          <div>
            {componentHandler ? (
              <button
                onClick={() => setComponentHandler(false)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow"
              >
                Add Employee
              </button>
            ) : (
              <button
                onClick={() => setComponentHandler(true)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow"
              >
                Back Employee List
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
                  Search By Name:
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

                {filteredEmpData?.map((items, index) => {
                  const { _id, empname, email, address, status, img } = items;
                  return (
                    <div key={_id}>
                      <div className="data-row grid gap-2 md:gap-4 grid-cols-7 text-gray-600 text-xs my-4 items-center">
                        <div className="text-center">{index + 1}</div>
                        <div className="text-center">{empname}</div>
                        <div className="text-center text-amber-500 hover:text-blue-700">
                          <a href="#">{email}</a>
                        </div>
                        <div className="text-center">{address}</div>
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
                          {status ? (
                            <span className="bg-green-200 text-green-600 px-2 py-1 rounded font-bold text-[10px]">
                              Active
                            </span>
                          ) : (
                            <span className="bg-red-200 text-red-600 px-2 py-1 rounded font-bold text-[10px]">
                              Disable
                            </span>
                          )}
                        </div>
                        <div className="text-center flex flex-nowrap justify-center">
                          <span className="text-xl text-green-500 cursor-pointer hover:text-blue-600 p-2">
                            <BsPencil 
                             onClick={() => {
                              setEditItem(items);
                              setComponentHandler(false);
                            }}
                            />
                          </span>
                          <span className="text-xl text-red-500 cursor-pointer hover:text-blue-600 p-2">
                            <RiDeleteBinLine
                              onClick={() => removeEomployee(_id)}
                            />
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
            <AddNewEmployee editItem={editItem} setEditItem={setEditItem}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
