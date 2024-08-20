import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import AddOffer from "./AddOffer";
import { NavLink } from "react-router-dom";
import { DashboardContext } from "../../context/DB_DataStrgContext";

const Offer = () => {
  const { allOfferList, removeOffer, getAllOffers } =
    useContext(DashboardContext);
  const [componetHandler, setComponetHandler] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  useEffect(() => {
    getAllOffers();
  }, []);
  return (
    <div className="">
      <div className="userTitle px-10 py-10 ">
        <div className="userHeading mr-6">
          <span>Offers</span>
        </div>
        <div className="userUrl p-4">
          <a href="" className="pr-2 text-yellow-400">
            <FaHome />
          </a>
          <span className="text-gray-400">/</span>
          <NavLink href="" className="pl-2 text-yellow-400">
            Offer List
          </NavLink>
        </div>
      </div>
      <div className="userList mx-12 z-10 bg-white">
        <div className="row justify-between p-10">
          <div className="font-bold">
            {componetHandler ? "Offers" : "Add New Offer"}
          </div>
          <div>
            {componetHandler ? (
              <button
                onClick={() => setComponetHandler(false)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow"
              >
                Add Offer
              </button>
            ) : (
              <button
                onClick={() => setComponetHandler(true)}
                className="bg-yellow-400 px-4 py-2 rounded-md text-white font-bold y text-xs cursor-pointer hover:shadow"
              >
                Back Offer List
              </button>
            )}
          </div>
        </div>
        <hr className="my-6" />

        {componetHandler ? (
          <div>
            <div className="row userMenu justify-between my-3 px-5 py-4">
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
                <div className="heading-row grid gap-2 md:gap-4 grid-cols-7 font-bold text-[9px] bg-slate-100 py-3 text-gray-500 uppercase">
                  <div className="text-center">#</div>
                  <div className="text-center">Title</div>
                  <div className="text-center">expiry</div>
                  <div className="text-center">maximum usage per user</div>
                  <div className="text-center">discount</div>
                  <div className="text-center">status</div>
                  <div className="text-center">action</div>
                </div>

                <hr />
                {allOfferList.map((items, index) => {
                  const {
                    _id,
                    title,
                    status,
                    expirydate,
                    maximumperuser,
                    discount,
                    discounttype,
                  } = items;
                  return (
                    <div key={_id}>
                      <div className="data-row grid gap-2 md:gap-4 grid-cols-7 text-gray-600 text-xs my-4 items-center">
                        <div className="text-center">{index + 1}</div>
                        <div className="text-center">{title}</div>
                        <div className="text-center">
                          {formatDate(expirydate)}
                        </div>
                        <div className="text-center">{maximumperuser}</div>
                        <div className="text-center">
                          {discount}
                          {discounttype === "percentage" ? "%" : "$"}
                        </div>
                        <div className="text-center">
                          {status === true ? (
                            <span className="text-green-500 bg-green-200 px-2 py-1 rounded font-bold">
                              Active
                            </span>
                          ) : (
                            <span className="text-red-500 bg-red-200 px-2 py-1 rounded font-bold">
                              Disable
                            </span>
                          )}
                        </div>
                        <div className="flex justify-center gap-5">
                          <span
                            className="text-xl text-red-500 cursor-pointer hover:text-red-600"
                            onClick={() => removeOffer(_id)}
                          >
                            <RiDeleteBinLine />
                          </span>
                          <span className="text-xl text-green-600 cursor-pointer hover:text-green-700">
                            <MdEdit
                              onClick={() => {
                                setEditItem(items);
                                setComponetHandler(false);
                              }}
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
          <div className="px-10">
            <AddOffer editItem={editItem} setEditItem={setEditItem}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offer;
