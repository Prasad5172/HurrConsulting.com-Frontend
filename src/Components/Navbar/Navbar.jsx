import React, { useState } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    let toggle = document.getElementById("menu-toggle");
    toggle.classList.toggle('menu-toggle-active');
  }


  const handleClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");

  }

  return (
    <nav className='flex justify-between '>
      <div className=" flex justify-center items-center ml-4">
        <div class="logo flex items-center">
          <img src="logo192.png" alt="Logo Image" />
        </div>
        <h3 className='ml-4'>Jinko Inu</h3>
      </div>

      <ul class="nav-links 2xl:mr-10 xl:mr-10 lg:mr-10 md:mr-5 mr-3 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-4 ">
        <li className='hover:cursor-pointer'><p onClick={() => navigate("/")}>Home</p></li>
        <li className='hover:cursor-pointer'><p onClick={() => navigate("/service")}>Service</p></li>
        <li className='hover:cursor-pointer'><p onClick={() => navigate("/about")}>About</p></li>
        <li className='hover:cursor-pointer'><p onClick={() => navigate("/resource")}>Resource</p></li>
        <li className='hover:cursor-pointer'><p onClick={() => navigate("/testimonials")}>Testimonials</p></li>
        <li className='hover:cursor-pointer'><p onClick={() => navigate("/contact")}>ContactUs</p></li>
      </ul>
      <div className="row nav-right-margin 2xl:hidden xl:hidden lg:hidden block ">
        <div className="d-flex">
          <div class="hamburger" onClick={handleClick}>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
