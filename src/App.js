import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About-me";
import Footer from "./components/Footer";
import { FaBars, FaRegTimesCircle, FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(false);
  // const [dark, setDark] = useState(false);

  //slide nav modal
  const openModal = () => {
    if (open == true) {
      setSlide(() => !slide);
      setTimeout(() => {
        setOpen(() => !open);
      }, 200);
      return;
    }
    setOpen(() => !open);
    setTimeout(() => {
      setSlide(() => !slide);
    }, 70);
  };

  //disable scroll when modal is open
  {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  // const darkTheme = () => {
  //   setDark(() => !dark);
  // };

  // document.body.className = `${dark && "light-theme"}`;

  return (
    <div className={`App`}>
      <Nav open={open} slide={slide} func={setOpen} openModal={openModal} />
      {/* {dark ? (
        <FaSun className="dark-mode" onClick={darkTheme} />
      ) : (
        <FaMoon className="dark-mode" onClick={darkTheme} />
      )} */}
      <header>
        {!open ? (
          <FaBars className="bar" onClick={openModal} />
        ) : (
          <FaRegTimesCircle className="bar" onClick={openModal} />
        )}
        <Header />
      </header>
      <main>
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
