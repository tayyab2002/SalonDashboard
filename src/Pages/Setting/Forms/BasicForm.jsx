import React from "react";

const BasicForm = () => {
  return (
    <div>
      <div className="py-10 text-slate-400">
        <form // onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          <div className="grid md:grid-cols-2 gap-5 ">
            <div className="flex flex-col gap-3">
              <label htmlFor="">Currency:</label>
              <select
                // value={currency}
                // onChange={handleCurrencyChange}
                className="text-slate-400 py-3 border rounded border-blue-300"
              >
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="flex flex-col gap-3 ">
              <label htmlFor="">Time Slot Lenght</label>
              <input
                type="number"
                className="text-slate-400 py-6 px-2 border rounded border-blue-300"
                // value={amount}
                // onChange={handleAmountChange}
                placeholder="Time Slot"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Main Image</label>
            <input
              className="border p-2 rounded bg-white border-blue-300"
              type="file"
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

export default BasicForm;
