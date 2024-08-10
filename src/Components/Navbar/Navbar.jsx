import React, { useContext, useState } from "react";
import "./Navbar.css"; // Create a separate CSS file for styling
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  // Handle mouse enter and leave events
  const handleLoginSignup = () => setIsDropdownOpen(!isDropdownOpen);
  const handleProfileDropdown = () => setIsProfileDropDown(!isProfileDropDown);

  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
  };

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="flex justify-between bg-[#d2e1de]">
      <div className=" flex justify-center items-center overflow-hidden ml-4">
        <div className="logo flex items-center mt-2">
          <img
            src="HurrConsulting.svg"
            width={"235px"}
            alt="Logo Image"
          />
        </div>
      </div>
      <ul className="nav-links  2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-4  mr-4">
        <li className="hover:cursor-pointer ">
          <p
            onClick={() => {
              navigate("/");
              handleClick();
            }}
          >
            Home
          </p>
        </li>
        <li className="hover:cursor-pointer">
          <p
            onClick={() => {
              navigate("/service");
              handleClick();
            }}
          >
            Service
          </p>
        </li>
        <li className="hover:cursor-pointer">
          <p
            onClick={() => {
              navigate("/about");
              handleClick();
            }}
          >
            About
          </p>
        </li>
        <li className="hover:cursor-pointer">
          <p
            onClick={() => {
              navigate("/resource");
              handleClick();
            }}
          >
            Resource
          </p>
        </li>
        <li className="hover:cursor-pointer">
          <p
            onClick={() => {
              navigate("/testimonials");
              handleClick();
            }}
          >
            Testimonials
          </p>
        </li>
        <li className="hover:cursor-pointer">
          <p
            onClick={() => {
              navigate("/contact");
              handleClick();
            }}
          >
            ContactUs
          </p>
        </li>
        {isAuthenticated ? (
          <>
            <li className="text-white select-none 2xl:block xl:block lg:block hidden">
              <div
                className="relative inline-block text-left hover:cursor-pointer"
                onClick={handleProfileDropdown}
              >
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                {isProfileDropDown && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <button
                        type="button" // Use "button" type to prevent default form submission
                        className="block w-full px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                        onClick={handleLogout} // Call the handleLogout function on click
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="text-white select-none 2xl:block xl:block lg:block hidden">
              <div
                className="relative inline-block text-left"
                onClick={handleLoginSignup}
              >
                <div className="dropdown-toggle cursor-pointer text-[#3e3e3e]">
                  <FontAwesomeIcon icon={faRightToBracket} color="#3e3e3e" />{" "}
                  Login/SignUp
                  <FontAwesomeIcon
                    className="ml-1.5"
                    icon={isDropdownOpen ? faCaretUp : faCaretDown}
                  />{" "}
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <a
                        onClick={() => navigate("/signin")}
                        className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Login
                      </a>
                      <a
                        onClick={() => navigate("/signup")}
                        className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Signup
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </>
        )}
      </ul>

      <div className=" 2xl:hidden xl:hidden lg:hidden flex justify-center items-center mr-16">
        <div
          className="relative inline-block text-left bg-gray-500 hover:bg-gray-400 rounded-full px-2.5 py-1 hover:cursor-pointer"
          onClick={handleProfileDropdown}
        >
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          {isProfileDropDown && (
            <div
              className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              {isAuthenticated ? (
                <div className="py-1" role="none">
                  <button
                    type="button" // Use "button" type to prevent default form submission
                    className="block w-full px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                    onClick={handleLogout} // Call the handleLogout function on click
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div
                  className="py-1 absolute mt-2 right-2 z-10  w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="none"
                >
                  <a
                    onClick={() => navigate("/signin")}
                    className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Login
                  </a>
                  <a
                    onClick={() => navigate("/signup")}
                    className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Signup
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="hamburger" onClick={handleClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
