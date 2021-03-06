import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { LOAD_PROJECTS } from "../../graphql/projects";
import { LOAD_ACTIVITIES } from "../../graphql/activities";
import { LOAD_TRAININGS } from "../../graphql/trainings";
import LeftMenusGeneral from "../../menus/leftmenusgeneral";
import { Row, Col, Button } from "react-bootstrap";
import DashBoardRsideMenu from "../../components/dashboard/dashboardrsidemenu";
import SectorsBody from "./dashboard/sectorsbody";
import AgriliveFishDev from "./subsectors/agrilivefishdev";
import CountyAssembley from "./subsectors/countyassembley";
import EducationVocationalTraining from "./subsectors/educationvocationaltraining";
import FinanceEconomicPlanning from "./subsectors/financeeconomicplanning";
import HealthServices from "./subsectors/healthservices";
import LandUrbanPlanning from "./subsectors/landurbanplanning";
import OfficeofGovDpGov from "./subsectors/officeofgovdpgov";
import TourismWildlifeTrade from "./subsectors/tourismwildlifetrade";
import WaterEnergyEnv from "./subsectors/waterenergyenv";

const Sectors = () => {
  const user = useContext(AuthContext);
  const {
    error: errorProjects,
    loading: loadingProjects,
    data: projectsdata,
  } = useQuery(LOAD_PROJECTS);

  const {
    error: errorActivities,
    loading: loadingActivities,
    data: activitiesdata,
  } = useQuery(LOAD_ACTIVITIES);

  const {
    error: errorTrainings,
    loading: loadingTrainings,
    data: trainingsdata,
  } = useQuery(LOAD_TRAININGS);

  const [projects, setProjects] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [activities, setActivities] = useState([]);

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
    if (trainingsdata) {
      setTrainings(trainingsdata.getTrainings);
    }
  }, [trainingsdata]);

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
                    <h1>All County Sectors </h1>
                  </Row>
                  <Row>
                    <SectorsBody />
                  </Row>
                </div>
              </Col>
              <Col lg={3}>
                <h2>Year 2020 -2021 </h2>
                <input type="date" placeholder="Calender" />
                <Row className="m-3">
                  <Button className="btn-warning">Workplans</Button>
                </Row>
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

export default Sectors;
