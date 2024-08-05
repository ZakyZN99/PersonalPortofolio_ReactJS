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
import tailwind from "../img/tailwindcss.png";
import mongodb from "../img/mongodb.png";
import nodejs from '../img/nodejs.png'
import html from '../img/html.png'
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
            <div className="flex items-center md:mx-60 mx-4 justify-between pb-8">
              <div className="flex flex-col items-center gap-2">
                <img alt="Flutter" src={flutterLogo} className="md:w-20 w-10"/>
                <p className="md:text-[18px] text-[12px] ">Flutter</p>
              </div>
              <div className="flex flex-col items-center gap-1 ">
                <img alt="figma" src={figmaLogo} className="md:w-14 w-8  "/>
                <p className="md:text-[18px] text-[12px]">Figma</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img alt="python" src={PythonLogo} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">Python</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img alt="VSCodeLogo" src={VSCodeLogo} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">VS Code</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img alt="AndroidStudio" src={AndroidStudio} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">Android Studio</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img alt="Arduino" src={Arduino} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">Arduino</p>
              </div>
            </div>
          </div>
        )}
        </TrackVisibility>
        
        <TrackVisibility>
        {({ isVisible }) =>(
          <div className={ isVisible ? "animate__animated animate__flipInX " : ""}>
            <div className="flex items-center md:mx-60 lg:mx-96 mx-4 justify-between pb-8">
              <div className="flex flex-col items-center gap-2">
                <img alt="GitHubLogo" src={GitHubLogo} className="md:w-20 w-10"/>
                <p className="md:text-[18px] text-[12px]">GitHub</p>
              </div>
              <div className="flex flex-col items-center md:gap-4 gap-2 ">
                <img alt="DartLogo" src={DartLogo} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">Dart</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img alt="MySQLLogo" src={MySQLLogo} className=" md:w-[150px] w-[90px] "/>
                <p className="md:text-[18px] text-[12px]">MySQL</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img alt="PostmanLogo" src={PostmanLogo} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">Postman</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img alt="RaspPILogo" src={RaspPILogo} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">Raspberry PI</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img alt="RestAPILogo" src={RestAPILogo} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">RestAPI</p>
              </div>
            </div>
        </div>
        )}
        </TrackVisibility>

        <TrackVisibility>
        {({ isVisible }) =>(
          <div className={ isVisible ? "animate__animated animate__flipInX " : ""}>
            <div className="flex items-center md:mx-52 lg:mx-94 mx-2  justify-between pb-8">
              <div className="flex flex-col items-center gap-2">
                <img alt="JsonLogo" src={JsonLogo} className="md:w-32 w-20"/>
                <p className="md:text-[18px] text-[12px]">JSON</p>
              </div>
              <div className="flex flex-col items-center md:gap-4 gap-2">
                <img alt="reactjsLogo" src={reactjsLogo} className="md:w-16 w-10"/>
                <p className="md:text-[18px] text-[12px]">React JS</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img alt="CSSLogo" src={CSSLogo} className="md:w-16 w-8"/>
                <p className="md:text-[18px] text-[12px]">CSS</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img alt="Javascript" src={Javascript} className="md:w-20 w-10"/>
                <p className="md:text-[18px] text-[12px]">Javascript</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img alt="tailwind" src={tailwind} className="md:w-28 w-12"/>
                <p className="md:text-[18px] text-[12px]">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img alt="mongodb" src={mongodb} className="md:w-20 w-10"/>
                <p className="md:text-[18px] text-[12px]">MongoDB</p>
              </div>
            </div>
        </div>
        )}
        </TrackVisibility>

        <TrackVisibility>
        {({ isVisible }) =>(
          <div className={ isVisible ? "animate__animated animate__flipInX " : ""}>
            <div className="flex items-center justify-center md:space-x-36 space-x-4 pb-8">
              <div className="flex flex-col items-center gap-4">
                <img alt="nodejs" src={nodejs} className="md:w-52 w-24"/>
                <p className="md:text-[18px] text-[12px]">Node JS</p>
              </div>
              <div className="flex flex-col items-center gap-1 ">
                <img alt="html" src={html} className="md:w-20 w-10  "/>
                <p className="md:text-[18px] text-[12px]">HTML</p>
              </div>
            </div>
        </div>
        )}
        </TrackVisibility>
      </div>
    </section>
  );
};
