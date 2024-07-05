import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const {isAuthenticated,displayProfile,setAuthenticated,profile,userName,} = useContext(AuthContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white py-2 relative flex justify-center ">
        <div className="container  flex justify-between items-center relative mx-2">
          {/* Logo */}
          <div className="flex items-center justify-between w-full  ">
            <div
              className="image hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                className="h-16 mr-4"
                src="logo192.png" // Replace with your logo path
                alt="logo"
              />
            </div>
            <div className=" text-black hidden lg:block xl:block 2xl:block ">
              <span
                className={`mr-6 font-bold text-[22px] ${
                  active != 0 ? "hover:text-gray-500" : ""
                }  cursor-pointer ${active == 0 ? "text-orange-600" : ""} `}
                onClick={() => {
                  setActive(0);
                  navigate("/");
                }}
              >
                Home
              </span>
              <span
                className={`mr-6 font-bold text-[22px] ${
                  active != 1 ? "hover:text-gray-500" : ""
                }  cursor-pointer ${active == 1 ? "text-orange-600" : ""} `}
                onClick={() => {
                  setActive(1);
                  navigate("/locations");
                }}
              >
                Locations
              </span>
              <span
                className={`mr-6 font-bold text-[22px] ${
                  active != 2 ? "hover:text-gray-500" : ""
                }  cursor-pointer ${active == 2 ? "text-orange-600" : ""} `}
                onClick={() => {
                  setActive(2);
                  navigate("/internet");
                }}
              >
                Internet
              </span>
             
              <span
                className={`mr-6 font-bold text-[22px] ${
                  active != 4 ? "hover:text-gray-500" : ""
                }  cursor-pointer ${active == 4 ? "text-orange-600" : ""} `}
                onClick={() => {
                  setActive(4);
                  navigate("/contact-boost-mobile");
                }}
              >
                Contact Us
              </span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className=" lg:hidden flex flex-row gap-4 items-center mr-8">
          {
                isAuthenticated && (
                    <>
                        {
                            displayProfile ? (
                              <Tooltip title={userName} placement="top" className="hover:cursor-pointer">
                                    < img src={`${profile}`} alt="Profile"  className="w-[40px] h-[40px] rounded-full" id='account-logo' />
                                </Tooltip>

                            ) : <>

                                <Tooltip title={userName} placement="top" className="hover:cursor-pointer">
                                    <FontAwesomeIcon icon={faUser} id="account-logo" style={{color:"#000000"}}/>
                                </Tooltip>

                            </>
                        }


                    </>

                )
            }
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            id="mobile_nav"
            className={`lg:hidden bg-white absolute left-0 top-16 w-full nav-items z-10 three-sides-box-shadow ${
              isOpen ? "open" : ""
            }`}
          >
            <li className="hover:bg-gray-50 p-2">
              <p
                onClick={() => {
                  toggleMenu();
                  navigate("/");
                }}
                className="block text-black py-2 px-4 hover:text-orange-600 hover:cursor-pointer"
              >
                Home
              </p>
            </li>
            <li className="hover:bg-gray-50 p-2">
              <p
                onClick={() => {
                  toggleMenu();
                  navigate("/appointment");
                }}
                className="block text-black py-2 px-4 hover:text-orange-600 hover:cursor-pointer"
              >
                Appoinment
              </p>
            </li>
            <li className="hover:bg-gray-50 p-2">
              <p
                onClick={() => {
                  toggleMenu();
                  navigate("/internet");
                }}
                className="block text-black py-2 px-4 hover:text-orange-600 hover:cursor-pointer"
              >
                Internet
              </p>
            </li>
            
            <li className="hover:bg-gray-50 p-2">
              <p
                onClick={() => {
                  toggleMenu();
                  navigate("/contact-boost-mobile");
                }}
                className="block text-black py-2 px-4 hover:text-orange-600 hover:cursor-pointer"
              >
                Contact Us
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
