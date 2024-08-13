import axios from "axios";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toastSuccess, toastFailed } from "../../../Util/ToastFunctions";

function PaymentRow({
  id,
  email,
  amount,
  status,
  request_date,
  payment_date,
}) {
  const [isModifying, setIsModifying] = useState(false);
  const token = localStorage.getItem("token");
  var color = "white";
  if(status == "PAID"){
    color = "[#16a34a]"
  }else if (status == "PENDING"){
    color = "[#f1a532]"
  }else{
    color = "[#e11d48]"
  }
  

  const handleUpdate = async () => {
    setIsModifying(true);
    
    setIsModifying(false);
  };
  const handleDelete = async () => {
    setIsModifying(true);
    setIsModifying(false);
  };

  return (
    <>
      <tr
        key={id}
        className=" bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-4 py-4  text-[18px] whitespace-nowrap text-white"
        >
          {email}
        </th>
        <td className="px-4 py-4 text-white  text-[18px] w-32">
          {amount} $
        </td>
        <td className={`px-4 py-4 text-${color}  text-[18px] w-32`}>
          {status} 
        </td>
        <td className="px-4 py-4 text-white  text-[18px] w-32">
          {request_date}
        </td>
        <td className="px-4 py-4 text-white  text-[18px] w-32 text-center">
          {payment_date == null ? "-  -  -  - ": payment_date}
        </td>
        <td className="px-4 py-4 text-white  text-[18px] w-32">
          {id}
        </td>
        <td className="px-4 py-4 flex space-x-2 justify-center  text-[18px]">
          {isModifying ? (
            <>
              <PulseLoader
                cssOverride={{ marginLeft: "20px" }}
                color="white"
                size={10}
                loading={isModifying}
                speedMultiplier={0.9}
              />
            </>
          ) : (
            <>
              <button
                className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-600"
                onClick={handleUpdate}
              >
                Refund
              </button> 
            </>
          )}
        </td>
      </tr>
    </>
  );
}

export default PaymentRow;
