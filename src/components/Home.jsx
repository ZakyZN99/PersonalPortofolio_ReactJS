import { useState } from "react";
import { Container } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import profile from "../img/Profile.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";
import link from "../utils/link";

export const Home = () => {
  const [greetMsg, setgreetMsg] = useState(["Hello,"]);
  const [nameMessage, setnameMessage] = useState(["I'm Zaky Zamani Noor"]);
  const {cvLink, emailLink} =link()


  return (
    <section className="home" id="home">
      <Container>
        <div className="row home-content">
          <div className="col-md-8 offset-md-0">
            <h1 className="h1-custom">
              <Typewriter
                words={greetMsg}
                loop={false}
                cursorStyle={"_"}
                cursor
                typeSpeed={100}
              />
            </h1>
            <h1 className="h1-custom">
              <Typewriter
                words={nameMessage}
                loop={false}
                cursorStyle={"_"}
                cursor
                typeSpeed={100}
              />
            </h1>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <h3 className="h3-custom text-decoration-underline">
                    Web Developer, Mobile Developer & Software Developer
                  </h3>
                  <h3 className="h3-custom mt-4">
                    Bachelor's degree holder in Electrical Engineering from
                    Udayana University. Passionate about Web Development, Mobile
                    Application Development, and Software Development. Explored
                    roles as a Mobile Developer, Web Developer, and Software
                    Developer, successfully completing various development
                    projects with Flutter, React JS, Figma, MySQL and Arduino.
                    Interest in contributing to mobile application development,
                    web development, and software development.
                  </h3>
                </div>
              )}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__rollIn  row-md-4"
                      : ""
                  }
                >
                  <button className="button-text" onClick={()=> emailLink()}>
                    <span>HIRE ME</span>
                  </button>
                  <button className="button-text" onClick={()=> cvLink()}>
                    Download CV
                  </button>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="col-md-3 offset-md-0 img-profile">
            <img src={profile} width={400}></img>
          </div>
        </div>
      </Container>
    </section>
  );
};
