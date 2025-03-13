import React from "react";
import "./Navbar.scss";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <p className="logo">Rawda Yasser</p>
        <div className="social-links">
          <a href="#">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="#">
            <FaXTwitter className="social-icon" />
          </a>
          <a href="#">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="#">
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
