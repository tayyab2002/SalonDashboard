import React, { useContext, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { DashboardContext } from "../../context/DB_DataStrgContext";

const Reviews = () => {
  const { getAllReviews, allreviews, removeReview } =
    useContext(DashboardContext);
  useEffect(() => {
    getAllReviews();
  }, []);
  return (
    <div className="">
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Reviews</span>
        </div>
        <div className="userUrl p-4">
          <a href="" className="pr-2 text-yellow-400">
            <FaHome />
          </a>
          <span className="text-gray-400">/</span>{" "}
          <a href="" className="pl-2 text-yellow-400">
            Reviews List
          </a>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">Reviews</div>
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
          <div className="flex flex-row">
            <label htmlFor="search" className="text-gray-600 p-1">
              Search:
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
            <div className="font-bold text-xs bg-zinc-100 py-5 flex uppercase">
              <div className="w-1/12">#</div>
              <div className="w-3/12">Name</div>
              <div className="w-3/12">Email</div>
              <div className="w-2/12">Star</div>
              <div className="w-2/12">Comment</div>
              <div className="w-1/12">Action</div>
            </div>

            <hr />

            {allreviews.map((item, index) => {
              const { _id, name, email, rating, comment } = item;
              return (
                <div key={_id}>
                  <div className="text-gray-600 text-xs my-4 flex ">
                    <div className="w-1/12">{index + 1}</div>
                    <div className="w-3/12">{name}</div>
                    <div className="w-3/12 text-amber-500 hover:text-blue-700">
                      {email}
                    </div>
                    <div className=" grid grid-cols-4 ">
                      {[...Array(5)].map((_, starIndex) => {
                        return (
                          <div key={starIndex}>
                            <FaStar
                              className={`text-[15px] ${
                                starIndex < rating
                                  ? "text-yellow-400"
                                  : "text-slate-400"
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="w-2/12  ml-10">
                      <span className="text-slate-400 ">{comment}</span>
                    </div>
                    <div className="w-1/12  flex justify-end">
                      <span className="text-xl text-red-500 cursor-pointer hover:text-red-600">
                        <RiDeleteBinLine onClick={() => removeReview(_id)} />
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
    </div>
  );
};

export default Reviews;
