import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const DashboardContext = createContext();

const DB_DataStorage = ({ children }) => {
  const [allCategory, setAllCategory] = useState([]);
  const [allSubCategory, setAllSubCategory] = useState([]);
  const [empData, setEmpData] = useState([]);
  const [allOfferList, setAllOfferList] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [allreviews, setAllReviews] = useState([]);

  // for count the length
  const [emplength, setEmplength] = useState(0);
  const [offerCount, setOfferCount] = useState(0);
  const [allCategoryLength, setAllCategoryLength] = useState(0);
  const [allSubCategoryLength, setAllSubCategoryLength] = useState(0);
  const [allBookingLength, setAllBookingLength] = useState(0);
  // get all employee details function
  const empDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/v1/emp/all_employees"
      );
      const data = await response.data;
      setEmpData(data);
      setEmplength(data.length);
    } catch (error) {
      console.error(error);
    }
  };
  // remove employee
  const removeEomployee = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/v1/emp/remove",
        {
          data: { id },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setEmpData((prevCategories) =>
          prevCategories.filter((category) => category._id !== id)
        );
        toast.info("Successfully Deleted:", {
          autoClose: 1000,
          pauseOnHover: false,
        });
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // new employee add
  const addNewEmployee = async (newEmployeeData) => {    
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/emp/register",
        newEmployeeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.info(response.data.msg, {
          autoClose: 1000,
          pauseOnHover: false,
        });
        empDetails();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.info(error.response.data.msg, {
        pauseOnHover: false,
        autoClose: 1000,
      });
    }
  };

  const updateEmployee = async (id, data) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/v1/emp/update_data/employee_no${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setEmpData((prevCategories) =>
          prevCategories.map((category) =>
            category._id === data._id ? data : category
          )
        );
        toast.success("Employee Data Updated Successfully", {
          autoClose: 1000,
          pauseOnHover: false,
        });
        empDetails();
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response);
      if ((error.response.statusText = "Payload Too Large")) {
        toast.error("You img size is Too high you", {
          autoClose: 1000,
          pauseOnHover: false,
        });
      }
    }
  };
  // =========================================================

  // category added and another all operation
  const addCategory = async (category) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/categorie/addcategory",
        category,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Category Add Successfull.", {
          pauseOnHover: false,
          autoClose: 1000,
        });
        getAllCategories();
      }
    } catch (error) {
      if ((error.response.statusText = "Payload Too Large")) {
        return toast.error("Upload data size Too Large Like: IMG");
      }
      toast.info("This Category Already Available", {
        pauseOnHover: false,
        autoClose: 1000,
      });
    }
  };
  // egt all category data
  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/v1/categorie/allcategory"
      );
      const data = await response.data.data;
      setAllCategory(data);
      setAllCategoryLength(data.length);
    } catch (error) {
      console.error("Error", error);
    }
  };
  // remove category
  const removeCategory = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/v1/categorie/remove_C",
        {
          data: { id },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setAllCategory((prevCategories) =>
          prevCategories.filter((category) => category._id !== id)
        );
        toast.info("Successfully Deleted:", {
          autoClose: 2000,
          pauseOnHover: false,
        });
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // category update
  const updateCategory = async (id, data) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/v1/categorie/update/category${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Category Updated Successfully", {
          autoClose: 1000,
          pauseOnHover: false,
        });
        getAllCategories();
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response);
      if ((error.response.statusText = "Payload Too Large")) {
        toast.error("You img size is Too high you", {
          autoClose: 1000,
          pauseOnHover: false,
        });
      }
    }
  };

  // =========================================================

  const getAllSubCategory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/v2/categorie/subcategories/list"
      );
      const data = await response.data;
      setAllSubCategory(data.data);
      setAllSubCategoryLength(data.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const addSubCategory = async (subCategoryData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/v2/categorie/subcategories/addnew",
        subCategoryData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Sub-Category Add Successfull.", {
          pauseOnHover: false,
          autoClose: 1000,
        });
        getAllSubCategory();
      }
    } catch (error) {
      console.error("Error response:", error.response);
      toast.error("Failed to add Sub-Category. Please try again.", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  };

  const removeSubCategory = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/v2/categorie/subcategories/find/delete",
        {
          data: { id },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setAllSubCategory((prevSubCategories) =>
          prevSubCategories.filter((subcategory) => subcategory._id !== id)
        );
        toast.info("Successfully Deleted:", {
          autoClose: 2000,
          pauseOnHover: false,
        });
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // =========================================================
  // offer operations

  // add new offer
  const addNewOffer = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/offer/add_offers",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Offer Add Successful.", {
          pauseOnHover: false,
          autoClose: 1000,
        });
        getAllOffers();
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  // all offer list
  const getAllOffers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/v1/offer/offers_list"
      );
      const data = await response.data;
      setAllOfferList(data.offers);
      setOfferCount(data.offers.length);
    } catch (error) {
      console.error("Error", error);
    }
  };

  // remove offer function
  const removeOffer = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/v1/offer/remove_offer",
        {
          data: { id },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setAllOfferList((prevCategories) =>
          prevCategories.filter((category) => category._id !== id)
        );
        toast.info("Successfully Deleted:", {
          autoClose: 2000,
          pauseOnHover: false,
        });
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const updateOffer = async (id, data) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/v1/offer/update_offer${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Offer Updated Successfully", {
          autoClose: 1000,
          pauseOnHover: false,
        });
        getAllOffers();
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response);
      if ((error.response.statusText = "Payload Too Large")) {
        toast.error("You img size is Too high you", {
          autoClose: 1000,
          pauseOnHover: false,
        });
      }
    }
  };
  // ============================================================

  // Reviews operations

  const getAllReviews = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/v1/reviews/all_reviews"
      );
      const data = await response.data.data;
      setAllReviews(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const removeReview = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/v1/reviews/remove_review",
        {
          data: { id },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setAllReviews((prevCategories) =>
          prevCategories.filter((category) => category._id !== id)
        );
        toast.info("Successfully Deleted:", {
          autoClose: 1000,
          pauseOnHover: false,
        });
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ======================================================
  // all booking operations

  const getAllBookingsList = async (id, status) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/v1/booking/all/bookinglist"
      );
      setAllBookings(response.data.data);
      setAllBookingLength(response.data.data.length);
    } catch (error) {
      console.error("Error", error);
    }
  };
  // update order status
  const updateBookingStatus = async (id, status) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/v1/booking/bookings/${id}/status`,
        { status }
      );
      if (response.status === 200) {
        getAllBookingsList();
        toast.info("Order Update Successfully", {
          autoClose: 1000,
          pauseOnHover: false,
        });
      }
    } catch (error) {
      console.error("Failed to update booking status", error);
    }
  };
  return (
    <DashboardContext.Provider
      value={{
        empData,
        removeEomployee,
        setEmpData,
        empDetails,
        addNewEmployee,
        updateEmployee,
        addCategory,
        getAllCategories,
        allCategory,
        getAllSubCategory,
        allSubCategory,
        addSubCategory,
        removeSubCategory,
        removeCategory,
        updateCategory,
        addNewOffer,
        getAllOffers,
        allOfferList,
        removeOffer,
        updateOffer,
        offerCount,
        getAllBookingsList,
        allBookings,
        updateBookingStatus,
        getAllReviews,
        allreviews,
        removeReview,

        emplength,
        allBookingLength,
        allCategoryLength,
        allSubCategoryLength,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DB_DataStorage, DashboardContext };
