import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/Logo.svg";
import navBarLogo1 from '../img/Linkedin.svg';
import navBarLogo2 from '../img/Whatsapp.svg';
import navBarlogo3 from '../img/Instagram.svg';

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" width={"80"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink => 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink => 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink => 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navBarLogo1} alt="A" width={'30'}/></a>
              <a href="#"><img src={navBarLogo2} alt="B" width={'30'}/></a>
              <a href="#"><img src={navBarlogo3} alt="C" width={'30'}/></a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
