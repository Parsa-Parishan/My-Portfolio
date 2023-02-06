import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import logo from "../images/logo.png";
import Resume from "../resume/Resume.pdf";
import { motion } from "framer-motion";

export default function Nav({ open, slide, func, openModal }) {
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
    setTimeout(() => {
      func(() => false);
    }, 200);

    document.querySelector(`${e}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`horizontal ${open && "show"} ${showNav && "blur"}`}>
        <div
          className={`horizontal-container ${slide ? "slide" : "slide-back"}`}
        >
          <div className="avatar-logo">
            <a href="#">
              <img src={logo} alt="Avatar" />
            </a>
          </div>
          <div className="links">
            <ul>
              <li onClick={() => scrollTo("#about-me")}>About</li>
              <li onClick={() => scrollTo("#contact")}>Contact</li>

              <a href={Resume} target="_blank" className="resume">
                Resume
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <motion.nav
        className="vertical"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 3,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="icon">
          <span>
            <a href="https://github.com/Parsa-Parishan">
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/parsa-parishan-419117252/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
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
      </motion.nav>
    </>
  );
}
