import React, { useState, useEffect, useRef } from "react";
import { Stat } from "../../components";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [currentX, setCurrentX] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);
  const parallax_nft1 = useRef<HTMLInputElement>(null);
  const parallax_nft2 = useRef<HTMLInputElement>(null);
  const parallax_nft3 = useRef<HTMLInputElement>(null);
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
    if (parallax_nft1.current) {
      parallax_nft1.current.style.transform = `translate(${
        -150 - currentX / 10 + "px"
      },${130 - currentY / 10 + "px"})`;
    }
    if (parallax_nft2.current) {
      parallax_nft2.current.style.transform = `translate(${
        -300 - currentX / 30 + "px"
      }, ${90 - currentY / 7 + "px"})`;
    }
    if (parallax_nft3.current) {
      parallax_nft3.current.style.transform = `translate(${
        -50 - currentX / 15 + "px"
      },${-120 - currentY / 10 + "px"})`;
    }
  }, [
    currentX,
    currentY,
    parallax_nft1.current,
    parallax_nft2.current,
    parallax_nft3.current,
  ]);

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
            <div ref={parallax_nft1} className="parallax_nft1">
              <img src="./images/nfts/1.png" alt="" />
            </div>
            <div ref={parallax_nft2} className="parallax_nft2">
              <img src="./images/nfts/19.png" alt="" />
            </div>
            <div ref={parallax_nft3} className="parallax_nft3">
              <img src="./images/nfts/28.png" alt="" />
            </div>
          </div>
        </article>
      </section>
      <section className="stats-wrapper">
        <article className="stats">
          <div data-aos="fade-right">
            <Stat statistics={2999} description="Total Items" />
          </div>

          <div data-aos="fade-right">
            <Stat statistics={1076} description="Total Owners" />
          </div>

          <div data-aos="fade-left">
            {" "}
            <Stat statistics={0.25} description="Floor Price (ETH)" />
          </div>

          <div data-aos="fade-left">
            {" "}
            <Stat statistics={450000} description="Volume Traded" />
          </div>
        </article>
      </section>
      <section className="story-wrapper">
        <div data-aos="fade-up">
          <h1 className="story-title">ABOUT US</h1>
          <h2 className="story-subtitle">our story</h2>
        </div>

        <div data-aos="fade-right" data-aos-offset="300">
          <article className="story">
            <div className="nft-hover-container">
              <div className="nft-hover1">
                <img src="./images/nfts/49.png" alt="" />
              </div>
              <div className="nft-hover2">
                <img src="./images/nfts/44.png" alt="" />
              </div>
            </div>
            <div className="story-description">
              <h1>Where it all began</h1>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid quasi quibusdam distinctio ullam accusamus, qui dolore.
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
        </div>
      </section>

      <section className="marquee-wrapper">
        <div data-aos="fade-up">
          <h1 className="marquee-title">SHOWCASE</h1>
          <h2 className="marquee-subtitle">gallery</h2>
        </div>
        <div className="marquee-background">
          <div data-aos="fade-up" data-aos-offset="150">
            <article className="marquee">
              <Marquee>
                <div className="marquee-container">
                  <img src="./images/nfts/1.png" alt="" />
                  <img src="./images/nfts/2.png" alt="" />
                  <img src="./images/nfts/3.png" alt="" />
                  <img src="./images/nfts/4.png" alt="" />
                  <img src="./images/nfts/5.png" alt="" />
                  <img src="./images/nfts/6.png" alt="" />
                  <img src="./images/nfts/7.png" alt="" />
                  <img src="./images/nfts/8.png" alt="" />
                  <img src="./images/nfts/9.png" alt="" />
                  <img src="./images/nfts/10.png" alt="" />
                  <img src="./images/nfts/11.png" alt="" />
                  <img src="./images/nfts/12.png" alt="" />
                  <img src="./images/nfts/13.png" alt="" />
                  <img src="./images/nfts/14.png" alt="" />
                  <img src="./images/nfts/15.png" alt="" />
                  <img src="./images/nfts/16.png" alt="" />
                  <img src="./images/nfts/17.png" alt="" />
                  <img src="./images/nfts/18.png" alt="" />
                  <img src="./images/nfts/19.png" alt="" />
                  <img src="./images/nfts/20.png" alt="" />
                  <img src="./images/nfts/21.png" alt="" />
                  <img src="./images/nfts/22.png" alt="" />
                  <img src="./images/nfts/23.png" alt="" />
                  <img src="./images/nfts/24.png" alt="" />
                  <img src="./images/nfts/25.png" alt="" />
                </div>
              </Marquee>
            </article>
          </div>
          <div data-aos="fade-up" data-aos-offset="300">
            {" "}
            <article className="marquee">
              <Marquee direction="right">
                <div className="marquee-container">
                  <img src="./images/nfts/26.png" alt="" />
                  <img src="./images/nfts/27.png" alt="" />
                  <img src="./images/nfts/28.png" alt="" />
                  <img src="./images/nfts/29.png" alt="" />
                  <img src="./images/nfts/30.png" alt="" />
                  <img src="./images/nfts/31.png" alt="" />
                  <img src="./images/nfts/32.png" alt="" />
                  <img src="./images/nfts/33.png" alt="" />
                  <img src="./images/nfts/34.png" alt="" />
                  <img src="./images/nfts/35.png" alt="" />
                  <img src="./images/nfts/36.png" alt="" />
                  <img src="./images/nfts/37.png" alt="" />
                  <img src="./images/nfts/38.png" alt="" />
                  <img src="./images/nfts/39.png" alt="" />
                  <img src="./images/nfts/40.png" alt="" />
                  <img src="./images/nfts/41.png" alt="" />
                  <img src="./images/nfts/42.png" alt="" />
                  <img src="./images/nfts/43.png" alt="" />
                  <img src="./images/nfts/44.png" alt="" />
                  <img src="./images/nfts/45.png" alt="" />
                  <img src="./images/nfts/46.png" alt="" />
                  <img src="./images/nfts/47.png" alt="" />
                  <img src="./images/nfts/48.png" alt="" />
                  <img src="./images/nfts/49.png" alt="" />
                  <img src="./images/nfts/50.png" alt="" />
                </div>
              </Marquee>
            </article>
          </div>
        </div>
      </section>

      <section className="road-map-wrapper">
        <div data-aos="fade-up" data-aos-offset="550">
          <h1 className="roadmap-title">ROADMAP</h1>
          <h2 className="roadmap-subtitle">what we'll do?</h2>
        </div>

        <article className="road-map">
          <div data-aos="fade-left" data-aos-offset="500" className="step">
            <p className="percentage">10%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
          <div data-aos="fade-left" data-aos-offset="510" className="step">
            <p className="percentage">25%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
          <div data-aos="fade-left" data-aos-offset="520" className="step">
            <p className="percentage">50%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
          <div data-aos="fade-left" data-aos-offset="530" className="step">
            <p className="percentage">75%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
          <div data-aos="fade-left" data-aos-offset="540" className="step">
            <p className="percentage last">100%</p>
            <p className="description">
              abbkasjdbvkjadsvkjasdkjvkjadsvkjsdvkjsdvkjbasdkjvbsdjkvsosifoi
            </p>
          </div>
        </article>
      </section>

      <section className="faq-wrapper">
        <div data-aos="fade-up" data-aos-offset="600">
          <h1 className="faq-title">QUESTIONS</h1>
          <h2 className="faq-subtitle">Frequently Asked Questions</h2>
        </div>

        <article className="faq">
          <div
            ref={faq_1}
            onClick={() => {
              if (faq_1.current) {
                faq_1.current.classList.toggle("active");
              }
            }}
            className="question-box"
            data-aos="fade-left"
            data-aos-offset="550"
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
            data-aos="fade-right"
            data-aos-offset="560"
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
            data-aos="fade-left"
            data-aos-offset="570"
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
            data-aos="fade-right"
            data-aos-offset="580"
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
            data-aos="fade-left"
            data-aos-offset="590"
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
            data-aos="fade-right"
            data-aos-offset="600"
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
