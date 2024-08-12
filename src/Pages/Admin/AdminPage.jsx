import { faCalendarDays, faClockRotateLeft, faPaperPlane, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Outlet, useNavigate } from "react-router-dom";
import {AdminContext} from "../../context/AdminContext"
function AdminPage() {
  const navigate = useNavigate();
  const [requestingEmail,setRequestingEmail] = useState("");
  const [active,setActive] = useState();
  return (
    <>
      <AdminContext.Provider
        value={{
          requestingEmail,
          setRequestingEmail
        }}
      >
        <div className="mt-[80px] ">
          <div className="flex flex-row">
            <div className="2xl:w-1/6 xl:w-1/6 lg:w-1/6 w-auto ">
              <div className="bg-gray-700 h-full ">
                <div className="pt-12 2xl:px-5 xl:px-5 lg:px-5 px-3 hover:text-white text-2xl text-gray-400 hover:cursor-pointer" onClick={() => navigate("/admin")}>
                  <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  <span className="2xl:inline xl:inline lg:inline hidden ml-3">
                    Events
                  </span>
                </div>
                <div className="pt-12 2xl:px-5 xl:px-5 lg:px-5 px-3 hover:text-white text-2xl text-gray-400 hover:cursor-pointer" onClick={() => navigate("/admin/users")}>
                    <FontAwesomeIcon icon={faUsers} />{" "}
                    <span className="2xl:inline xl:inline lg:inline hidden ml-3">
                      Users
                    </span>
                  </div>
                <div className="pt-12 2xl:px-5 xl:px-5 lg:px-5 px-3 hover:text-white text-2xl text-gray-400 hover:cursor-pointer" onClick={() => navigate("/admin/users")}>
                    <FontAwesomeIcon icon={faPaperPlane} />{" "}
                    <span className="2xl:inline xl:inline lg:inline hidden ml-3">
                      Request
                    </span>
                  </div>
                <div className="pt-12 2xl:px-5 xl:px-5 lg:px-5 px-3 hover:text-white text-2xl text-gray-400 hover:cursor-pointer" onClick={() => navigate("/admin/users")}>
                    <FontAwesomeIcon icon={faClockRotateLeft} />{" "}
                    <span className="2xl:inline xl:inline lg:inline hidden ml-3">
                      Payment History
                    </span>
                  </div>
              </div>
            </div>
            <div className="2xl:w-5/6 xl:w-5/6 lg:w-5/6 w-full overflow-scroll">
              <div className="h-screen">
                <div className="relative overflow-x-auto">
                  <Outlet/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminContext.Provider>
    </>
  );
}

export default AdminPage;
