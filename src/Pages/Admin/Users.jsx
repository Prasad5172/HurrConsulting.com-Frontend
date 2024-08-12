import { faCalendarDays, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import EventRow from "./EventRow";
import UserRow from ".//UserRow";
import "./Admin.css";
import axios from "axios";
import { HashLoader } from "react-spinners";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const token = localStorage.getItem("token");
  // Function to fetch events from the backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.data);
      if (res.status) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchUsers(); // Call fetchEvents only once when the component mounts
  }, []); // Empty dependency array to ensure it runs only on mount


  // Render loading message while data is being fetched
  if (loading) {
    return (
      <>
        <div className="">
          <div className="flex flex-row">
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
                          user_id
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center font-bold w-32"
                        >
                          username
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
      <div className="mt-1">
        <div className="flex flex-row">
          <div className=" w-full overflow-scroll">
            <div className="h-screen">
              <div className="relative overflow-x-auto">
                
                <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-center font-bold"
                      >
                        user_id
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-center font-bold w-32"
                      >
                        email
                      </th>

                      <th scope="col" className="px-4 py-3 text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users?.length > 0 &&
                      users?.map((ele, ind) => (
                        <UserRow
                          key={ind}
                          id={ele.user_id}
                          email={ele.email} // Optional chaining to handle cases where attendees might be empty
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
