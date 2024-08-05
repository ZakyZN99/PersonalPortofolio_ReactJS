import { Col, Row } from "react-bootstrap";
import navBarLogo1 from '../img/Linkedin.svg';
import navBarLogo2 from '../img/Whatsapp.svg';
import navBarLogo3 from '../img/Email.svg';
import navBarLogo4 from '../img/GitHubIcon.svg';
import link from "../utils/link";


export const Footer = () => {
  const {linkedInLink, waLink, emailLink, gitHubLink} = link()
  return (
      <Row className="align-item-center footer">
        <Col className="g-3">
          <div className="fsocial-icon w">
          <a onClick={()=> emailLink()}>
              <img src={navBarLogo3} alt="Logo"></img>
            </a>
            <a onClick={()=> linkedInLink()}>
              <img src={navBarLogo1} alt="Logo"></img>
            </a>
            <a onClick={()=> gitHubLink()}>
              <img src={navBarLogo4} alt="Logo"></img>
            </a>
            <a onClick={()=> waLink()}>
              <img src={navBarLogo2} alt="Logo"></img>
            </a>
          </div>
          <p>Tabanan, Bali, Indonesia </p>
          <p>CopyRight 2024. All Right Reserved</p>
        </Col>
      </Row>
  );
};
