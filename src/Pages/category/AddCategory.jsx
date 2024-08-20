import React, { useContext, useEffect, useRef, useState } from "react";
import { DashboardContext } from "../../context/DB_DataStrgContext";
import { toast } from "react-toastify";

const AddCategory = ({ editItem,setEditItem }) => {
  const { addCategory, updateCategory} = useContext(DashboardContext);
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    status: false,
  });
  const [imgPreview, setImgPreview] = useState(null);
  const fileInputRef = useRef(null);
  const handleChange = (e) => {
    if (e && e.target) {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };
  const handleFileChange = async (e) => {
    const file = await e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevFormData) => ({
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: e.target.checked,
    }));
  };

  // for submit function 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.title && formData.img) {
      if(editItem){
        await updateCategory(editItem._id, formData);
        setEditItem(null) 
      } else{
        await addCategory(formData);
      }
      setFormData({
        title: "",
        img: "",
        status :false
      });
      setImgPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  // clear form afther submit 
  const resetForm = async () => {
    setFormData({
      title: "",
      img: "",
      status:false
    });
    setImgPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setImgPreview(null);
  };
  useEffect(() => {
    if (editItem) {
      setFormData(editItem);
      setImgPreview(editItem.img);
    }
  }, [editItem]);
  return (
    <div>
      <div className="py-10 text-slate-400">
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-1 gap-20 ">
            <div className="flex flex-col gap-3">
              <label htmlFor="title">Name:</label>
              <input
                className="text-slate-400 p-2 border rounded border-blue-300"
                type="text"
                id="title"
                placeholder="Please Enter Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-12 gap-3 ">
              <div className="col-span-9">
                <div className="flex flex-col">
                  <label htmlFor="">Select Image:</label>
                  <input
                    type="file"
                    id="img"
                    className="text-slate-400 p-2 border rounded border-blue-300"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                </div>
              </div>
              <div className="col-span-3">
                {imgPreview && (
                  <div className="mt-2">
                    <img
                      src={imgPreview}
                      alt="Selected"
                      className="w-50 h-30 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={formData.status}
                onChange={handleToggleChange}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Category Status
              </span>
            </label>
          </div>
          <div className=" flex gap-6">
            <button
              type="submit"
              className="bg-yellow-500 text-white py-3 px-5 w-fit rounded"
            >
              {editItem ? "Update" : "Submit"}
            </button>
            <button
              type="reset"
              onClick={() => resetForm()}
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

export default AddCategory;
