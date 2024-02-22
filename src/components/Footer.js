import { Col, Container, Row } from "react-bootstrap";
import navBarLogo1 from '../img/Linkedin.svg';
import navBarLogo2 from '../img/Whatsapp.svg';
import navBarLogo3 from '../img/Email.svg';
import navBarLogo4 from '../img/GitHubIcon.svg';


export const Footer = () => {
    const linkedIn = () =>{
        window.open("https://www.linkedin.com/in/zaky-zamani-011890275/",'_blank', 'noopener, noreferrer')
      }
      const waLink = () =>{
        window.open("http://wa.me/628563734618",'_blank', 'noopener, noreferrer')
      }
      const letsConnect = () =>{
        window.open("mailto:zakyzamani.jobs@gmail.com?subject=Subject&body=Body%20goes%20here")
      }
      const gitHub = () =>{
        window.open("https://github.com/ZakyZN99?tab=repositories",'_blank', 'noopener, noreferrer')
      }
  return (
      <Row className="align-item-center footer">
        <Col className="g-3">
          <div className="fsocial-icon w">
          <a onClick={letsConnect}>
              <img src={navBarLogo3} alt="Logo"></img>
            </a>
            <a onClick={linkedIn}>
              <img src={navBarLogo1} alt="Logo"></img>
            </a>
            <a onClick={gitHub}>
              <img src={navBarLogo4} alt="Logo"></img>
            </a>
            <a onClick={waLink}>
              <img src={navBarLogo2} alt="Logo"></img>
            </a>
          </div>
          <p>Tabanan, Bali, Indonesia </p>
          <p>CopyRight 2024. All Right Reserved</p>
        </Col>
      </Row>
  );
};
