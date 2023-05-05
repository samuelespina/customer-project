import React from "react";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset={window.innerWidth < 425 ? 120 : 500}
      className="footer"
    >
      <div className="contacts">
        <h2>Join our community</h2>
        <p>We'll be glad to have you with us, see you soon!</p>
      </div>
      <button className="join">join Discord!</button>
    </footer>
  );
};

export default Footer;
