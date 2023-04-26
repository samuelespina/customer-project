import React, { useState, useEffect, useRef } from "react";
import { Stat } from "../../components";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [currentX, setCurrentX] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);
  const plx_1 = useRef<HTMLInputElement>(null);
  const plx_2 = useRef<HTMLInputElement>(null);
  const plx_3 = useRef<HTMLInputElement>(null);
  const faq_1 = useRef<HTMLInputElement>(null);
  const faq_2 = useRef<HTMLInputElement>(null);
  const faq_3 = useRef<HTMLInputElement>(null);
  const faq_4 = useRef<HTMLInputElement>(null);
  const faq_5 = useRef<HTMLInputElement>(null);
  const faq_6 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCurrentX(e.clientX);
      setCurrentY(e.clientY);
    });
  }, []);

  useEffect(() => {
    if (plx_1.current) {
      plx_1.current.style.left = -150 - currentX / 10 + "px";
      plx_1.current.style.top = 130 - currentY / 10 + "px";
    }
    if (plx_2.current) {
      plx_2.current.style.left = -300 - currentX / 30 + "px";
      plx_2.current.style.top = 90 - currentY / 7 + "px";
    }
    if (plx_3.current) {
      plx_3.current.style.left = -50 - currentX / 15 + "px";
      plx_3.current.style.top = -120 - currentY / 10 + "px";
    }
  }, [currentX, currentY, plx_1.current, plx_2.current, plx_3.current]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="homepage">
      <section className="hero-wrapper">
        <article className="hero">
          <div className="presentation">
            <h1>TITLE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p> Ex laudantium commodi iste autem nam vitae soluta.</p>
            <p>
              Similique consequuntur ipsum nam rerum modi maiores tenetur, dicta
              iste et praesentium dolor quidem.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="parallax">
            <div ref={plx_1} className="div1">
              {" "}
              <img src="./images/nfts/1.png" alt="" />{" "}
            </div>
            <div ref={plx_2} className="div2"></div>
            <div ref={plx_3} className="div3"></div>
          </div>
        </article>
      </section>
      <section className="stats-wrapper">
        <article className="stats">
          <Stat statistics={2999} description="Total Items" />
          <Stat statistics={1076} description="Total Owners" />
          <Stat statistics={0.25} description="Floor Price (ETH)" />
          <Stat statistics={450000} description="Volume Traded" />
        </article>
      </section>
      <section className="story-wrapper">
        <h1 className="story-title">ABOUT US</h1>
        <h2 className="story-subtitle">our story</h2>
        <article className="story">
          <div className="nft-hover">
            <div className="nft-hover1"></div>
            <div className="nft-hover2"></div>
          </div>
          <div className="story-description">
            <h1>Where it all began</h1>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              quasi quibusdam distinctio ullam accusamus, qui dolore.
              Exercitationem sed, sapiente quasi rerum aliquam blanditiis
              explicabo laboriosam, ipsam, odio ea repudiandae officiis?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              tenetur suscipit atque cupiditate, eius aspernatur mollitia
              deserunt iste consequuntur beatae voluptatem aliquam labore
              maiores repellat. Ad voluptatibus optio voluptates eum.
            </p>
          </div>
        </article>
      </section>
      <Marquee>
        <div>
          <p className="marquee1">ciao</p>
        </div>
      </Marquee>

      <Marquee>
        <div>
          <p className="marquee2">sono</p>
        </div>
      </Marquee>

      <section className="road-map-wrapper">
        <h1 className="roadmap-title">ROADMAP</h1>
        <h1 className="roadmap-subtitle">what we'll do?</h1>
        <article className="road-map">
          <div className="step">
            <p className="percentage">10%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
          <div className="step">
            <p className="percentage">25%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
          <div className="step">
            <p className="percentage">50%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
          <div className="step">
            <p className="percentage">75%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
          <div className="step">
            <p className="percentage last">100%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
        </article>
      </section>
      <section className="faq-wrapper">
        <h1 className="faq-title">QUESTIONS</h1>
        <h2 className="faq-subtitle">Frequently Asked Questions</h2>

        <article className="faq">
          <div
            ref={faq_1}
            onClick={() => {
              if (faq_1.current) {
                faq_1.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <FontAwesomeIcon icon={faChevronUp} />
              What is Blue Chipmunks NFT?
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              culpa vel architecto maxime inventore, expedita, amet quo tempore
              aut, iure iusto quia! Dicta quidem quaerat maiores tempore
              recusandae autem hic?
            </p>
          </div>

          <div
            ref={faq_2}
            onClick={() => {
              if (faq_2.current) faq_2.current.classList.toggle("active");
            }}
            className="question-box"
          >
            <p>
              <FontAwesomeIcon icon={faChevronUp} />
              How Can I Use My NFT ?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              accusamus perferendis vitae, rerum quos consectetur doloribus
              laboriosam, maiores tenetur excepturi tempore est laudantium nisi.
              Eius quae blanditiis esse eveniet hic?
            </p>
          </div>
          <div
            ref={faq_3}
            onClick={() => {
              if (faq_3.current) {
                faq_3.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <FontAwesomeIcon icon={faChevronUp} />
              Where can I View My NFTS ?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, iure placeat eligendi blanditiis reprehenderit quidem
              ex minima! Libero, accusantium nostrum porro quibusdam provident
              non laboriosam harum perferendis neque nisi?
            </p>
          </div>
          <div
            ref={faq_4}
            onClick={() => {
              if (faq_4.current) {
                faq_4.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <FontAwesomeIcon icon={faChevronUp} />
              How we can buy and invest NFT ?
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum provident eius quidem saepe deleniti blanditiis fugiat
              quis. Tempore iure voluptas maiores adipisci ipsam laboriosam
              aspernatur repellendus cupiditate in voluptatem. Quasi!
            </p>
          </div>
          <div
            ref={faq_5}
            onClick={() => {
              if (faq_5.current) {
                faq_5.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <FontAwesomeIcon icon={faChevronUp} />
              Where we can buy and sell NFts?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              omnis eligendi harum eum facilis unde repellendus dolores incidunt
              adipisci consequatur. Earum alias fuga ratione reiciendis iste ab
              consequuntur neque fugiat!
            </p>
          </div>
          <div
            ref={faq_6}
            onClick={() => {
              if (faq_6.current) {
                faq_6.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <FontAwesomeIcon icon={faChevronUp} />
              Where does my NFT go after I purchase?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              earum numquam aliquid quasi magnam ipsum nisi, minima modi
              temporibus quae incidunt vero, ipsam fugit? Fugit fugiat ducimus
              expedita vero ratione.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
