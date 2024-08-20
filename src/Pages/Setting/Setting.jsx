import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ContactForm from "./Forms/ContactForm";
import BasicForm from "./Forms/BasicForm";

const Setting = () => {
  const [formChangeHandler, setFormChangeHandler] = useState("basic");
  const SettingForm = (val) => {
    setFormChangeHandler(val);
  };
  return (
    <div className="">
      <div className="userTitle px-10 py-10">
        <div className="userHeading mr-6">
          <span>Setting</span>
        </div>
        <div className="userUrl p-4">
          <NavLink to={"/"} className="pr-2 text-yellow-400">
            <FaHome />
          </NavLink>
          <span className="text-gray-400">/</span>
          <NavLink className="pl-2 text-yellow-400">Setting</NavLink>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold text-gray-00">Setting</div>
        </div>
        <hr className="my-6" />
        <div>
          <div>
            <button
              onClick={() => SettingForm("basic")}
              className={`shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold md:text-[14px] text-[11px] duration-500 ${
                formChangeHandler === "basic"
                  ? "bg-yellow-400 text-white "
                  : " text-yellow-400"
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => SettingForm("contactus")}
              className={`shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold md:text-[14px] text-[11px] duration-500 ${
                formChangeHandler === "contactus"
                  ? "bg-yellow-400 text-white "
                  : " text-yellow-400"
              }`}
            >
              Contact Us
            </button>
          </div>
          {formChangeHandler === "basic" ? <BasicForm /> : <ContactForm />}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Setting;
