import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoIosPrint } from "react-icons/io";
import { DashboardContext } from "../../../context/DB_DataStrgContext";
import BookingView from "../../Booking/BookingView";
const BookingList = () => {
  const { allBookings, updateBookingStatus } = useContext(DashboardContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const openDialog = (booking) => {
    setIsDialogOpen(true);
    setSelectedBooking(booking);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const getTimeFromDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const pendingBookings = allBookings.filter(
    (booking) => booking.status === "waiting"
  );
  return (
    <div className="p-5">
      <div className=" bg-slate-50 rounded-md border">
        <div className="grid grid-cols-12 md:py-6 py-3">
          <div className="md:text-2xl text-xl col-span-6 px-3 text-gray-400">
            Booking
          </div>
          <div className="col-span-6 px-3">
            <NavLink to={"/booking"}>
              <button className="md:p-2 p-1 bg-yellow-300 hover:bg-yellow-400 duration-300 rounded-md text-white float-end font-bold ">
                See all
              </button>
            </NavLink>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="heading-row grid gap-4 grid-cols-4 font-bold text-[15px] bg-zinc-100 md:p-5 px-5 py-3">
              <div className="text-center">Name</div>
              <div className="text-center">Email</div>
              <div className="text-center">Time</div>
              <div className="text-center">Action</div>
            </div>
            <hr />
            {pendingBookings.map((item) => {
              const { _id, customername, time, customeremail } = item;
              return (
                <div key={_id}>
                  <div className="data-row grid grid-cols-4 text-gray-600 text-xs p-5">
                    <div className="text-center">{customername}</div>
                    <div className="text-center text-amber-500 hover:text-blue-700">
                      <a href="#">{customeremail}</a>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-400 font-bold">
                        {getTimeFromDate(time)}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center gap-2">
                        <span className="text-xl text-green-600 cursor-pointer hover:text-green-700">
                          <AiFillLike
                            onClick={() => updateBookingStatus(_id, "approve")}
                          />
                        </span>
                        <span className="text-xl text-red-500 cursor-pointer hover:text-red-600">
                          <AiFillDislike
                            onClick={() => updateBookingStatus(_id, "reject")}
                          />
                        </span>
                        <span
                          className="text-xl text-orange-400 cursor-pointer hover:text-orange-700"
                          onClick={() => openDialog(item)}
                        >
                          <IoIosPrint />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr />
          </div>
        </div>
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

export default BookingList;
