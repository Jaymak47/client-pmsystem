import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { useProjects } from "../../graphql/projects";
import { useActivities } from "../../graphql/activities";
import { useTrainings } from "../../graphql/trainings";
import { Row, Col, Button } from "react-bootstrap";
import LeftMenusGeneral from "../../menus/leftmenusgeneral";
import VisionBody from "../../components/county/dashboard/visionbody";
import DashBoardRsideMenu from "../dashboard/dashboardrsidemenu";

const CountyVision = () => {
  const user = useContext(AuthContext);
  const {
    error,
    loading: loadingProjects,
    data: projectsdata,
  } = useProjects(user.user.department);

  const {
    error: activityError,
    data: activitiesdata,
    loading: loadingActivities,
  } = useActivities(user.user.department);

  const {
    error: trainingserrors,
    data: trainingsData,
    loading: loadingTrainings,
  } = useTrainings(user.user.department);

  const [projects, setProjects] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [activities, setActivities] = useState([]);

  //Load  Data from the Server

  //Load  Data from the Server
  useEffect(() => {
    if (projectsdata) {
      setProjects(projectsdata.getProjects);
    }
  }, [projectsdata]);

  useEffect(() => {
    if (activitiesdata) {
      setActivities(activitiesdata.getActivities);
    }
  }, [activitiesdata]);

  useEffect(() => {
    if (trainingsData) {
      setTrainings(trainingsData.getTrainings);
    }
  }, [trainingsData]);

  return (
    <div>
      <Row>
        <Row className="m-5"></Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral user={user} />
          </Col>
          <Col md="9">
            <Row>
              <Col>
                <div className="sectiondescription">
                  <Row className="m-3">
                    <h1>County Vision</h1>
                    <h3 className="tabcontentdisplay">
                      A secure, just and prosperous County, where people achieve
                      their full potential and enjoy a high quality of life.
                    </h3>
                  </Row>
                </div>
              </Col>
              <Col lg={3}>
                <h2>Year 2020 -2021 </h2>
                <input
                  type="date"
                  placeholder="MM/DD/YYYY"
                  onfocus="(this.type='date')"
                  onblur="(this.type='text')"
                />
                <Row className="m-3">
                  <Button className="btn-warning">Workplans</Button>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <VisionBody />
              </Col>
              <Col lg="3">
                <DashBoardRsideMenu
                  trainings={trainings}
                  projects={projects}
                  activities={activities}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default CountyVision;
