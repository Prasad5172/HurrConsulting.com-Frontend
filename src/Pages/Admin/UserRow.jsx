import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import {toastSuccess,toastFailed }  from "../../Util/ToastFunctions"
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

function EventRow({ id,email}) {
  const navigate = useNavigate();
  const {setRequestingEmail} = useContext(AdminContext)
  const [isModifying, setIsModifying] = useState(false);
  const token = localStorage.getItem("token")
  const [details, setDetails] = useState({
    email: email
  });
 
  const handleSendRequest = async () => {
    setRequestingEmail(email);
    navigate("/admin/sendrequest");
  };
  

  return (
    <>
      <tr key={id} className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-4 py-4  text-[18px] text-gray-900 whitespace-nowrap dark:text-white"
        >
          {id}
        </th>
        <th
          scope="row"
          className="px-4 py-4  text-[18px] text-gray-900 whitespace-nowrap dark:text-white"
        >
          {email}
        </th>
        
        <td className="px-4 py-4 flex space-x-2 justify-center items-center  text-[18px]">
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
            className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-600 hover:underline"
            onClick={handleSendRequest}
          >
            Send Request
          </button>
            
            </>
          )}
        </td>
            
      </tr>
        
    </>
  );
}

export default EventRow;
