import React, { useEffect, useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import PaymentRow from "./PaymentRow"

function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const token = localStorage.getItem("token");

  // Function to fetch events from the backend
  const fetchPayments = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/payment`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if (res.status) {
        setPayments(res.data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchPayments(); // Call fetchEvents only once when the component mounts
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
                  <table className="w-full h-full text-sm text-left rtl:text-right text-gray-400 ">
                    <thead className="text-md  uppercase  bg-gray-700 text-gray-400">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center font-bold text-white"
                        >
                          EMAIL
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-center font-bold w-32"
                        >
                          AMOUNT
                        </th>
                        <th scope="col" className="px-4 py-3 text-center w-32">
                        STATUS
                        </th>
                        <th scope="col" className="px-4 py-3 text-center w-32">
                          REQUEST_DATE
                        </th>
                        <th scope="col" className="px-4 py-3 text-center ">
                          PAYMENT_DATE
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          PAYMENT_ID
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
      <table className="w-full h-full text-sm text-left rtl:text-right text-gray-400 ">
        <thead className="text-md uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3 text-center font-bold">
            EMAIL
            </th>
            <th scope="col" className="px-4 py-3 text-center font-bold w-32">
            AMOUNT
            </th>
            <th scope="col" className="px-4 py-3 text-center w-32">
            STATUS
            </th>
            <th scope="col" className="px-4 py-3 text-center w-32">
            REQUEST_DATE
            </th>
            <th scope="col" className="px-4 py-3 text-center ">
            PAYMENT_DATE
            </th>
            <th scope="col" className="px-4 py-3 text-center">
            PAYMENT_ID
            </th>
            <th scope="col" className="px-4 py-3 text-center">
            ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {payments &&
            payments.length > 0 &&
            payments.map((ele, ind) => (
              <PaymentRow
                key={ind}
                id={ele.payment_id}
                email={ele.email} // Optional chaining to handle cases where attendees might be empty
                amount={ele.amount}
                status = {ele.status}
                request_date={ele.request_date}
                payment_date={ele.payment_date}
                setPaymentsArray={setPayments}
              />
            ))}
        </tbody>
      </table>
      {payments.length == 0 ? (
        <>
          <div className="w-full h-screen flex justify-center text-[20px] items-center overflow-hidden">
            No Payments Found
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Payments;
