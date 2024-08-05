import { Card, Row, Col, Container, ListGroup } from "react-bootstrap";
import navBarLogo1 from "../img/Linkedin.svg";
import navBarLogo2 from "../img/Whatsapp.svg";
import navBarLogo3 from "../img/Email.svg";
import navBarLogo4 from "../img/contactme.svg";
import navBarLogo5 from '../img/GitHubIcon.svg';
import link from "../utils/link";


export const Contact = () => {
  const {linkedInLink, waLink, emailLink, gitHubLink} = link()
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
                  <ListGroup.Item action onClick={()=>emailLink()} className="bg-dark" >
                    <div className="csocial-icon w">
                      <a onClick={()=>emailLink()}>
                        <img src={navBarLogo3} alt="Logo"></img>
                      </a>
                      <h5>zakyzamani.jobs@gmail.com</h5>
                    </div>
                    
                  </ListGroup.Item>
                  <ListGroup.Item action onClick={()=>linkedInLink()} className="bg-dark">
                    <div className="csocial-icon w">
                      <a onClick={()=>linkedInLink()}>
                        <img src={navBarLogo1} alt="Logo"></img>
                      </a>
                      <h5>Zaky Zamani</h5>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item action onClick={()=>gitHubLink()} className="bg-dark">
                    <div className="csocial-icon w">
                      <a onClick={()=>gitHubLink()}>
                        <img src={navBarLogo5} alt="Logo"></img>
                      </a>
                      <h5>ZakyZN99</h5>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item action onClick={()=>waLink()} className="bg-dark">
                    <div className="csocial-icon w">
                      <a onClick={()=>waLink()}>
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
