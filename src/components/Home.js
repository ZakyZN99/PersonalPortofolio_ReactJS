import { useState } from "react";
import { Container} from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import profile from "../img/Profile.svg";

export const Home = () => {
  const [greetMsg, setgreetMsg] = useState(["Hello,"]);
  const [nameMessage, setnameMessage] = useState(["I'm Zaky Zamani Noor"]);
  const cvLink = () =>{
    window.open("https://drive.google.com/file/d/1drP0ps4nBS90eY_Yj0mkDsbN8De0YJte/view?usp=sharing",'_blank', 'noopener, noreferrer')
  }
  const hireMe = () =>{
    window.open("mailto:zakyzamani.jobs@gmail.com?subject=Subject&body=Body%20goes%20here")
  }

  return (
    <section className="home" id="home">
      <Container >
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
            <h3 className="h3-custom text-decoration-underline">
              Web Developer, Mobile Developer & Software Developer
            </h3>
            <h3 className="h3-custom mt-4">
              Bachelor's degree holder in Electrical Engineering from Udayana
              University. Passionate about Web Development, Mobile Application
              Development, and Software Development. Explored roles as a Mobile
              Developer, Web Developer, and Software Developer, successfully
              completing various development projects. Interest in contributing
              to mobile application development, web development, and software
              development.
            </h3>
            <div className="row-md-4 button-text">
            <button className="vvd" onClick={hireMe}>
                <span>HIRE ME</span>
                
            </button>
            <button className="vvd" onClick={cvLink}>
                Download CV
            </button>
            </div>

          </div>

          <div className="col-md-3 offset-md-0 img-profile">
            <img src={profile} width={400}></img>
          </div>
        </div>
      </Container>
    </section>
  );
};
