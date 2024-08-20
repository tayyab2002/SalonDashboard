import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { DashboardContext } from "../../context/DB_DataStrgContext";

const AddOffer = ({ editItem, setEditItem }) => {
  const { addNewOffer, updateOffer } = useContext(DashboardContext);
  const [offerData, setOfferData] = useState({
    title: "",
    maximumperuser: "",
    howexpire: "",
    expirydate: "",
    discounttype: "",
    discount: "",
    img: "",
    status: false,
  });
  const [imgPreview, setImgPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setOfferData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = async (e) => {
    const file = await e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setOfferData((prevFormData) => ({
        ...prevFormData,
        img: reader.result,
      }));
      setImgPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleToggleChange = (e) => {
    setOfferData((prevFormData) => ({
      ...prevFormData,
      status: e.target.checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (offerData) {
      if (editItem) {
        await updateOffer(editItem._id, offerData);
        setEditItem(null);
      } else {
        await addNewOffer(offerData);
      }
      setOfferData({
        title: "",
        maximumperuser: "",
        howexpire: "",
        expirydate: "",
        discounttype: "",
        discount: "",
        img: "",
        status: false,
      });
      setImgPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      toast.error("Please fill in all fields.");
    }
  };
  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    if (editItem) {
      setOfferData({
        ...editItem,
        expirydate: formatDateForInput(editItem.expirydate),
      });
      setImgPreview(editItem.img);
    }
  }, [editItem]);
  return (
    <div>
      <div className="py-10 text-slate-400">
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col ">
              <label htmlFor="title">Title:</label>
              <input
                className="text-slate-400 p-3 border rounded border-blue-300"
                type="text"
                name="title"
                placeholder="Please Enter Title"
                value={offerData.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="maximumperuser">Maximum Per User</label>
              <input
                type="number"
                name="maximumperuser"
                className="text-slate-400 p-3 border rounded border-blue-300"
                placeholder="Enter Maximum Per User"
                value={offerData.maximumperuser}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col">
              <label htmlFor="howexpire">How Expire:</label>
              <select
                className="btext-slate-400 p-3 border rounded border-blue-300"
                name="howexpire"
                value={offerData.howexpire}
                onChange={handleChange}
              >
                <option name="amout" id="">
                  Using Date
                </option>
                <option name="percentage" id="">
                  Using Maximum usage
                </option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="expirydate">Expiry Date:</label>
              <input
                type="date"
                name="expirydate"
                className="text-slate-400 py-6 px-2 border rounded border-blue-300"
                placeholder="Time Slot"
                value={offerData.expirydate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="discounttype">Discount Type</label>
              <select
                className="border p-3 rounded bg-white border-blue-300"
                name="discounttype"
                value={offerData.discounttype}
                onChange={handleChange}
              >
                <option name="percentage" id="">
                  Percentage
                </option>
                <option name="amout" id="">
                  Amount
                </option>
              </select>
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="discount">Discount:</label>
              <input
                type="text"
                name="discount"
                className="text-slate-400 py-6 px-2 border rounded border-blue-300"
                placeholder="Enter Discount"
                value={offerData.discount}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col ">
              <input
                type="file"
                className="text-slate-400 p-2 border rounded border-blue-300"
                placeholder="Enter Discount"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            {imgPreview && (
              <div className="mt-2">
                <img
                  src={imgPreview}
                  alt="Selected"
                  className="w-50 h-20 object-cover"
                />
              </div>
            )}
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer gap-2">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={offerData.status}
                onChange={handleToggleChange}
              />
              <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-200">
                Offer Status
              </span>
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          <div className=" flex gap-6">
            <button
              type="submit"
              className="bg-yellow-500 text-white py-3 px-5 w-fit rounded"
            >
              Submit
            </button>
            <button
              type="reset"
              className=" text-black bg-slate-100 font-medium py-3 px-5 w-fit rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOffer;
