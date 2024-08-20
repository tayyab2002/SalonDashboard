import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../utils/GlobalStyle.css"
import { NavLink } from "react-router-dom";
const PrivacyAndPolicy = () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ font: [] },{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <div>
      <div className="userTitle p-10">
        <div className="text-2xl text-white font-bold mr-6">
          <span>Roles</span>
        </div>
        <div className="userUrl p-4">
          <NavLink className="pr-2 text-yellow-400">
            <FaHome />
          </NavLink>
          <span className="text-gray-400">/</span>{" "}
          <a href="" className="pl-2 text-yellow-400">
            Roles
          </a>
        </div>
      </div>
      <div className="userList p-10 bg-slate-50 mx-12 z-10">
        <div className="row justify-between">
          <div className="font-bold">Roles</div>
        </div>
        <hr className="my-6" />
        <div>
          <div className="py-10 ">
            <ReactQuill
            className="  h-[400px] resize-y "
              modules={modules}
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
