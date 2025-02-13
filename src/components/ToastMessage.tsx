import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = ({ message, type = "info" }) => {
  const showToast = () => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      case "info":
      default:
        toast.info(message);
        break;
    }
  };

  return (
    <>
      <button onClick={showToast} className="btn">
        Show Toast
      </button>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default ToastMessage;
