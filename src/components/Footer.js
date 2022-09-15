import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="social-media">
        <ul>
          <li className="media">
            <a href="#">
              <FaGithub />
            </a>
          </li>
          <li className="media">
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li className="media">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="media">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
      <div className="credit">
        <a href="#">Designed & Built by Parsa Parishan</a>
      </div>
    </>
  );
}
