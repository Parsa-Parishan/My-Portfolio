import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="horizontal">
        <div className="horizontal-container">
          <i className="fa-solid fa-xmark close"></i>
          <div className="avatar-logo">
            <img src="src/Avatar-logo/P.png" alt="Avatar" />
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
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </nav>
    </>
  );
}
