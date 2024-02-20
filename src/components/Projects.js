import {
  Row,
  Col,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
  Card,
  Button,
  CardGroup,
} from "react-bootstrap";
import Sinanas from "../img/sinanas.svg";
import Sifirings from "../img/Sifirings.svg";
import MMImage from "../img/multilanguage.png";
import DT from "../img/DiseaseTrack.svg";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {
  // Link Disease Tracker
  const DTfigmaLink = () => {
    window.open(
      "https://www.figma.com/file/yrVgpTCSNx5YfojuhctzkD/Untitled?type=design&node-id=0%3A1&mode=design&t=J4VxVVVXY4FtNS62-1",
      "_blank",
      "noopener, noreferrer"
    );
  };
  const DTgithubLink = () => {
    window.open(
      "https://github.com/ZakyZN99/DiseaseTracker/",
      "_blank",
      "noopener, noreferrer"
    );
  };
  //Link SIFIRINGS
  const SIFIRINGSgithubLink = () => {
    window.open(
      "https://github.com/ZakyZN99/SIFIRINGS",
      "_blank",
      "noopener, noreferrer"
    );
  };
  // Link SINANAS
  const SINANASCertif = () => {
    window.open(
      "https://drive.google.com/file/d/13Q64o0AeTLx81l2xSm94yB7aj_xzqLfy/view?usp=sharing",
      "_blank",
      "noopener, noreferrer"
    );
  };
    // Link SINANAS
    const Multilanguage = () => {
      window.open(
        "https://github.com/ZakyZN99/ReactJSMultilanguageAndPDF",
        "_blank",
        "noopener, noreferrer"
      );
    };


  return (
    <section className="projects" id="projects">
      <Row>
        <Col>
          <h1 className="h1-custom ">Projects</h1>
          <h2 className="h2-custom proj-title">My latest projects</h2>
          <TabContainer id="projects-tabs" defaultActiveKey={"mobile"}>
            <Nav
              variant="tabs"
              className="nav-pills mb-5 justify-content-center align-items-center"
              id="pills-tab"
            >
              <Nav.Item>
                <Nav.Link eventKey={"mobile"}>Mobile Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"web"}>Web Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"software"}>Software Projects</Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent>
              {/* MOBILE PROJECTS */}
              <TabPane eventKey={"mobile"}>
                <Row>
                  <Col sm={6} md={1} className="offset-md-1">
                    <Card style={{ width: "25rem" }} className="card-projects">
                      <Card.Img
                        variant="top"
                        src={DT}
                        height={300}
                        className="cards-img"
                      />
                      <Card.Body>
                        <Card.Title>
                          <h4 className="card-title">Disease Tracker</h4>
                        </Card.Title>
                        <Card.Text>
                          Disease Tracker is an android application that aims to
                          help sick patients report or request to be picked up
                          due to illness. This application also helps hospitals
                          registered in the system to pick up the location of
                          the reporting patient who is connected to the Google
                          Map.
                          <br />
                          <br />
                          <span>
                            Tools: Flutter, Dart, Android Studio, MySQL, Figma
                          </span>
                        </Card.Text>
                        <div className="row-md-2">
                          <button
                            className="button-text1"
                            onClick={DTfigmaLink}
                          >
                            Figma Link
                          </button>
                          <button
                            className="button-text1"
                            onClick={DTgithubLink}
                          >
                            GitHub Link
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </TabPane>

              {/* WEBSITE PROJECTS */}
              <TabPane eventKey={"web"}>
                <Row>
                <Col sm={6} md={1} className="offset-md-1">
                    <CardGroup className="card-group">
                      <Card
                        style={{ width: "25rem" }}
                        className="card-projects"
                      >
                        <Card.Img
                          variant="top"
                          src={MMImage}
                          height={300}
                          className="cards-img"
                        />
                        <Card.Body>
                          <Card.Title>
                            <h4 className="card-title">
                              Multilanguage and PDF Generator
                            </h4>
                          </Card.Title>
                          <Card.Text>
                            Multilanguage and PDF Generator is a website to
                            change the language of the created template and
                            convert it into PDF file using React JS.
                            <br />
                            <br />
                            <span>Tools: React JS, CSS, Visual Studio Code, JSON</span>
                          </Card.Text>
                          <div className="row-md-2">
                            <button
                              className="button-text1"
                              onClick={Multilanguage}
                            >
                              GitHub
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
              </TabPane>

              {/* SOFWARE PROJECTS */}
              <TabPane eventKey={"software"}>
                <Row>
                  <Col sm={10} md={10} className="offset-md-1">
                    <CardGroup className="card-group">
                      <Card
                        style={{ width: "25rem" }}
                        className="card-projects"
                      >
                        <Card.Img
                          variant="top"
                          src={Sinanas}
                          height={300}
                          className="cards-img"
                        />
                        <Card.Body>
                          <Card.Title>
                            <h4 className="card-title">
                              Sistem Informasi Administrasi Banjar Dinas
                              (SINANAS)
                            </h4>
                          </Card.Title>
                          <Card.Text>
                            SINANAS is a data recording of members who enter and
                            exit to stay in the banjar dinas environment carried
                            out by the head of the banjar dinas environment in
                            the Sempidi area to facilitate data collection in
                            his neighbourhood.
                            <br />
                            <br />
                            <span>Tools: Phyton, VSCode</span>
                          </Card.Text>
                          <div className="row-md-2">
                            <button
                              className="button-text1"
                              onClick={SINANASCertif}
                            >
                              Certificate
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                      <Card
                        style={{ width: "25rem" }}
                        className="card-projects"
                      >
                        <Card.Img
                          variant="top"
                          src={Sifirings}
                          height={300}
                          className="cards-img"
                        />
                        <Card.Body>
                          <Card.Title>
                            <h4 className="card-title">SIFIRINGS</h4>
                          </Card.Title>
                          <Card.Text>
                            SIFIRINGS is a system for tracking the location of
                            ships where each ship will be paired with a device
                            to send the location of the ship connected to the
                            arduino. The device will send ship location data to
                            the gateway at the station. Communication between
                            these devices uses lora to send data. The device at
                            the station contains Lora and Raspberry Pi.
                            <br />
                            <br />
                            <span>Tools: Arduino, Raspberry PI, MySQL</span>
                          </Card.Text>
                          <div className="row-md-2">
                            <button
                              className="button-text1"
                              onClick={SIFIRINGSgithubLink}
                            >
                              GitHub Link
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </TabContainer>
        </Col>
      </Row>
    </section>
  );
};
