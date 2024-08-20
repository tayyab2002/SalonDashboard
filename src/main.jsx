import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AdminAuth } from "./context/AdminAuthContext.jsx";
import { DB_DataStorage } from "./context/DB_DataStrgContext.jsx";
import { ToastContainer } from "react-toastify";
import "./utils/GlobalStyle.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DB_DataStorage>
    <AdminAuth>
      <React.StrictMode>
        <App />
        <ToastContainer className="custom-toast-container float-right" />
      </React.StrictMode>
    </AdminAuth>
  </DB_DataStorage>
);
