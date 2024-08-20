import React from "react";

const BookingView = ({ isOpen, onClose, bookingDetails }) => {
  if (!isOpen || !bookingDetails) return null;
  const {
    address,
    barber,
    customeremail,
    customername,
    endTime,
    phonenumber,
    services,
    startTime,
    status,
    time,
  } = bookingDetails;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-fit">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Order Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            X
          </button>
        </div>
        <div>
          <span>
           <strong> Customer Details: </strong>
            {
              <div>
                <p>Address : {address}</p>
                <p>Barber Name: {barber}</p>
                <p>Customer Name : {customername}</p>
                <p>Customer Email: {customeremail}</p>
                <p>Phone No: {phonenumber}</p>
                <p>Service: {services}</p>
                <p>Starting Time: {startTime}</p>
                <p>Ending Time: {endTime}</p>
                <p>Status : {status}</p>
                <p>Time: {time}</p>
              </div>
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingView;
