"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var components_1 = require("../../components");
var aos_1 = __importDefault(require("aos"));
var react_fast_marquee_1 = __importDefault(require("react-fast-marquee"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var HomePage = function () {
  var _a = (0, react_1.useState)(0),
    currentX = _a[0],
    setCurrentX = _a[1];
  var _b = (0, react_1.useState)(0),
    currentY = _b[0],
    setCurrentY = _b[1];
  var parallax_nft1 = (0, react_1.useRef)(null);
  var parallax_nft2 = (0, react_1.useRef)(null);
  var parallax_nft3 = (0, react_1.useRef)(null);
  var faq_1 = (0, react_1.useRef)(null);
  var faq_2 = (0, react_1.useRef)(null);
  var faq_3 = (0, react_1.useRef)(null);
  var faq_4 = (0, react_1.useRef)(null);
  var faq_5 = (0, react_1.useRef)(null);
  var faq_6 = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(function () {
    document.addEventListener("mousemove", function (e) {
      setCurrentX(e.clientX);
      setCurrentY(e.clientY);
    });
  }, []);
  (0, react_1.useEffect)(
    function () {
      if (parallax_nft1.current) {
        parallax_nft1.current.style.left = -150 - currentX / 10 + "px";
        parallax_nft1.current.style.top = 130 - currentY / 10 + "px";
      }
      if (parallax_nft2.current) {
        parallax_nft2.current.style.left = -300 - currentX / 30 + "px";
        parallax_nft2.current.style.top = 90 - currentY / 7 + "px";
      }
      if (parallax_nft3.current) {
        parallax_nft3.current.style.left = -50 - currentX / 15 + "px";
        parallax_nft3.current.style.top = -120 - currentY / 10 + "px";
      }
    },
    [
      currentX,
      currentY,
      parallax_nft1.current,
      parallax_nft2.current,
      parallax_nft3.current,
    ]
  );
  (0, react_1.useEffect)(function () {
    aos_1["default"].init();
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
            <div ref={parallax_nft1} className="parallax_nft1"></div>
            <div ref={parallax_nft2} className="parallax_nft2"></div>
            <div ref={parallax_nft3} className="parallax-nft3"></div>
          </div>
        </article>
      </section>
      <section className="stats-wrapper">
        <article className="stats">
          <components_1.Stat statistics={2999} description="Total Items" />
          <components_1.Stat statistics={1076} description="Total Owners" />
          <components_1.Stat
            statistics={0.25}
            description="Floor Price (ETH)"
          />
          <components_1.Stat statistics={450000} description="Volume Traded" />
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
      <react_fast_marquee_1.default>
        <div>
          <p className="marquee1">ciao</p>
        </div>
      </react_fast_marquee_1.default>

      <react_fast_marquee_1.default>
        <div>
          <p className="marquee2">sono</p>
        </div>
      </react_fast_marquee_1.default>

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
            onClick={function () {
              if (faq_1.current) {
                faq_1.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <react_fontawesome_1.FontAwesomeIcon
                icon={free_solid_svg_icons_1.faChevronUp}
              />
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
            onClick={function () {
              if (faq_2.current) faq_2.current.classList.toggle("active");
            }}
            className="question-box"
          >
            <p>
              <react_fontawesome_1.FontAwesomeIcon
                icon={free_solid_svg_icons_1.faChevronUp}
              />
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
            onClick={function () {
              if (faq_3.current) {
                faq_3.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <react_fontawesome_1.FontAwesomeIcon
                icon={free_solid_svg_icons_1.faChevronUp}
              />
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
            onClick={function () {
              if (faq_4.current) {
                faq_4.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <react_fontawesome_1.FontAwesomeIcon
                icon={free_solid_svg_icons_1.faChevronUp}
              />
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
            onClick={function () {
              if (faq_5.current) {
                faq_5.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <react_fontawesome_1.FontAwesomeIcon
                icon={free_solid_svg_icons_1.faChevronUp}
              />
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
            onClick={function () {
              if (faq_6.current) {
                faq_6.current.classList.toggle("active");
              }
            }}
            className="question-box"
          >
            <p>
              <react_fontawesome_1.FontAwesomeIcon
                icon={free_solid_svg_icons_1.faChevronUp}
              />
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
exports["default"] = HomePage;
