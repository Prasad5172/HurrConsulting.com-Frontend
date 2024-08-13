import axios from "axios";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import {toastSuccess,toastFailed }  from "../../../Util/ToastFunctions"


function EventRow({id, email,  startTime, endTime ,summary,description,attendees,calEventArray,setCalEventsArray }) {
  const [isModifying, setIsModifying] = useState(false);
  const token = localStorage.getItem("token")
  const [calEvent, setCalEvent] = useState({
    date: startTime.substring(0,10),
    start_time: startTime.substring(11,16),
    end_time: endTime.substring(11,16),
    duration: "",
  });
  const calculateDuration = (startTime, endTime) => {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const startDate = new Date(Date.now());
    startDate.setHours(startHours, startMinutes);

    const endDate = new Date(Date.now());
    endDate.setHours(endHours, endMinutes);

    const durationMs = endDate - startDate;
    const durationMinutes = Math.floor(durationMs / 60000);
    return durationMinutes;
  };

  // calculate duration on time change
  useEffect(() => {
    const duration = calculateDuration(calEvent.start_time, calEvent.end_time);
    setCalEvent((prevEvent) => ({
      ...prevEvent,
      duration: duration,
    }));
  }, [calEvent.start_time, calEvent.end_time]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCalEvent({ ...calEvent, [name]: value });
  };

  const handleReset = () => {
    calEventArray.map((ele) => {
      if(ele.id == id) {
        console.log(ele.start.dateTime.substring(0,10));
        setCalEvent({
          date: ele.start.dateTime.substring(0,10),
          start_time: ele.start.dateTime.substring(11,16),
          end_time: ele.end.dateTime.substring(11,16),
          duration: "",
        });
      }
    })
  };
  const handleUpdate = async () => {
    setIsModifying(true);
    const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/event/${id}`,
      {
      summary:summary,
      description:description,
      start :`${calEvent.date}T${calEvent.start_time}:00`,
      end :`${calEvent.date}T${calEvent.end_time}:00`,
      attendees:attendees
    }, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );
    if(res.status){
      toastSuccess("Updated Succesfully")
    }else{
      toastFailed("Failed to Delete")
    }
    calEventArray.map((ele,ind) => {
      if(ele.id == id) {
        ele.start = `${calEvent.date}T${calEvent.start_time}:00`;
        ele.end = `${calEvent.date}T${calEvent.end_time}:00`;
      }
    })
    setIsModifying(false);
  };
  const handleDelete = async () => {
    setIsModifying(true);
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/event/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.status === 200) {
        toastSuccess("Deleted Successfully");
  
        // Remove the event from the local state in AdminPage
        setCalEventsArray(calEventArray.filter((ele) => ele.id !== id));
      } else {
        toastFailed("Failed to Delete");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toastFailed("Failed to Delete");
    } finally {
      setIsModifying(false);
    }
  };
  

  return (
    <>
      <tr key={id} className=" bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-4 py-4  text-[18px] text-gray-900 whitespace-nowrap dark:text-white"
        >
          {email}
        </th>
        <td className="px-4 py-4  text-[18px] ">
          {" "}
          <input
            className="bg-gray-800 time-input text-white cursor-pointer w-32 "
            type="date"
            name="date"
            id="date"
            value={calEvent.date}
            onChange={handleInputChange}
          />
        </td>
        <td className="px-4 py-4  text-[18px]">
          <input
            className="cursor-pointer time-input text-white bg-gray-800 w-20"
            type="time"
            name="start_time"
            id="start_time"
            value={calEvent.start_time}
            onChange={handleInputChange}
          />
        </td>
        <td className="px-4 py-4  text-[18px]">
          <input
            className="cursor-pointer time-input text-white bg-gray-800 w-20"
            type="time"
            name="end_time"
            id="end_time"
            value={calEvent.end_time}
            onChange={handleInputChange}
          />
        </td>
        <td className="px-4 py-4 text-white  text-[18px] w-32">{calEvent.duration} Min</td>
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
              {/* <span className="ml-2">{message}</span> */}
            </>
          ) : (
            <>
            <button
            className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-600"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className=" text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600"
            style={{ marginLeft: "40px" }}
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className=" text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600"
            style={{ marginLeft: "40px" }}
            onClick={handleReset}
            disabled={false}
          >
            Reset
          </button>
            </>
          )}

          
        </td>
      </tr>
    </>
  );
}

export default EventRow;
