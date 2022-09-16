import React from "react";
import avatar from "../images/avatar.jpeg";

export default function Header() {
  return (
    <>
      <div className="about-me">
        <img src={avatar} alt="avatar" className="my-avatar" />
        <div className="intro">
          <div className="greet">
            <h1>
              <span>Hi,</span>
              <br /> I'm Parsa,
            </h1>
          </div>
          <p>
            I'm a <strong>Front end developer</strong> based in Canada
          </p>
        </div>
      </div>
    </>
  );
}
