import React from "react";
import { FaGithub } from "react-icons/fa";
import weather from "../images/screenshots/weather.png";
import note from "../images/screenshots/note.png";
import ecom from "../images/screenshots/ecom.png";

export default function About() {
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
            Blockchain and becoming a block chain developer and web development
            was a prerequisite. I started building simple HTML and CSS projects
            and decided that it's something I want to pursue professionally.
            <br />
            I'm currently focusing on improving my skills as a front-end
            developer and expanding my skills as I'm gradually starting to shift
            toward Full-stack. My goal is to pursue becoming a professional and
            join a company where I can showcase my skills and grow as a
            developer.
          </p>
        </div>
      </div>
      <div className="my-portfolio">
        <h2>Projects I've built</h2>
        <p>
          A small gallery of my personal projects I built on my journey of
          learning to code
        </p>
        <div className="container">
          <article className="project weather">
            <div className="about-project">
              <h3>Current weather/forecast app</h3>
              <p>
                A web app for weather. A paginate search bar with city
                recommendations, search for a city, view a full detailed current
                weather along with the forecast and a dynamic background based
                on weather
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
            <div className="image">
              <div className="filter"></div>
              <img src={weather} alt="weather app" />
            </div>
          </article>
          <article className="project note">
            <div className="about-project">
              <h3>Note taking app</h3>
              <p>
                A note taking app. Just a simple note taking app I created using
                React js and number of React packages to make editable notes.
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
            <div className="image">
              <div className="filter"></div>
              <img src={note} alt="note taking app" />
            </div>
          </article>
          <article className="project ecommerce">
            <div className="about-project">
              <h3>Ecommerce website</h3>
              <p>
                I built a ecommerce website for vintage clothes with React-js
                and React-router. I got the data from one of my favorite
                websites <a href="https://madeworn.com/">madeworn</a>. I used
                framer-motion for transition between components.
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
            <div className="image">
              <div className="filter"></div>
              <img src={ecom} alt="ecommerce website" />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
