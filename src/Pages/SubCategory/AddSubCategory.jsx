import React, { useContext, useState } from "react";
import { DashboardContext } from "../../context/DB_DataStrgContext";

const AddSubCategory = () => {
  const {addSubCategory} = useContext(DashboardContext);
  const [subCategory, setSubCategory] = useState({
    category:"",
    title:"",
    description:"",
    servicefor:"",
    duration:0,
    preparationtime:0,
    price:0,
  });

  const handleChange = (e)=>{
    const {name , value } = e.target;
    setSubCategory((prevData)=>({
      ...prevData,
      [name]:value
    }));
  }

  const formSubmit = async (e)=>{
    e.preventDefault();
    if(subCategory.title){
      await addSubCategory(subCategory)
    }
    else{
      console.log("fill");
    }
  }
  const { allCategory } = useContext(DashboardContext);
  return (
    <div>
      <div className="py-10 text-slate-400">
        <form className="flex flex-col gap-10" onSubmit={formSubmit}>
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col gap-3">
              <label htmlFor="title">Category:</label>
              <select
                name="category"
                id="category"
                className="border p-2.5 rounded bg-white border-blue-300"
                value={subCategory.category}
                onChange={handleChange}
              >
                <option value="default">Select Category</option>
                {allCategory.map((items) => {
                  const { _id, title } = items;
                  return (
                    <option key={_id} value={title}>
                      {title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="title">Title:</label>
              <input
                className="text-slate-400 p-3 border rounded border-blue-300"
                type="text"
                id="title"
                name="title"
                placeholder="Please Enter Title"
                value={subCategory.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                id="description"
                className="border p-3 rounded bg-white border-blue-300"
                value={subCategory.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          
          <div className=" grid grid-cols-4 gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Service For:</label>
              <select className="border p-2.5 rounded bg-white border-blue-300 "
              name="servicefor"
              value={subCategory.servicefor}
              onChange={handleChange}
              >
                <option name="men&women" value="men&women">
                  Men & Women
                </option>
                <option name="men" value="men">
                  Men
                </option>
                <option name="women" value="women">
                  Women
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">
                Duration <small>(*in minute)</small>
              </label>
              <input
                type="number"
                name="duration"
                className="border p-3 rounded bg-white border-blue-300 placeholder:text-[13px]"
                placeholder="Please Enter Duration in Mins"
                value={subCategory.duration}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="preparation">
                Preparation Time <small>(*in minute)</small>
              </label>
              <input
                type="number"
                name="preparationtime"
                className="border p-3 rounded bg-white border-blue-300 placeholder:text-[13px]"
                placeholder="Please Enter Preparation Time in Mins"
                value={subCategory.preparationtime}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="border p-3 rounded bg-white border-blue-300 placeholder:text-[13px]"
                placeholder="Please Enter Preparation Time in Mins"
                value={subCategory.price}
                onChange={handleChange}
              />
            </div>
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

export default AddSubCategory;
