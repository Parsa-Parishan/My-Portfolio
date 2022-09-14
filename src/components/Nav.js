import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../images/logo.png";

export default function Nav() {
  return (
    <>
      <nav className="horizontal">
        <div className="horizontal-container">
          <i className="fa-solid fa-xmark close"></i>
          <div className="avatar-logo">
            <img src={logo} alt="Avatar" />
          </div>
          <div className="links">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" className="resume">
              Resume
            </a>
          </div>
        </div>
      </nav>
      <nav className="vertical">
        <div className="icon">
          <span>
            <FaGithub />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaTwitter />
          </span>
        </div>
      </nav>
    </>
  );
}
