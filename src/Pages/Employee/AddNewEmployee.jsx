import { useContext, useEffect, useRef, useState } from "react";
import { DashboardContext } from "../../context/DB_DataStrgContext";

const AddNewEmployee = ({ editItem, setEditItem }) => {
  const { addNewEmployee, updateEmployee, allCategory, allSubCategory } =
    useContext(DashboardContext);
  const [relatedSubCategory, setRelatedSubCategory] = useState(allSubCategory);
  const [noSubCategoriesMessage, setNoSubCategoriesMessage] = useState("");
  const [newEmpData, setNewEmpData] = useState({
    empname: "",
    address: "",
    email: "",
    password: "",
    description: "",
    experince: "",
    service: "",
    subservices: [],
    img: "",
    status: true,
  });
  const [imgPreview, setImgPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "service") {
      subCategoryFilter(value);
    }
    setNewEmpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };
  const handleSubServiceChange = (e) => {
    const { value, checked } = e.target;
    setNewEmpData((prevData) => {
      const updatedSubservices = checked
        ? [...prevData.subservices, value]
        : prevData.subservices.filter((sub) => sub !== value);
      return { ...prevData, subservices: updatedSubservices };
    });
  };
  const subCategoryFilter = (selectedCategory) => {
    const filteredSubCategories = allSubCategory.filter(
      (sub) => sub.category === selectedCategory
    );
    if (filteredSubCategories.length === 0) {
      setNoSubCategoriesMessage("No sub-categories available.");
    } else {
      setNoSubCategoriesMessage("");
    }
    setRelatedSubCategory(filteredSubCategories);
  };

  const handleToggleChange = (e) => {
    setNewEmpData((prevData) => ({
      ...prevData,
      status: e.target.checked,
    }));
  };
  // this function for img convert into base64 format
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewEmpData((prevData) => ({
        ...prevData,
        img: reader.result,
      }));
      setImgPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newEmpData) {
      if (editItem) {
        await updateEmployee(editItem._id, newEmpData);
        setEditItem(null);
      } else {
        await addNewEmployee(newEmpData);
      }
      setNewEmpData({
        empname: "",
        address: "",
        email: "",
        password: "",
        description: "",
        experince: "",
        service: "",
        subservice: [],
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
  useEffect(() => {
    if (editItem) {
      setNewEmpData({
        ...editItem,
        service: editItem.service || "",
        subservices: editItem.subservices || [],
      });
      setImgPreview(editItem.img);
    }
  }, [editItem]);
  return (
    <div>
      <div>
        <div className="py-10 text-slate-400">
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="grid md:sgrid-cols-2 gap-5 ">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="">Emp Name:</label>
                  <input
                    type="text"
                    name="empname"
                    className="text-slate-400 py-6 px-2 border rounded border-blue-300"
                    placeholder="Enter Employee Name"
                    value={newEmpData.empname}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Address:</label>
                  <input
                    type="text"
                    name="address"
                    className="text-slate-400 py-6 px-2 border rounded border-blue-300"
                    placeholder="Enter Address"
                    value={newEmpData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="text-slate-400 py-6 px-2 border rounded border-blue-300"
                    placeholder="email@gmail.com"
                    value={newEmpData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="">Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="text-slate-400 py-6 px-2 border rounded border-blue-300"
                    placeholder="Password"
                    value={newEmpData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Description</label>
              <textarea
                className="border p-2 rounded bg-white border-blue-300"
                type="text"
                name="description"
                rows={5}
                value={newEmpData.description}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label htmlFor="">Experince:</label>
                <input
                  type="text"
                  name="experince"
                  className="border p-2 rounded bg-white border-blue-300"
                  placeholder="Write Experince"
                  value={newEmpData.experince}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Services:</label>
                <select
                  name="service"
                  className="border p-2.5 rounded bg-white border-blue-300"
                  value={newEmpData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  {allCategory?.map((items) => {
                    const { title, _id } = items;
                    return (
                      <option
                        key={_id}
                        value={title}
                        onClick={subCategoryFilter}
                      >
                        {title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col">
                <h3 className="">Sub Services</h3>
                <ul className="w-48 h-52 overflow-y-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  {noSubCategoriesMessage ? (
                    <p className="text-red-500">{noSubCategoriesMessage}</p>
                  ) : (
                    <>
                      {relatedSubCategory.map((items) => {
                        const { _id, title } = items;
                        return (
                          <li
                            key={_id}
                            className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                          >
                            <div className="flex items-center ps-3">
                              <input
                                id={title}
                                type="checkbox"
                                value={title}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                checked={newEmpData.subservices && newEmpData.subservices.includes(title)}
                                onChange={handleSubServiceChange}
                              />
                              <label
                                htmlFor={title}
                                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                {title}
                              </label>
                            </div>
                          </li>
                        );
                      })}
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Image:</label>
              <input
                type="file"
                name="img"
                className="border p-2 rounded bg-white border-blue-300"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
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
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={newEmpData.status}
                  onChange={handleToggleChange}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Employee Status
                </span>
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
    </div>
  );
};

export default AddNewEmployee;
