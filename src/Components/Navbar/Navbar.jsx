import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  isValidElement,
} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import Switcher from "./Switcher";
import "./Navbar.css";

const Navbar = () => {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const handleLoginSignup = () => setIsDropdownOpen((prev) => !prev);
  const handleProfileDropdown = () => setIsProfileDropDown((prev) => !prev);

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
    console.log("handleLogout");
    event.preventDefault();
    localStorage.clear();
    // Delay the closing of the dropdown
    setTimeout(() => {
      window.location.reload();
    }, 100); // Adjust delay as needed
  };

  return (
    <nav className="flex justify-between bg-transparent dark:bg-[#d2e1de]">
      <div className="flex justify-center items-center overflow-hidden">
        <div className="logo flex items-center mt-3">
          <img src="hurrconsulting.svg" width={"250px"} alt="Logo Image" />
        </div>
      </div>
      <ul className="nav-links 2xl:bg-transparent xl:bg-transparent lg:bg-transparent bg-white dark:2xl:bg-transparent dark:xl:bg-transparent dark:lg:bg-transparent dark:bg-[#131418] 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-4 mr-4">
        <div className="2xl:block xl:block lg:block hidden">
          <Switcher />
        </div>
        <li className="hover:cursor-pointer">
          <p
            onClick={() => {
              navigate("/");
              handleClick();
            }}
            className="text-black dark:2xl:text-black dark:xl:text-black dark:lg:text-black dark:text-white"
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
            className="text-black dark:2xl:text-black dark:xl:text-black dark:lg:text-black dark:text-white"
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
            className="text-black dark:2xl:text-black dark:xl:text-black dark:lg:text-black dark:text-white"
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
            className="text-black dark:2xl:text-black dark:xl:text-black dark:lg:text-black dark:text-white"
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
            className="text-black dark:2xl:text-black dark:xl:text-black dark:lg:text-black dark:text-white"
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
            className="text-black dark:2xl:text-black dark:xl:text-black dark:lg:text-black dark:text-white"
          >
            ContactUs
          </p>
        </li>
        {isAuthenticated ? (
          <li className="text-white select-none 2xl:block xl:block lg:block hidden">
            <div
              className="relative inline-block text-left hover:cursor-pointer"
              onClick={handleProfileDropdown}
              ref={profileDropdownRef}
            >
              <div>
                <FontAwesomeIcon icon={faUser} color="gray" />
              </div>
              {isProfileDropDown && (
                <div
                  className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                  id="dropdown"
                >
                  {isAdmin && (
                    <div className="py-1" role="none">
                      <button
                        type="button"
                        className="block w-full px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5]"
                        role="menuitem"
                        tabIndex="-1"
                        id="dropdown-item"
                        onClick={() => navigate("/admin")}
                      >
                        Admin Panel
                      </button>
                      <button
                        type="button"
                        className="block w-full px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5]"
                        role="menuitem"
                        tabIndex="-1"
                        id="dropdown-item"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        ) : (
          <li className="select-none 2xl:block xl:block lg:block hidden">
            <div
              className="relative inline-block text-left"
              onClick={handleLoginSignup}
              ref={dropdownRef}
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
                  id="dropdown"
                >
                  <div className="py-1" role="none">
                    <div
                      onClick={() => navigate("/signin")}
                      className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="dropdown-item"
                    >
                      Login
                    </div>
                    <div
                      onClick={() => navigate("/signup")}
                      className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="dropdown-item"
                    >
                      Signup
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
        )}
      </ul>

      <div className="2xl:hidden xl:hidden lg:hidden flex justify-center items-center mr-16">
        <div className="mr-1">
          <Switcher />
        </div>
        <div
          className="relative inline-block text-left bg-gray-500 hover:bg-gray-400 rounded-full px-2.5 py-1 hover:cursor-pointer"
          onClick={handleProfileDropdown}
          ref={profileDropdownRef}
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
                <>
                  {isAdmin && (
                    <div className="py-1" role="none">
                      <button
                        type="button"
                        className="block w-full px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                        onClick={() => navigate("/admin")}
                      >
                        Admin Panel
                      </button>
                    </div>
                  )}

                  <div className="py-1" role="none">
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-sm text-gray-700 text-center hover:bg-[#f5f5f5] hover:cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div
                  className="py-1 absolute mt-2 right-2 z-10 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
