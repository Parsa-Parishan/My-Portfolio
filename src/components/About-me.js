import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoSass,
  IoLogoGithub,
  IoLogoReact,
} from "react-icons/io5";
import { SiJquery, SiRedux } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import weather from "../images/screenshots/weather.png";
import note from "../images/screenshots/note.png";
import ecom from "../images/screenshots/ecom.png";

export default function About() {
  const [reveal, setReaveal] = useState(false);

  const toReaveal = () => {
    let windowHeight = window.innerHeight;
    const revealTop = document
      .querySelector("article")
      .getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      setReaveal(() => "reveal");
    } else {
      setReaveal(() => false);
    }
  };
  window.onscroll = () => toReaveal();
  return (
    <>
      <div className="my-skills" id="about-me">
        <h2>About me</h2>
        <div className="my-info">
          <h3>Hello!</h3>
          <p>
            {/* My name is Parsa and I'm a front end developer. I'm currently
            focusing on improving my skills as a front-end developer and
            expanding my skills as I'm gradually starting to shift toward
            Full-stack. My goal is to pursue becoming a professional and join a
            company where I can showcase my skills and grow as a developer. */}
            Hi, I’m Parsa and I’m a Web Developer with two years of experience.
            I’m currently working with a small team at WebDev Canada. I help
            create and maintain components. I work on the Front-End side of
            things. My daily stack consists of React.Js, React router, Redux.js,
            and Sass.
            <br />I also work on my projects to hone and expand my skills. I’m
            currently learning Back-End development to gradually shift toward
            Full-stack.
          </p>
          <div className="tools">
            <ul>
              <li className="tool html">
                <IoLogoHtml5 />
              </li>
              <li className="tool css">
                <IoLogoCss3 />
              </li>
              <li className="tool javascript">
                <IoLogoJavascript />
              </li>
              <li className="tool sass">
                <IoLogoSass />
              </li>
              <li className="tool github">
                <IoLogoGithub />
              </li>
              <li className="tool react">
                <IoLogoReact />
              </li>
              <li className="tool bootstrap">
                <BsFillBootstrapFill />
              </li>
              <li className="tool jquery">
                <SiJquery />
              </li>
              <li className="tool redux">
                <SiRedux />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-portfolio">
        <h2>Projects I've built</h2>
        <br />
        <p>A small gallery of projects that I've built</p>
        <div className="container">
          <article className="project weather">
            <div className={`about-project ${reveal}`}>
              <h3>Current weather/forecast app</h3>
              <p>
                A weather forecast app, showing current weather and the next
                five days. The app utilizes Weather API and GEO API for the
                cities data. With implemented async pagination for a better user
                experience with city suggestions.
              </p>
              <span>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React js</li>
                  <li>Weather API</li>
                  <li>geo API</li>
                  <li>SASS</li>
                </ul>
              </span>
              <div className="btns">
                <button>
                  <a href="https://parsa-parishan.github.io/My-Weather-App/">
                    Live
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/Parsa-Parishan/My-Weather-App"
                    className="icon"
                  >
                    <FaGithub style={{ color: "white" }} />
                  </a>
                </button>
              </div>
            </div>
            <div className={`image ${reveal}`}>
              <div className="filter"></div>
              <img src={weather} alt="weather app" />
            </div>
          </article>
          <article className="project note">
            <div className={`about-project ${reveal}`}>
              <h3>Note taking app</h3>
              <p>
                Note Taking app is built in React JS. The main function of this
                app is creating notes, editing notes and deleting notes.
              </p>
              <span>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React js</li>
                  <li>React Responsive Modal</li>
                </ul>
              </span>
              <div className="btns">
                <button>
                  <a href="https://parsa-parishan.github.io/Note-App/">Live</a>
                </button>
                <button>
                  <a
                    href="https://github.com/Parsa-Parishan/Note-App"
                    className="icon"
                  >
                    <FaGithub style={{ color: "white" }} />
                  </a>
                </button>
              </div>
            </div>
            <div className={`image ${reveal}`}>
              <div className="filter"></div>
              <img src={note} alt="note taking app" />
            </div>
          </article>
          <article className="project ecommerce">
            <div className={`about-project ${reveal}`}>
              <h3>Ecommerce website</h3>
              <p>
                E-commerce website for vintage clothes. Integrated shopping cart
                to the web app, cart summary, and preview. A list of products
                and utilized React Router for each page such as login, creating
                An account, and a page for each product.
              </p>
              <span>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React js</li>
                  <li>React-router</li>
                  <li>Framer-motion</li>
                </ul>
              </span>
              <div className="btns">
                <button>
                  <a href="https://parsa-parishan.github.io/my-shop/">Live</a>
                </button>
                <button>
                  <a
                    href="https://github.com/Parsa-Parishan/my-shop"
                    className="icon"
                  >
                    <FaGithub style={{ color: "white" }} />
                  </a>
                </button>
              </div>
            </div>
            <div className={`image ${reveal}`}>
              <div className="filter"></div>
              <img src={ecom} alt="ecommerce website" />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
