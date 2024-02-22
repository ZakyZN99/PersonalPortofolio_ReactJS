import React from "react";
import flutterLogo from "../img/Flutter.svg";
import figmaLogo from "../img/Figma.svg";
import VSCodeLogo from "../img/VSCode.svg";
import PythonLogo from "../img/Python.svg";
import AndroidStudio from "../img/AndStudio.svg";
import Arduino from "../img/Arduino.svg";
import RaspPILogo from "../img/RaspPI.svg";
import DartLogo from "../img/Dart.svg";
import MySQLLogo from "../img/MySQL.svg";
import GitHubLogo from "../img/GitHub.svg";
import RestAPILogo from "../img/RestAPI.svg";
import PostmanLogo from "../img/Postman.svg";
import CSSLogo from "../img/css.png";
import reactjsLogo from "../img/reactjs.png";
import JsonLogo from "../img/json.png";
import Javascript from "../img/JavaScriptlogo.png";

import { Col, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
    <TrackVisibility>
      {({ isVisible }) =>(
        <div className={ isVisible ? "animate__animated animate__fadeInUp  skills-header" : " "}>
        <h1 className="h1-custom">SKILLS</h1>
        <h2 className="h2-custom">Software Used</h2>
      </div>
      )}
      </TrackVisibility>
      <div className="table-container" >
        <TrackVisibility>
        {({ isVisible }) =>(
          <div className={ isVisible ? "animate__animated animate__flipInX " : ""}>
        <Row>
          <Col md={{ span: 2, offset: 2 }}>
            <div>
              <img src={flutterLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Flutter</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={figmaLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Figma</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={PythonLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Python</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={VSCodeLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">VS Code</h3>
            </div>
          </Col>
        </Row>
        </div>
        )}
        </TrackVisibility>
        
        <TrackVisibility>
        {({ isVisible }) =>(
          <div className={ isVisible ? "animate__animated animate__flipInX " : ""}>
        <Row>
          <Col md={{ span: 2, offset: 2 }}>
            <div className="container">
              <img src={AndroidStudio} alt="LOGO" height={100} />
              <h3 className="h2-custom">Android Studio</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={Arduino} alt="LOGO" height={100} />
              <h3 className="h2-custom">Arduino</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={GitHubLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">GitHub</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={DartLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Dart</h3>
            </div>
          </Col>
        </Row>
        </div>
        )}
        </TrackVisibility>

        <TrackVisibility>
        {({ isVisible }) =>(
          <div className={ isVisible ? "animate__animated animate__flipInX " : ""}>
        <Row>
          <Col md={{ span: 2, offset: 2 }}>
            <div className="container">
              <img src={MySQLLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">MySQL</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={PostmanLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Postman</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={RaspPILogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Raspberry PI</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={RestAPILogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Rest API</h3>
            </div>
          </Col>
        </Row>
        </div>
        )}
        </TrackVisibility>

        <TrackVisibility>
        {({ isVisible }) =>(
          <div className={ isVisible ? "animate__animated animate__flipInX " : ""}>
        <Row>
          <Col md={{ span: 2, offset: 2 }}>
            <div className="container">
              <img src={JsonLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">JSON</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={reactjsLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">React JS</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={CSSLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">CSS</h3>
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="container">
              <img src={Javascript} alt="LOGO" height={100} />
              <h3 className="h2-custom">Javascript</h3>
            </div>
          </Col>
          
        </Row>
        </div>
        )}
        </TrackVisibility>
      </div>
    </section>
  );
};
