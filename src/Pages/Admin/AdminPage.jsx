import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import EventRow from "./EventRow";
import "./Admin.css";
import axios from "axios";
import { HashLoader } from "react-spinners";

function AdminPage() {
  const [calEvents, setCalEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const token = localStorage.getItem("token");

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/events`,
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
        <div className="mt-[80px] ">
          <div className="flex flex-row">
            <div className="2xl:w-1/6 xl:w-1/6 lg:w-1/6 w-auto ">
              <div className="bg-gray-700 h-full ">
                <div className="pt-12 2xl:px-5 xl:px-5 lg:px-5 px-3 text-white text-2xl hover:text-gray-400 hover:cursor-pointer">
                  <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  <span className="2xl:inline xl:inline lg:inline hidden ml-3">
                    Events
                  </span>
                </div>
              </div>
            </div>
            <div className="2xl:w-5/6 xl:w-5/6 lg:w-5/6 w-full overflow-scroll">
              <div className="h-screen">
                <div className="relative overflow-x-auto">
                  <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center font-bold"
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
      <div className="mt-[80px] ">
        <div className="flex flex-row">
          <div className="2xl:w-1/6 xl:w-1/6 lg:w-1/6 w-auto ">
            <div className="bg-gray-700 h-full ">
              <div className="pt-12 2xl:px-5 xl:px-5 lg:px-5 px-3 text-white text-2xl hover:text-gray-400 hover:cursor-pointer">
                <FontAwesomeIcon icon={faCalendarDays} />{" "}
                <span className="2xl:inline xl:inline lg:inline hidden ml-3">
                  Events
                </span>
              </div>
            </div>
          </div>
          <div className="2xl:w-5/6 xl:w-5/6 lg:w-5/6 w-full overflow-scroll">
            <div className="h-screen">
              <div className="relative overflow-x-auto">
                <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-center font-bold"
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
                  <tbody>
                    {calEvents && calEvents.length > 0 && (
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
                      ))
                    ) }
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
