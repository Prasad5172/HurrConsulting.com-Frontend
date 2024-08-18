import React, { useContext, useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import "./button.css";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { toastFailed, toastSuccess } from "../../../Util/ToastFunctions";

function Request() {
  const { requestingEmail } = useContext(AdminContext);
  const { setIsLoading } = useContext(AuthContext);
  const [data, setData] = useState({
    email: requestingEmail || "", // Ensure email is initialized as an empty string if requestingEmail is undefined
    amount: 0, // Initialize amount as an empty string
  });
  const token = localStorage.getItem("token");

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  
  const handleSendBill = async () => {
    setIsLoading(true);
    console.log(data.amount)
    if(data.amount == "0" || data.amount == ""){
      setIsLoading(false);
      return toastFailed("Amount Must Greaterthan 0");
    }

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`,
      {
        email: data.email,
        amount: data.amount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      toastSuccess("Request Sent Successfully");
    } else {
      toastFailed("Failed to Send Request");
    }
    setData({
      email: "",
      amount: 0,
    });
    setIsLoading(false);
  };

  return (
    <>
      <div className="mt-4">
        <div className="mb-6 flex justify-center items-center flex-col">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[400px] w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
            value={data.email}
            onChange={InputEvent}
          />
        </div>
        <div className="mb-6 flex flex-col justify-center items-center">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[400px] w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100$"
            required
            value={data.amount}
            onChange={InputEvent}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="button-30 flex items-center"
            role="button"
            onClick={handleSendBill}
          >
            Send Bill
          </button>
        </div>
      </div>
    </>
  );
}

export default Request;
