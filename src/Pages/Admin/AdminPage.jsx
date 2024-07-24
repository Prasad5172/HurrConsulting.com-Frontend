import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import EventRow from "./EventRow"
import "./Admin.css";
import axios from "axios";
const calenderEventData =[
  {
    "kind": "calendar#event",
    "etag": "\"3443515103238000\"",
    "id": "f484olo4c1khhgp0knuklg0mu0",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=ZjQ4NG9sbzRjMWtoaGdwMGtudWtsZzBtdTAgc2l2YXNhaWtyaXNobmExMjAwNUBt",
    "created": "2024-07-23T17:59:11.000Z",
    "updated": "2024-07-23T17:59:11.619Z",
    "summary": "Test Event1",
    "description": "This is a test event1",
    "creator": {
      "email": "sivasaikrishna12005@gmail.com",
      "self": true
    },
    "organizer": {
      "email": "sivasaikrishna12005@gmail.com",
      "self": true
    },
    "start": {
      "dateTime": "2024-07-24T15:00:00+05:30",
      "timeZone": "Asia/Kolkata"
    },
    "end": {
      "dateTime": "2024-07-24T15:10:00+05:30",
      "timeZone": "Asia/Kolkata"
    },
    "iCalUID": "f484olo4c1khhgp0knuklg0mu0@google.com",
    "sequence": 0,
    "attendees": [
      {
        "email": "prasadpadala2005@gmail.com",
        "responseStatus": "needsAction"
      }
    ],
    "hangoutLink": "https://meet.google.com/xic-xtms-uvp",
    "conferenceData": {
      "createRequest": {
        "requestId": "e14215a0-7a8f-461d-b899-8f07c85e0d4b",
        "conferenceSolutionKey": {
          "type": "hangoutsMeet"
        },
        "status": {
          "statusCode": "success"
        }
      },
      "entryPoints": [
        {
          "entryPointType": "video",
          "uri": "https://meet.google.com/xic-xtms-uvp",
          "label": "meet.google.com/xic-xtms-uvp"
        }
      ],
      "conferenceSolution": {
        "key": {
          "type": "hangoutsMeet"
        },
        "name": "Google Meet",
        "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
      },
      "conferenceId": "xic-xtms-uvp"
    },
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  }
]
var data;
// const fetchEvents = async () => {
//     const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events`);
//     console.log(res.data);
//     data = res.data;
// }
// fetchEvents()

function AdminPage() {
  const [calEvents, setCalEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events`);
      if (res.data.success) {
        setCalEvents(res.data.data); // Store events in state
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
    return <div>Loading...</div>;
  }


    function formatDate(dateString) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const [year, month, day] = dateString.split('-');
        const formattedDate = `${day} ${months[parseInt(month) - 1]}, ${year}`;
        return formattedDate;
    }

    function convertTo12Hour(timeString) {
        // Split the time string into hours and minutes
        let [hours, minutes] = timeString.split(':').map(Number);
    
        // Determine AM or PM
        const period = hours >= 12 ? 'PM' : 'AM';
    
        // Convert hours from 24-hour to 12-hour format
        hours = hours % 12 || 12; // Converts '0' hour to '12'
    
        // Format the hours and minutes as two digits
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
    
        // Return the formatted time
        return `${formattedHours}:${formattedMinutes} ${period}`;
    }
    function convertTo24Hour(timeString) {
        // Split the time string into time and period (AM/PM)
        const [time, period] = timeString.split(' ');
    
        // Split the time into hours and minutes
        let [hours, minutes] = time.split(':').map(Number);
    
        // Convert hours to 24-hour format
        if (period === 'PM' && hours !== 12) {
            hours += 12;
        } else if (period === 'AM' && hours === 12) {
            hours = 0;
        }
    
        // Format the hours and minutes as two digits
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
    
        // Return the formatted time
        return `${formattedHours}:${formattedMinutes}`;
    }
    function convertISOToReadable(isoString) {
        const date = new Date(isoString);
    
        // Format the date part
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
    
        // Format the time part
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        const formattedHours = hours.toString().padStart(2, '0');
    
        // Combine date and time parts
        return `${day} ${month}, ${year} ${formattedHours}:${minutes} ${period}`;
    }
  return (
    <>
      <div className="mt-[72px]">
        <div className="flex flex-row">
          <div className="2xl:w-1/6 xl:w-1/6 lg:w-1/6 w-auto ">
            <div className="bg-gray-700 h-full ">
              <div className="pt-12 2xl:px-5 xl:px-5 lg:px-5 px-3 text-white text-2xl hover:text-gray-400 hover:cursor-pointer">
                <FontAwesomeIcon icon={faCalendarDays} />{" "}
                <span className="2xl:inline xl:inline lg:inline hidden ml-3">Events</span>
              </div>
            </div>
          </div>
          <div className="2xl:w-5/6 xl:w-5/6 lg:w-5/6 w-full overflow-scroll">
            <div className="h-screen">
              <div className="relative overflow-x-auto">
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
                        {
                            calEvents?.map((ele,ind) => {
                                return <EventRow key={ind} id={ele.id} email={ele.attendees[0].email}  startTime={ele.start.dateTime} endTime={ele.end.dateTime} summary={ele.summary} description={ele.description} attendees={ele.attendees}/>
                            })
                        }
                    
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

export default AdminPage;
