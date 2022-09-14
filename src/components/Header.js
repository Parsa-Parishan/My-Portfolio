import React from "react";
import avatar from "../images/avatar.jpeg";

export default function Header() {
  return (
    <>
      <div class="about-me">
        <img src={avatar} alt="avatar" class="my-avatar" />
        <div class="intro">
          <div class="greet">
            <h1>Hi, I'm Parsa,</h1>
          </div>
          <p>
            I'm a <strong>Front end developer</strong> based in Canada
          </p>
        </div>
      </div>
    </>
  );
}
