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
            My name is Parsa and I'm a front end developer. I'm pursing the
            opportunity to jump-start my career in web development. I'm
            currently focusing on improving my skills as a front-end developer
            and gradually starting to shift toward Full-stack
          </p>
        </div>
      </div>
      <div className="my-portfolio">
        <h2>My Portfolio</h2>
        <p>
          A small gallery of my projects I built in my journey if learning to
          code
        </p>
        <div className="container">
          <article className="project weather">
            <div className="about-project">
              <h3>Current weather/forecast app</h3>
              <p>
                about the project about the project about the project about the
                project about the project about the project about the project
                about the project about the project about the project about the
                project about the project.
              </p>
              <div className="btns">
                <button>
                  <a hre="#">Live</a>
                </button>
                <button>
                  <a href="#" className="icon">
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
                about the project about the project about the project about the
                project about the project about the project about the project
                about the project about the project about the project about the
                project about the project.
              </p>
              <div className="btns">
                <button>
                  <a hre="#">Live</a>
                </button>
                <button>
                  <a href="#" className="icon">
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
                about the project about the project about the project about the
                project about the project about the project about the project
                about the project about the project about the project about the
                project about the project.
              </p>
              <div className="btns">
                <button>
                  <a hre="#">Live</a>
                </button>
                <button>
                  <a href="#" className="icon">
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
