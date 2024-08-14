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
  payment_intent
}) {
  const [isModifying, setIsModifying] = useState(false);
  const token = localStorage.getItem("token");
  let flag = false;
  var color = "text-white";
  if(status == "PAID"){
    color = "text-[#16a34a]"
    flag = true;
  }else if (status == "PENDING"){
    color = "text-[#f1a532]"
  }else{
    color = "text-[#e11d48]"
  }
  
 
  const handleRefund = async () => {
    setIsModifying(true);
    try {
      
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/payment/refund`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({payment_intent:payment_intent}),
        }
      );
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        toastSuccess("Amount was Refunded");
        flag = false;
      } else {
        toastFailed(data.message);
      }
    } catch (error) {
      console.log(error);
      toastFailed(error.message)
    }
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
        <td className={`px-4 py-4 ${color}  text-[18px] w-32`}>
          {status} 
        </td>
        <td className="px-4 py-4 text-white  text-[18px] w-32">
          {request_date}
        </td>
        <td className="px-4 py-4 text-white  text-[18px] w-32 text-center">
          {payment_date == null ? "-  -  -  - ": payment_date}
        </td>
        <td className="px-4 py-4 text-white text-[18px] w-32">
          {id.substring(0,10)}...
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
                className={`${ flag ? "text-green-600":"text-green-900"} text-green-600 hover:text-green-900 `}
                onClick={handleRefund}
                disabled={!flag}
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
