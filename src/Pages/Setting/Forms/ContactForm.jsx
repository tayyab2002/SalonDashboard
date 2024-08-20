import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="py-10 text-slate-400">
        <form // onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col gap-3">
              <label className="" htmlFor="">Phone No:</label>
              <input
                type="tel"
                className="text-slate-400 py-6 px-2 border border-blue-300 rounded "
                // value={amount}
                // onChange={handleAmountChange}
                placeholder="+0000000000"
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                className="text-slate-400 py-6 px-2 border border-blue-300 rounded "
                // value={amount}
                // onChange={handleAmountChange}
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          <div className="flex md:flex-col gap-3">
            <label htmlFor="">Address:</label>
            <textarea
              className="border p-3 rounded border-blue-300"
              type="text"
              rows={5}
              // onChange={handleFileChange}
            />
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

export default ContactForm;
