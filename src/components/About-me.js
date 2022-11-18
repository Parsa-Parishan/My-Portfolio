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
            My name is Parsa and I enjoy building things on the web. My interest
            in web development started in 2021 when I got introduced to
            Blockchain and becoming a Blockchain developer and web development
            was a prerequisite. I started building simple HTML and CSS projects
            and decided that it's something I want to pursue professionally.
            <br />
            I'm currently focusing on improving my skills as a front-end
            developer and expanding my skills as I'm gradually starting to shift
            toward Full-stack. My goal is to pursue becoming a professional and
            join a company where I can showcase my skills and grow as a
            developer.
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
            </ul>
          </div>
        </div>
      </div>
      <div className="my-portfolio">
        <h2>Projects I've built</h2>
        <p>
          A small gallery of my personal projects that I've built on my journey
          of learning to code
        </p>
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
                Note Taking app built in React JS. The main function of this app
                is creating notes, editing notes and deleting notes.
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
                to the web app, cart summary and preview. A list of products and
                utilized React Router for each page such as login, create
                account and a page for each product.
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
