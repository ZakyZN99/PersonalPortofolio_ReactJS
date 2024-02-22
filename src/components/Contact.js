import { Card, Row, Col, Container, ListGroup } from "react-bootstrap";
import navBarLogo1 from "../img/Linkedin.svg";
import navBarLogo2 from "../img/Whatsapp.svg";
import navBarLogo3 from "../img/Email.svg";
import navBarLogo4 from "../img/contactme.svg";
import navBarLogo5 from '../img/GitHubIcon.svg';


export const Contact = () => {
  const linkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/zaky-zamani-011890275/",
      "_blank",
      "noopener, noreferrer"
    );
  };
  const waLink = () => {
    window.open("http://wa.me/628563734618", "_blank", "noopener, noreferrer");
  };
  const letsConnect = () => {
    window.open(
      "mailto:zakyzamani.jobs@gmail.com?subject=Subject&body=Body%20goes%20here"
    );
  };
  const gitHub = () =>{
    window.open("https://github.com/ZakyZN99?tab=repositories",'_blank', 'noopener, noreferrer')
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
            <h1 className="h1-custom ">Contact</h1>
            <h2 className="h2-custom proj-title">Get in Touch With Me</h2>
          <Col sm={5} md={5} className="offset-md-1 b">
            <div className="contact-card" >
              <Card >
                <ListGroup variant="flush">
                  <ListGroup.Item action onClick={letsConnect} className="bg-dark" >
                    <div className="csocial-icon w">
                      <a onClick={letsConnect}>
                        <img src={navBarLogo3} alt="Logo"></img>
                      </a>
                      <h5>zakyzamani.jobs@gmail.com</h5>
                    </div>
                    
                  </ListGroup.Item>
                  <ListGroup.Item action onClick={linkedIn} className="bg-dark">
                    <div className="csocial-icon w">
                      <a onClick={linkedIn}>
                        <img src={navBarLogo1} alt="Logo"></img>
                      </a>
                      <h5>Zaky Zamani</h5>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item action onClick={gitHub} className="bg-dark">
                    <div className="csocial-icon w">
                      <a onClick={gitHub}>
                        <img src={navBarLogo5} alt="Logo"></img>
                      </a>
                      <h5>ZakyZN99</h5>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item action onClick={waLink} className="bg-dark">
                    <div className="csocial-icon w">
                      <a onClick={waLink}>
                        <img src={navBarLogo2} alt="Logo"></img>
                      </a>
                      <h5>+628563734618</h5>
                      
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </Col>
          <Col sm={4} md={4}   className="offset-md-1">
                <img src={navBarLogo4} alt="LOGO" className="contact-img"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
