import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
const AdminAuthContext = createContext();

const AdminAuth = ({ children }) => {
  const adminLogin = async (adminValue) => {
    const { email, password } = adminValue;
    if (!email || !password) {
      toast.error("Invalid User", { autoClose: 1000, pauseOnHover: false });
      return false; // Invalid input
    }
    try {
      const response = await axios.post(
        `https://backend-production-ade0.up.railway.app/v1/admin/admin-signIn`,
        adminValue,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Successfull.", {
          pauseOnHover: false,
          autoClose: 1000,
        });
      }
      const token = await response.data.token;
      if (token) {
        localStorage.setItem("adminlogin", token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      toast.error("Invalid User", {
        pauseOnHover:false,
        autoClose:1000
      })
      console.error(
        "Error logging in:",
        error.response ? error.response.data : error.message
      );
      return false;
    }
  };

  return (
    <AdminAuthContext.Provider value={{ adminLogin }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export { AdminAuth, AdminAuthContext };
