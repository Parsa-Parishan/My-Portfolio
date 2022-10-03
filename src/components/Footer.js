import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="social-media">
        <ul>
          <li className="media">
            <a href="https://github.com/Parsa-Parishan">
              <FaGithub />
            </a>
          </li>
          <li className="media">
            <a
              href="https://www.linkedin.com/in/parsa-parishan-419117252/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="media">
            <a href="https://www.instagram.com/parsa_parishan/">
              <FaInstagram />
            </a>
          </li>
          <li className="media">
            <a href="mailto:parsa.parishan2017@gmail.com">
              <FaRegEnvelope />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact" id="contact">
        <h2>Get in Touch</h2>
        <a href="mailto:parsa.parishan2017@gmail.com">Say Hello</a>
      </div>
      <div className="credit">
        <a href="https://github.com/Parsa-Parishan">
          Designed & Built by Parsa Parishan
        </a>
      </div>
    </>
  );
}
