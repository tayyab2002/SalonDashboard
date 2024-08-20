import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const SelectableInput = ({ options }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (event) => {
    const value = event.target.value;
    if (value && !selectedItems.includes(value)) {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleRemove = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const handleSelectAll = (event) => {
    event.preventDefault();
    setSelectedItems(options);
  };

  const handleDeselectAll = (event) => {
    event.preventDefault();
    setSelectedItems([]);
  };

  return (
    <div className="py-4">
      <select
        onChange={handleSelect}
        value=""
        className="w-full lg:w-2/4 px-2 py-3 rounded border border-blue-100 shadow-none hover:shadow-none outline-none"
      >
        <option value="" disabled>
          Select User / Users
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="lg:inline lg:align-middle flex flex-nowrap gap-2 justify-end ms-6 mt-4">
        <button
          onClick={handleSelectAll}
          className="shadow-gray-200 shadow-md lg:w-1/6 rounded ms-2 me-2 md:ms-4 md:me-4 md:px-5 px-3 md:py-3 py-2 font-bold cursor-pointer text-[11px] md:text-[14px] text-white bg-yellow-400 duration-500"
        >
          Select All
        </button>
        <button
          onClick={handleDeselectAll}
          className="shadow-gray-200 shadow-md lg:w-1/6 rounded ms-2 me-2 md:ms-4 md:me-4 md:px-5 px-3 md:py-3 py-2 font-bold cursor-pointer text-[11px] md:text-[14px] text-black bg-gray-50 duration-500"
        >
          Deselect All
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 pt-4">
        {selectedItems.map((item) => (
          <span
            key={item}
            className="inline-flex items-center p-2 border rounded-md bg-gray-100"
          >
            {item}
            <button
              onClick={() => handleRemove(item)}
              className="ml-2 text-red-500"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

const CustomNotification = () => {
  const options = ["User 1", "User 2", "User 3", "User 4", "User 5", "User 6", "User 7", "User 8", "User 9", "User 10", "User 11", "User 12", "User 13"];
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

  const tags = [
    {
      id: 1,
      tag: "User_Name",
    },
  ];

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
          <div className="mt-4">
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

          <div className="my-8">
            <form action="#">
              <div className="my-8">
                <div>
                  <label className="text-gray-400 block my-2" htmlFor="NotificationTitle">
                    Notification Title
                  </label>
                </div>
                <div>
                  <input
                    className="w-full px-2 py-4 border border-blue-100 rounded shadow-none hover:shadow-none outline-none"
                    type="text"
                    name="NotificationTitle"
                    id="NotificationTitle"
                    placeholder="Please enter the Notification Title"
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    className="text-gray-400 block my-2"
                    htmlFor="NotificationSubtitle"
                  >
                    Notification Subtitle
                  </label>
                </div>
                <div>
                  <input
                    className="w-full px-2 py-4 border border-blue-100 rounded shadow-none hover:shadow-none outline-none"
                    type="text"
                    name="NotificationSubtitle"
                    id="NotificationSubtitle"
                    placeholder="Please enter the Notification Subtitle"
                  />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <label
                    className="text-gray-400 block"
                    htmlFor="notificationSubtitle"
                  >
                    User
                  </label>
                </div>
                <div>
                  <SelectableInput options={options} />
                </div>
              </div>
              <hr className="my-8" />
              <div className="notificationForm-btns ">
                <input
                  className="lg:w-2/12 shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold cursor-pointer text-[14px] text-white hover:scale-105 bg-yellow-400 duration-500"
                  type="submit"
                  value="Submit"
                />

                <input
                  className="lg:w-2/12 shadow-gray-200 shadow-md rounded me-4 px-5 py-3 font-bold cursor-pointer text-[14px] text-black hover:scale-105
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

export default CustomNotification;
