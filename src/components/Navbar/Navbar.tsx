import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const subline = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.pageYOffset);
      console.log(scrollValue);
    });
  }, []);

  useEffect(() => {
    if (subline.current) {
      if (scrollValue > 0 && scrollValue < 100) {
        subline.current.className = "subline";
      } else if (scrollValue > 100 && scrollValue < 200) {
        subline.current.className = "subline";
        subline.current.classList.add("link2");
      } else if (scrollValue > 200 && scrollValue < 300) {
        subline.current.className = "subline";
        subline.current.classList.add("link3");
      } else if (scrollValue > 300 && scrollValue < 400) {
        subline.current.className = "subline";
        subline.current.classList.add("link4");
      } else if (scrollValue > 400 && scrollValue < 500) {
        subline.current.className = "subline";
        subline.current.classList.add("link5");
      } else if (scrollValue > 500 && scrollValue < 600) {
        subline.current.className = "subline";
        subline.current.classList.add("link6");
      } else if (scrollValue > 600 && scrollValue < 700) {
        subline.current.className = "subline";
        subline.current.classList.add("link7");
      }
    }
  }, [scrollValue, subline.current]);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="link">Home</div>
        <div className="link">Stats</div>
        <div className="link">Story</div>
        <div className="link">Showcase</div>
        <div className="link">Roadmap</div>
        <div className="link">FAQ</div>
        <div className="link">Contacts</div>
        <div className="link discord">Discord</div>

        <div className="subline" ref={subline}></div>
      </nav>
    </header>
  );
};

export default Navbar;
