import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaPrint , FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { DashboardContext } from "../../context/DB_DataStrgContext";
import BookingView from "./BookingView";

const Booking = () => {
  const { allBookings, getAllBookingsList, updateBookingStatus} = useContext(DashboardContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const openDialog = (booking) => {
    setIsDialogOpen(true);
    setSelectedBooking(booking);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  const sortedBookings = [...allBookings].sort((a, b) => new Date(b.time) - new Date(a.time));
  useEffect(() => {
    getAllBookingsList();
  }, []);
  return (
    <div>
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Booking</span>
        </div>
        <div className="userUrl p-4">
          <a href="" className="pr-2 text-yellow-400">
            <FaHome />
          </a>
          <span className="text-gray-400">/</span>
          <a href="" className="pl-2 text-yellow-400">
            Booking List
          </a>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">Booking</div>
          <div></div>
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
          <div className="min-w-[800px]">
            <div className="heading-row grid gap-1 md:gap-2 grid-cols-7 font-bold text-xs bg-zinc-100 py-5">
              <div className="text-center">#</div>
              <div className="text-center">User</div>
              <div className="text-center">Booking Time</div>
              <div className="text-center">Amount</div>
              <div className="text-center">Payment</div>
              <div className="text-center">Status</div>
              <div className="text-center">Action</div>
            </div>

            <hr />

            {sortedBookings.map((items, index) => {
              const {
                _id,
                customername,
                amount,
                time,
                startTime,
                endTime,
                status,
              } = items;
              return (
                <div key={_id}>
                  <div className="data-row grid gap-1 md:gap-2 grid-cols-7 text-gray-600 text-xs my-4 items-center">
                    <div className="text-center">{index + 1}</div>
                    <div className="text-center">{customername}</div>
                    <div className="text-center">
                      <span className="">
                        {formatDate(time)} <br />
                        {startTime} to {endTime}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="">{amount + "$"}</span>
                    </div>
                    <div className="text-center">
                      <span className="">Paid</span>
                    </div>
                    <div className="text-center">
                      {status === "complete" ? (
                        <span className="bg-green-200 text-green-600 px-2 py-1 rounded font-bold text-[10px]">
                          Completed
                        </span>
                      ) : status === "reject" ? (
                        <span className="bg-red-200 text-red-600 px-2 py-1 rounded font-bold text-[10px]">
                          Rejected
                        </span>
                      ) : status === "approve" ? (
                        <span className="bg-blue-200 text-blue-500 px-2 py-1 rounded font-bold text-[10px]">
                          Approve
                        </span>
                      ) : (
                        <span className="bg-yellow-200 text-yellow-600 px-2 py-1 rounded font-bold text-[10px]">
                          Waiting
                        </span>
                      )}
                    </div>
                    <div className="text-center">
                    <div className="flex justify-center gap-2">
                    {status !== "reject" && status !== "complete" && (
                        <div className="flex py-2 gap-3">
                          <span className="text-xl text-green-600 cursor-pointer hover:text-green-700">
                            <FaThumbsUp onClick={() => updateBookingStatus(_id, "complete")} />
                          </span>
                          <span className="text-xl text-red-500 cursor-pointer hover:text-red-600">
                            <FaThumbsDown onClick={() => updateBookingStatus(_id, "reject")} />
                          </span>
                        </div>
                      )}
                      <span
                        className="text-xl hover:text-green-500 cursor-pointer text-yellow-500 p-2"
                        onClick={() => openDialog(items)}
                      >
                        <FaPrint />
                      </span>
                    </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <hr />
      </div>
      <BookingView
        isOpen={isDialogOpen}
        title="Print Booking Details"
        onClose={closeDialog}
        bookingDetails={selectedBooking}
      />
    </div>
  );
};

export default Booking;
