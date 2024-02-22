import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/Logo.svg";
import navBarLogo1 from '../img/Linkedin.svg';
import navBarLogo2 from '../img/Whatsapp.svg';
import navBarLogo3 from '../img/GitHubIcon.svg';

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const linkedIn = () =>{
    window.open("https://www.linkedin.com/in/zaky-zamani-011890275/",'_blank', 'noopener, noreferrer')
  }
  const gitHub = () =>{
    window.open("https://github.com/ZakyZN99?tab=repositories",'_blank', 'noopener, noreferrer')
  }
  const waLink = () =>{
    window.open("http://wa.me/628563734618",'_blank', 'noopener, noreferrer')
  }
  const letsConnect = () =>{
    window.open("mailto:zakyzamani.jobs@gmail.com?subject=Subject&body=Body%20goes%20here")
  }

  useEffect(()=>{
    const onscroll = () =>{
      if(window.screenY > 50 ){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onscroll);
  
    return() =>window.removeEventListener("scroll", onscroll);
  },[]  )

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width={"70"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a onClick={linkedIn}><img src={navBarLogo1} alt="Linkedin" /></a>
              <a onClick={gitHub}><img src={navBarLogo3} alt="Github" /></a>
              <a onClick={waLink}><img src={navBarLogo2} alt="WA" /></a>
            </div>
            <button className="vvd" onClick={letsConnect}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
