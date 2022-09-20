import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import logo from "../images/logo.png";

export default function Nav({ open, slide, openModal }) {
  const [showNav, setShowNav] = useState(true);
  const [prev, setPrev] = useState(0);

  const navOnScroll = () => {
    let current = window.pageYOffset;
    setPrev(() => window.pageYOffset);
    if (current > prev && current > 100) {
      setShowNav(() => false);
    } else if (current < prev || current == 0) {
      setShowNav(() => true);
    }
  };

  window.addEventListener("scroll", navOnScroll);

  const scrollTo = (e) => {
    openModal();
    document.querySelector(`${e}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`horizontal ${open && "show"} ${showNav && "blur"}`}>
        <div
          className={`horizontal-container ${slide ? "slide" : "slide-back"}`}
        >
          <div className="avatar-logo">
            <img src={logo} alt="Avatar" />
          </div>
          <div className="links">
            <ul>
              <li onClick={() => scrollTo("#about-me")}>About</li>
              <li onClick={() => scrollTo("#contact")}>Contact</li>
              <li href="#" className="resume">
                Resume
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="vertical">
        <div className="icon">
          <span>
            <a href="https://github.com/Parsa-Parishan">
              <FaGithub />
            </a>
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            <a href="https://www.instagram.com/parsa_parishan/">
              <FaInstagram />
            </a>
          </span>
          <span>
            <a href="mailto:parsa.parishan2017@gmail.com">
              <FaRegEnvelope />
            </a>
          </span>
        </div>
      </nav>
    </>
  );
}
