import { faCalendarDays, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import EventRow from "./EventRow";
import "../Admin.css";
import axios from "axios";
import { HashLoader } from "react-spinners";

function Events() {
  const [calEvents, setCalEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const token = localStorage.getItem("token");

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/event`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if (res.status) {
        setCalEvents(res.data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchEvents(); // Call fetchEvents only once when the component mounts
  }, []); // Empty dependency array to ensure it runs only on mount

  // Render loading message while data is being fetched
  if (loading) {
    return (
      <>
        <div className="">
          <div className="flex flex-row">
            
            <div className=" w-full overflow-scroll">
              <div className="h-screen">
                <div className="relative overflow-x-auto">
                  <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center font-bold text-white"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center font-bold w-32"
                        >
                          Date
                        </th>
                        <th scope="col" className="px-4 py-3 text-center w-32">
                          Start
                        </th>
                        <th scope="col" className="px-4 py-3 text-center w-32">
                          End
                        </th>
                        <th scope="col" className="px-4 py-3 text-center ">
                          Duration
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>
                  </table>
                  <div className="h-screen w-full flex justify-center items-center">
                    <HashLoader
                      cssOverride={{ marginLeft: "20px" }}
                      color="#384152"
                      size={40}
                      loading={loading}
                      speedMultiplier={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3 text-center font-bold">
              Email
            </th>
            <th scope="col" className="px-4 py-3 text-center font-bold w-32">
              Date
            </th>
            <th scope="col" className="px-4 py-3 text-center w-32">
              Start
            </th>
            <th scope="col" className="px-4 py-3 text-center w-32">
              End
            </th>
            <th scope="col" className="px-4 py-3 text-center ">
              Duration
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {calEvents &&
            calEvents.length > 0 &&
            calEvents.map((ele, ind) => (
              <EventRow
                key={ind}
                id={ele.id}
                email={ele.attendees[0]?.email} // Optional chaining to handle cases where attendees might be empty
                startTime={ele.start.dateTime}
                endTime={ele.end.dateTime}
                summary={ele.summary}
                description={ele.description}
                attendees={ele.attendees}
                setCalEventsArray={setCalEvents}
                calEventArray={calEvents}
              />
            ))}
        </tbody>
      </table>
      {calEvents.length == 0 ? (
        <>
          <div className="w-full h-screen flex justify-center text-[20px] items-center overflow-hidden">
            No Events Found
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Events;
