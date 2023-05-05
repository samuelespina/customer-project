import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const subline = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.pageYOffset);
    });
  }, []);
  useEffect(() => {
    console.log(scrollValue);
  }, [scrollValue]);

  useEffect(() => {
    if (subline.current) {
      if (scrollValue > 0 && scrollValue < 467) {
        subline.current.className = "subline";
      } else if (scrollValue > 468 && scrollValue < 850) {
        subline.current.className = "subline";
        subline.current.classList.add("link2");
      } else if (scrollValue > 851 && scrollValue < 1782) {
        subline.current.className = "subline";
        subline.current.classList.add("link3");
      } else if (scrollValue > 1783 && scrollValue < 2532) {
        subline.current.className = "subline";
        subline.current.classList.add("link4");
      } else if (scrollValue > 2533 && scrollValue < 3344) {
        subline.current.className = "subline";
        subline.current.classList.add("link5");
      } else if (scrollValue > 3345 && scrollValue < 3800) {
        subline.current.className = "subline";
        subline.current.classList.add("link6");
      } else if (scrollValue > 3801 && scrollValue < 3879) {
        subline.current.className = "subline";
        subline.current.classList.add("link7");
      }
    }
  }, [scrollValue, subline.current]);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div
          style={{ animation: "open-transition .4s ease-in-out" }}
          onClick={() => scrollTo(0, 0)}
          className="link"
        >
          Home
        </div>
        <div
          style={{ animation: "open-transition .6s ease-in-out" }}
          onClick={() => scrollTo(0, 510)}
          className="link"
        >
          Stats
        </div>
        <div
          style={{ animation: "open-transition .8s ease-in-out" }}
          onClick={() => scrollTo(0, 900)}
          className="link"
        >
          Story
        </div>
        <div
          style={{ animation: "open-transition 1s ease-in-out" }}
          onClick={() => scrollTo(0, 1800)}
          className="link"
        >
          Showcase
        </div>
        <div
          style={{ animation: "open-transition 1.2s ease-in-out" }}
          onClick={() => scrollTo(0, 2700)}
          className="link"
        >
          Roadmap
        </div>
        <div
          style={{ animation: "open-transition 1.4s ease-in-out" }}
          onClick={() => scrollTo(0, 3460)}
          className="link"
        >
          FAQ
        </div>
        <div
          style={{ animation: "open-transition 1.6s ease-in-out" }}
          onClick={() => scrollTo(0, 5100)}
          className="link"
        >
          Contacts
        </div>

        <div
          style={{ animation: "open-transition 1.8s ease-in-out" }}
          className="link discord"
        >
          Discord
        </div>

        <div className="subline" ref={subline}></div>
      </nav>
    </header>
  );
};

export default Navbar;
