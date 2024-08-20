import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const Notification = () => {
  const [copytext, setCopyText] = useState("");
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        alert("Failed to copy text: ", err);
      });
    setCopyText(text);
  };

  const [bookingdata, setBookingBtn] = useState("approvalBooking");

  const [formData, setFormData] = useState({
    title: "Approved Booking (User)",
    notificationTitle: "{{branch_name}} Has Accepted Your Booking Request.",
    notificationSubtitle: "More information please contact {{branch_name}}.",
  });

  const bookingButton = (val) => {
    setBookingBtn(val);
    switch (val) {
      case "approvalBooking":
        setFormData({
          title: "Approved Booking (User)",
          notificationTitle:
            "{{branch_name}} Has Accepted Your Booking Request.",
          notificationSubtitle:
            "More information please contact {{branch_name}}.",
        });
        break;
      case "cancelBooking":
        setFormData({
          title: "Cancel Booking (Owner - User)",
          notificationTitle: "Booking For {{user_name}} is cancel",
          notificationSubtitle:
            "Your Booking on {{booking_date}} is Cancel please many further information {{booking_id}} keep this ref no.",
        });
        break;
      case "bookingRejected":
        setFormData({
          title: "Booking Rejected (User)",
          notificationTitle: "Dear {{user_name}}, Just Reject Booking Req",
          notificationSubtitle:
            "Your Booking on {{booking_date}} is Rejected By {{branch_name}}",
        });
        break;
      default:
        break;
    }
  };

  const tags = [
    {
      id: 1,
      tag: "User_Name",
    },
    {
      id: 2,
      tag: "branch_Name",
    },
    {
      id: 3,
      tag: "Booking_Date",
    },
    {
      id: 4,
      tag: "Booking_ID",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Notification</span>
        </div>
        <div className="userUrl p-4">
          <a href="" className="pr-2 text-yellow-400">
            <FaHome />
          </a>
          <span className="text-gray-400">/</span>{" "}
          <a href="" className="pl-2 text-yellow-400">
            Notification
          </a>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold text-gray-00">Notification</div>
        </div>
        <hr className="my-6" />
        <div>
          <div>
            <h5 className="font-bold text-gray-600">Available Tags</h5>
            <p className="mt-2 text-gray-500">Click to copy</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {tags.map((items) => {
              return (
                <span
                  key={items.id}
                  onClick={() => handleCopy(items.tag)}
                  className="bg-green-200 text-green-600 px-2 py-1 rounded font-bold text-[11px] me-4 cursor-pointer"
                >
                  {items.tag}
                </span>
              );
            })}
          </div>
          <hr className="my-8" />

          <div className="flex gap-4 lg:gap-0 lg:justify-center flex-wrap justify-center">
            <button
              id="approvalBooking"
              onClick={() => bookingButton("approvalBooking")}
              className={`shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold text-[14px] bg-white hover:text-white hover:bg-yellow-400 duration-500 ${
                bookingdata === "approvalBooking"
                  ? "text-white bg-yellow-400"
                  : "text-yellow-400"
              }`}
            >
              Approval Booking (User)
            </button>
            <button
              id="cancelBooking"
              onClick={() => bookingButton("cancelBooking")}
              className={`shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold text-[14px]  bg-white hover:text-white hover:bg-yellow-400 duration-500  ${
                bookingdata === "cancelBooking"
                  ? "text-white bg-yellow-400"
                  : "text-yellow-400"
              }`}
            >
              Cancel Booking (Owner - User)
            </button>
            <button
              id="bookingRejected"
              onClick={() => bookingButton("bookingRejected")}
              className={`shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold text-[14px] bg-white hover:text-white hover:bg-yellow-400 duration-500 ${
                bookingdata === "bookingRejected"
                  ? "text-white bg-yellow-400"
                  : "text-yellow-400"
              }`}
            >
              Booking Rejected (User)
            </button>
          </div>
          <div className="my-8">
            <form action="#">
              <div className="my-8">
                <div>
                  <label className="text-gray-400 block my-2" htmlFor="title">
                    Title
                  </label>
                </div>
                <div>
                  <input
                    className="w-full px-2 py-4 border border-blue-100 rounded shadow-none hover:shadow-none outline-none"
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    className="text-gray-400 block my-2"
                    htmlFor="notificationTitle"
                  >
                    Notification Title
                  </label>
                </div>
                <div>
                  <input
                    className="w-full px-2 py-4 border border-blue-100 rounded shadow-none hover:shadow-none outline-none"
                    type="text"
                    name="notificationTitle"
                    id="notificationTitle"
                    value={formData.notificationTitle}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    className="text-gray-400 block my-2"
                    htmlFor="notificationSubtitle"
                  >
                    Notification Subtitle
                  </label>
                </div>
                <div>
                  <input
                    className="w-full px-2 py-4 rounded border border-blue-100 shadow-none hover:shadow-none outline-none "
                    type="text"
                    name="notificationSubtitle"
                    id="notificationSubtitle"
                    value={formData.notificationSubtitle}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="notificationForm-btns">
                <input
                  className="shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold cursor-pointer text-[14px] text-white hover:scale-105 bg-yellow-400 duration-500"
                  type="submit"
                  value="Submit"
                />

                <input
                  className="shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold cursor-pointer text-[14px] text-black hover:scale-105
                bg-gray-50 duration-500"
                  type="reset"
                  value="Reset"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
