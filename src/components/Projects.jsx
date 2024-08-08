import {
  Row,
  Col,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import Sinanas from "../img/sinanas.svg";
import Sifirings from "../img/Sifirings.svg";
import MMImage from "../img/multilanguage.png";
import newsAPI from "../img/newsapi.png";
import DT from "../img/DiseaseTrack.svg";
import CravePizza from "../img/cravepizza.png";
import link from "../utils/link";
import ButtonText from "./assets/ButtonText";

export const Projects = () => {
  const {DTfigmaLink,DTgithubLink, SIFIRINGSgithubLink, SINANASCertif, Multilanguage, NewsAPIGit,CravePizze } =link()

  return (
    <section className="projects" id="projects">
      <Row>
        <Col>
          <h1 className="h1-custom">Projects</h1>
          <h2 className="h2-custom proj-title">My latest projects</h2>
          <TabContainer id="projects-tabs" defaultActiveKey={"mobile"}>
            <Nav
              variant="tabs"
              className="nav-pills mb-5 justify-content-center align-items-center"
              id="pills-tab"
            >
              <Nav.Item>
                <Nav.Link eventKey={"mobile"}>Mobile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"web"}>Website</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"software"}>Software</Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent>
              {/* MOBILE PROJECTS */}
              <TabPane eventKey={"mobile"}>
                <div className="mx-4 flex gap-3 justify-center">
                  <div className=" bg-[#252525] md:w-[250px] md:h-[550px] w-40 h-96 rounded-t-lg space-y-2 flex flex-col">
                      <a href={DT} target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
                        <img src={DT} className=" object-fill rounded-t-lg w-full md:h-[200px] h-[100px]" />
                      </a>
                      <div className="pb-1 flex-grow">
                        <h4 className="md:text-[18px] text-[12px] space-y-1">Disease Tracker</h4>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">Disease Tracker is an android application that aims to
                          help sick patients report or request to be picked up
                          due to illness. This application also helps hospitals
                          registered in the system to pick up the location of
                          the reporting patient who is connected to the Google
                          Map.</p>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">
                          Tools: Flutter, Dart, Android Studio, MySQL, Figma
                        </p>

                      </div>
                      <div className="flex justify-between md:mx-6 mx-4 mt-auto pb-2">
                        <ButtonText onClick={()=> DTfigmaLink()}>Figma</ButtonText>
                        <ButtonText onClick={()=> DTgithubLink()}>GitHub</ButtonText>
                      </div>
                  </div>
                </div>
              </TabPane>

              {/* WEBSITE PROJECTS */}
              <TabPane eventKey={"web"}>
                <div className="mx-4 flex gap-3 justify-center">
                  <div className=" bg-[#252525] md:w-[250px] md:h-[500px] w-40 h-80 rounded-t-lg space-y-2 flex flex-col">
                      <a href={CravePizza} target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
                        <img src={CravePizza} className=" object-fill rounded-t-lg w-full md:h-[200px] h-[100px]" />
                      </a>
                      <div className="pb-2 flex-grow">
                        <h4 className="md:text-[18px] text-[12px] space-y-1">Crave Pizza</h4>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">Pizza food marketplace and transactions between seller
                        and buyers.</p>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">
                          Tools: React JS, CSS, Tailwind CSS, Express JS,
                          Mongo DB, Visual Studio Code
                        </p>
                      </div>
                      <div className="flex justify-between md:mx-6 mx-4 mt-auto pb-4">
                        <ButtonText onClick={()=> CravePizze()}>GitHub</ButtonText>
                      </div>
                  </div>

                  <div className=" bg-[#252525] md:w-[250px] md:h-[500px] w-40 h-80 rounded-t-lg space-y-2 flex flex-col">
                      <a href={MMImage} target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
                        <img src={MMImage} className=" object-fill rounded-t-lg w-full md:h-[200px] h-[100px]" />
                      </a>
                      <div className="pb-2 flex-grow">
                        <h4 className="md:text-[18px] text-[12px] space-y-1">Multilanguage and PDF Generator</h4>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">Multilanguage and PDF Generator is a website to change
                          the language of the created template and convert it into PDF file using React JS.</p>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">
                          Tools: React JS, CSS, Javascript, Visual Studio Code, JSON
                        </p>
                      </div>
                      <div className="flex justify-between md:mx-6 mx-4 mt-auto pb-4">
                        <ButtonText onClick={()=> Multilanguage()}>GitHub</ButtonText>
                      </div>
                  </div>

                  <div className=" bg-[#252525] md:w-[250px] md:h-[500px] w-40 h-80 rounded-t-lg space-y-2 flex flex-col">
                      <a href={newsAPI} target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
                        <img src={newsAPI} className=" object-fill rounded-t-lg w-full md:h-[200px] h-[100px]" />
                      </a>
                      <div className="pb-2 flex-grow">
                        <h4 className="md:text-[18px] text-[12px] space-y-1">News API Website</h4>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">News API website is a website created to display news
                        whose data is retrieved using JSON from NewsAPI.</p>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">
                          Tools: React JS, CSS, Visual Studio Code, JSON
                        </p>
                      </div>
                      <div className="flex justify-between md:mx-6 mx-4 mt-auto pb-4">
                        <ButtonText onClick={()=> NewsAPIGit()}>GitHub</ButtonText>
                      </div>
                  </div>
                </div>
              </TabPane>

              {/* SOFTWARE PROJECTS */}
              <TabPane eventKey={"software"}>
                <div className="mx-4 flex gap-3 justify-center">
                  <div className=" bg-[#252525] md:w-[250px] md:h-[550px] w-40 h-96 rounded-t-lg space-y-2 flex flex-col">
                      <a href={Sinanas} target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
                        <img src={Sinanas} className=" object-fill rounded-t-lg w-full md:h-[200px] h-[100px]" />
                      </a>
                      <div className="pb-1 flex-grow">
                        <h4 className="md:text-[18px] text-[12px] space-y-1">Sistem Informasi Administrasi Banjar Dinas
                        (SINANAS)</h4>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">SINANAS is a data recording of members who enter and
                          exit to stay in the banjar dinas environment carried
                          out by the head of the banjar dinas environment in the
                          Sempidi area to facilitate data collection in his
                          neighbourhood.</p>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">
                          Tools: Python, Visual Studio Code.
                        </p>

                      </div>
                      <div className="flex justify-between md:mx-6 mx-4 mt-auto pb-2">
                        <ButtonText onClick={()=> SINANASCertif()}>Certificate</ButtonText>
                      </div>
                  </div>

                  <div className=" bg-[#252525] md:w-[250px] md:h-[550px] w-40 h-96 rounded-t-lg space-y-2 flex flex-col">
                      <a href={Sifirings} target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
                        <img src={Sifirings} className=" object-fill rounded-t-lg w-full md:h-[200px] h-[100px]" />
                      </a>
                      <div className="pb-1 flex-grow">
                        <h4 className="md:text-[18px] text-[12px] space-y-1">SIFIRINGS</h4>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">SIFIRINGS is a system for tracking the location of
                          ships where each ship will be paired with a device to
                          send the location of the ship connected to the
                          arduino. The device will send ship location data to
                          the gateway at the station. Communication between
                          these devices uses lora to send data. The device at
                          the station contains Lora and Raspberry Pi.</p>
                        <p className="md:text-[12px] text-[8px] flex justify-between p-1">
                          Tools: Arduino, Raspberry PI, MySQL
                        </p>

                      </div>
                      <div className="flex justify-between md:mx-6 mx-4 mt-auto pb-2">
                        <ButtonText onClick={()=> SIFIRINGSgithubLink()}>GitHub</ButtonText>
                      </div>
                  </div>
                </div>
              </TabPane>

            </TabContent>
          </TabContainer>
        </Col>
      </Row>
    </section>
  );
};
