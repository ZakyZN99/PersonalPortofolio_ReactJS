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

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="Container">
        <div>
          <h1 className="h1-custom">SKILLS</h1>
          <h2 className="h2-custom">Software Used</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="container">
              <img src={flutterLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Flutter</h3>
            </div>
            <div className="container">
              <img src={AndroidStudio} alt="LOGO" height={100} />
              <h3 className="h2-custom">Android Studio</h3>
            </div>
            <div className="container">
              <img src={MySQLLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">MySQL</h3>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <img src={figmaLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Figma</h3>
            </div>
            <div className="container">
              <img src={Arduino} alt="LOGO" height={100} />
              <h3 className="h2-custom">Arduino</h3>
            </div>
            <div className="container">
              <img src={GitHubLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">GitHub</h3>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <img src={VSCodeLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">VS Code</h3>
            </div>
            <div className="container">
              <img src={RaspPILogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Raspberry PI</h3>
            </div>
            <div className="container">
              <img src={RestAPILogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Rest API</h3>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <img src={PythonLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Python</h3>
            </div>
            <div className="container">
              <img src={DartLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Dart</h3>
            </div>
            <div className="container">
              <img src={PostmanLogo} alt="LOGO" height={100} />
              <h3 className="h2-custom">Postman</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};