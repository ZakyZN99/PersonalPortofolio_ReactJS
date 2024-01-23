import {
  Row,
  Col,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
  Card,
  CardGroup,
} from "react-bootstrap";
import Sinanas from "../img/sinanas.svg";
import Sifirings from "../img/Sifirings.svg";
import DT from "../img/DiseaseTrack.svg";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Row>
        <Col>
          <h1 className="h1-custom ">Projects</h1>
          <h2 className="h2-custom">My latest projects</h2>
          <TabContainer id="projects-tabs" defaultActiveKey={"mobile"} >
            <Nav variant="tabs" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Col sm={6} md={4}>
                    <div className="proj-imgbox">
                      <img src={DT} height={300}></img>
                    </div>
                    <h4>
                    Disease Tracker 
                    </h4>
                    <span>
                      Disease Tracker is an android application that aims to
                      help sick patients report or request to be picked up due
                      to illness. This application also helps hospitals
                      registered in the system to pick up the location of the
                      reporting patient who is connected to the Google Map.
                    </span>
                  </Col>
                </Row>
              </TabPane>

              {/* WEBSITE PROJECTS */}
              <TabPane eventKey={"web"}>
                <Row></Row>
              </TabPane>

              {/* SOFWARE PROJECTS */}
              <TabPane eventKey={"software"}>
                <Row>
                  <Col sm={6} md={4}>
                    <div className="proj-imgbox">
                      <img src={Sinanas} height={300}></img>
                    </div>
                    <h4>
                      Sistem Informasi Administrasi Banjar Dinas (SINANAS)
                    </h4>
                    <span>
                      SINANAS is a data recording of members who enter and exit
                      to stay in the banjar dinas environment carried out by the
                      head of the banjar dinas environment in the Sempidi area
                      to facilitate data collection in his neighbourhood.
                    </span>
                  </Col>
                  <Col sm={6} md={4}>
                    <div className="proj-imgbox">
                      <img src={Sifirings} height={300}></img>
                    </div>
                    <h4>SIFIRINGS</h4>
                    <span>
                      SIFIRINGS is a system for tracking the location of ships
                      where each ship will be paired with a device to send the
                      location of the ship connected to the arduino. The device
                      will send ship location data to the gateway at the
                      station. Communication between these devices uses lora to
                      send data. The device at the station contains Lora and
                      Raspberry Pi.
                    </span>
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
