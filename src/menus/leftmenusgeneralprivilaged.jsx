import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaGooglePlay, FaHome } from "react-icons/fa";
import { GiStairsGoal, GiDiceTarget } from "react-icons/gi";
import { AiOutlineAim } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import MenuBar from "./menubar";
import SystemAdminMenu from "./systemadminmenu";

const LeftMenusGeneralPrivilaged = () => {
  const [sectors, setSectors] = useState(false);
  const [activity, setActivity] = useState(false);
  const [project, setProject] = useState(false);

  return (
    <Row>
      {" "}
      <SystemAdminMenu />
      <Row className="d-sm-none d-md-block m-2">
        <>
          <Col className="mt-1">
            <ListGroup>
              {/* Isiolo County Vision Mission Goals Sectors Objectives*/}

              <ListGroup.Item className="list-group-item-success p-3">
                <h3>County Goals, Objectives </h3>
                {/* About us Menu */}
                <>
                  <Link style={{ textDecoration: "none" }} to="/dashboard">
                    <ListGroup.Item className="d-flex  ">
                      <Col md="1">
                        <FaHome style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>Home</Col>
                    </ListGroup.Item>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/countyvision">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <AiOutlineAim style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>County Vision</Col>
                    </ListGroup.Item>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/countymission">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <GiStairsGoal style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>County Mission</Col>
                    </ListGroup.Item>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/countygoals">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <GiDiceTarget style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>County Goals and Objectives</Col>
                    </ListGroup.Item>
                  </Link>
                </>

                <ListGroup.Item
                  action
                  id="sectors"
                  onClick={() => setSectors(!sectors)}
                  className="d-flex "
                >
                  <Col md="1">
                    <FaGooglePlay style={{ color: "green" }} />
                    ....
                  </Col>

                  <Col>
                    Sectors / Sub-Sectors / Department Goals
                    {sectors && (
                      <>
                        <Link style={{ textDecoration: "none" }} to="/sectors">
                          <ListGroup.Item action>All Sectors</ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/agrilivefishdev"
                        >
                          <ListGroup.Item action>
                            Agriculture, Livestock and Fishery Development
                          </ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/waterenergyenv"
                        >
                          <ListGroup.Item action>
                            Water, Energy, Environment Natural Resource and
                            Climate Change
                          </ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/healthservices"
                        >
                          <ListGroup.Item action>
                            Health Services
                          </ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/landsurbanplanning"
                        >
                          <ListGroup.Item action>
                            Lands, Urban Planning Roads, Transport and public
                            works
                          </ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/tourismwildlifetrade"
                        >
                          <ListGroup.Item action>
                            Tourism, Wildlife, Trade, Public Service and County
                            Administration
                          </ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/educationvocationaltraining"
                        >
                          <ListGroup.Item action>
                            Education, vocational training, youth, sports,
                            culture and social service
                          </ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/fiananceeconomicplanning"
                        >
                          <ListGroup.Item action>
                            Finance, Economic Planning, ICT and Conflict
                            Resolution
                          </ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/officeofgovdpgov"
                        >
                          <ListGroup.Item action>
                            Office of the Governor and Deputy Governor
                          </ListGroup.Item>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/countyassembley"
                        >
                          <ListGroup.Item action>
                            County Assembly Services
                          </ListGroup.Item>
                        </Link>
                      </>
                    )}
                  </Col>
                </ListGroup.Item>
              </ListGroup.Item>

              <ListGroup.Item className="list-group-item-success p-3">
                <h3>Work Planner</h3>

                {/* Projects */}
                <>
                  <Link style={{ textDecoration: "none" }} to="/projects">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <AiOutlineAim style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>
                        <h4>Projects</h4>
                      </Col>
                    </ListGroup.Item>
                  </Link>
                </>
                <>
                  <Link style={{ textDecoration: "none" }} to="/contracts">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <AiOutlineAim style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>
                        <h4>Performance Contracts</h4>
                      </Col>
                    </ListGroup.Item>
                  </Link>
                </>

                {/* Activities */}
                <>
                  <Link style={{ textDecoration: "none" }} to="/activities">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <AiOutlineAim style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>
                        <h4>Activities</h4>
                      </Col>
                    </ListGroup.Item>
                  </Link>
                </>

                {/* Targets */}
                <>
                  <Link style={{ textDecoration: "none" }} to="/targets">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <AiOutlineAim style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>
                        <h4> Targets</h4>
                      </Col>
                    </ListGroup.Item>
                  </Link>
                </>
                <>
                  <Link style={{ textDecoration: "none" }} to="/targetreviews">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <AiOutlineAim style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>
                        <h4>Target Reviews</h4>
                      </Col>
                    </ListGroup.Item>
                  </Link>
                </>
              </ListGroup.Item>
              {/* Staff Appraisal Menu */}
              <ListGroup.Item className="list-group-item-warning">
                <h3>System Admin Appraisal </h3>

                <Col>
                  {/* Staff Appraisal */}
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/selfappraisal"
                    >
                      <ListGroup.Item action>Self Appraisal</ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/staffresponse"
                    >
                      <ListGroup.Item action>Staff Response</ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/departmentaltrainings"
                    >
                      <ListGroup.Item className="d-flex ">
                        <Col md="1">
                          <AiOutlineAim style={{ color: "#ee9b00" }} />
                        </Col>
                        <Col>Trainings</Col>
                      </ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link style={{ textDecoration: "none" }} to="/appraisals">
                      <ListGroup.Item action>Appraisal Report</ListGroup.Item>
                    </Link>
                  </>

                  {/* FeedBack */}
                </Col>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-success">
                <h3>System Admin: County Staff </h3>

                <Col>
                  {/* Staff Appraisal */}
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/systemadminappraisees"
                    >
                      <ListGroup.Item action>Appraisees</ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/jointmeetingappraisees"
                    >
                      <ListGroup.Item action>Review Meetings</ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/systemadminjointappraisees"
                    >
                      <ListGroup.Item action>Joint Reviews</ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/staffresponse"
                    >
                      <ListGroup.Item action>Staff Responses</ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/supervisorresponse"
                    >
                      <ListGroup.Item action>
                        Supervisor Responses
                      </ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/committeeappraisal"
                    >
                      <ListGroup.Item action>
                        Committee Appraisals
                      </ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/countyserviceboard"
                    >
                      <ListGroup.Item action>CSB Appraisals</ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link style={{ textDecoration: "none" }} to="/appraisals">
                      <ListGroup.Item action>Appraisal Reports</ListGroup.Item>
                    </Link>
                  </>
                  <>
                    <Link style={{ textDecoration: "none" }} to="/trainings">
                      <ListGroup.Item className="d-flex ">
                        <Col md="1">
                          <AiOutlineAim style={{ color: "#ee9b00" }} />
                        </Col>
                        <Col>Trainings</Col>
                      </ListGroup.Item>
                    </Link>
                  </>

                  {/* FeedBack */}
                </Col>
              </ListGroup.Item>

              {/* Employees Listings Departments Sectors Job Groups */}
              <ListGroup.Item className="list-group-item-warning">
                <h3>Users Management</h3>
                <Link style={{ textDecoration: "none" }} to="/register">
                  <ListGroup.Item className="d-flex ">
                    {" "}
                    <Col md="1">
                      <BsPeopleFill style={{ color: "#ee9b00" }} />
                    </Col>
                    <Col>Register Staff</Col>
                  </ListGroup.Item>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/employees">
                  <ListGroup.Item className="d-flex ">
                    {" "}
                    <Col md="1">
                      <BsPeopleFill style={{ color: "#ee9b00" }} />
                    </Col>
                    <Col>Employees Listings</Col>
                  </ListGroup.Item>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/departments">
                  <ListGroup.Item className="d-flex ">
                    {" "}
                    <Col md="1">
                      <BsPeopleFill style={{ color: "#ee9b00" }} />
                    </Col>
                    <Col>Sectors / Sub Sectors Listings</Col>
                  </ListGroup.Item>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/jobgroups">
                  <ListGroup.Item className="d-flex ">
                    {" "}
                    <Col md="1">
                      <BsPeopleFill style={{ color: "#ee9b00" }} />
                    </Col>
                    <Col>Job Groups</Col>
                  </ListGroup.Item>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </>
      </Row>
    </Row>
  );
};

export default LeftMenusGeneralPrivilaged;
