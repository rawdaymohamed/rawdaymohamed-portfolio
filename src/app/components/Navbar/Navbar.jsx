"use client";
import { motion } from "framer-motion";
import React from "react";
import "./Navbar.scss";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          Rawda Yasser
        </motion.p>
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
