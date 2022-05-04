import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/auth";
import DatePickerA from "../../../common/datepicker";
import { Row, Col, Button, ProgressBar } from "react-bootstrap";
import LeftMenusGeneral from "../../../menus/leftmenusgeneral";
import SupervisorDashboardBody from "./supervisordashboardbody";
import DashBoardRsideMenu from "../dashboardrsidemenu";
import { useQuery } from "@apollo/react-hooks";

import { LOAD_DEPARTMENTS } from "../../../graphql/departments";
import { LOAD_TARGETS } from "../../../graphql/targets";
import {
  LOAD_TASKS,
  useTasks,
  useDepartmentalTasks,
} from "../../../graphql/tasks";
import { useUsers } from "../../../graphql/users";
import { useProjects } from "../../../graphql/projects";
import { useActivities } from "../../../graphql/activities";
import { useTrainings } from "../../../graphql/trainings";

function SupervisorDashboard() {
  const user = useContext(AuthContext);

  const { id: userId } = user.user;
  const {
    error: projectError,
    loading: loadingProjects,
    data: projectsdata,
  } = useProjects(user.user.department);

  const {
    error: activityError,
    data: activitiesdata,
    loading: loadingActivities,
  } = useActivities(user.user.department);

  const {
    error: tasksError,
    data: tasksdata,
    loading: loadingTasks,
  } = useDepartmentalTasks(user.user.department);

  const {
    error: errorTargets,
    loading: loadingTargets,
    data: targetsdata,
  } = useQuery(LOAD_TARGETS);

  const {
    error,
    loading: loadingUsers,
    data: usersdata,
  } = useUsers(user.user.department);

  const {
    error: errorDepartments,
    loading: loadingDepartments,
    data: departmentsdata,
  } = useQuery(LOAD_DEPARTMENTS);

  const {
    error: trainingserrors,
    data: trainingsData,
    loading: loadingTrainings,
  } = useTrainings(user.user.department);

  const [Projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [targets, setTargets] = useState([]);
  const [appraisals, setAppraisals] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [helpCenter, setHelpCenter] = useState([]);
  const [lastUpdatedProjects, setLastUpdatedProjects] = useState([]);
  const [lastUpdatedActivities, setLastUpdatedActivities] = useState([]);
  const [lastUpdatedTargets, setLastUpdatedTargets] = useState([]);
  const [lastUpdatedAppraisals, setLastUpdatedAppraisals] = useState([]);
  const [lastUpdatedFeedbacks, setLastUpdatedFeedbacks] = useState([]);
  const [lastUpdatedTrainings, setLastUpdatedTrainings] = useState([]);
  const [lastUpdatedSectors, setLastUpdatedSectors] = useState([]);
  const [lastUpdatedDepartments, setLastUpdatedDepartments] = useState([]);
  const [lastUpdatedHelpCenter, setLastUpdatedHelpCenter] = useState([]);

  //Get Data from Server
  useEffect(() => {
    if (projectsdata) {
      setProjects(projectsdata.getProjects);
    }
  }, [projectsdata]);

  useEffect(() => {
    if (usersdata) {
      setUsers(usersdata.getUsers);
    }
  }, [usersdata]);
  useEffect(() => {
    if (departmentsdata) {
      setDepartments(departmentsdata.getDepartments);
    }
  }, [departmentsdata]);

  useEffect(() => {
    if (activitiesdata) {
      setActivities(activitiesdata.getActivities);
    }
  }, [activitiesdata]);

  useEffect(() => {
    if (tasksdata) {
      setTasks(tasksdata.getTasks);
    }
  }, [tasksdata]);

  useEffect(() => {
    if (targetsdata) {
      setTargets(targetsdata.getTargets);
    }
  }, [targetsdata]);

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
                    <h2>
                      {user.user.firstname}
                      {"  "}
                      {user.user.surname} {" : "}Supervisor DashBoard
                    </h2>
                    <ProgressBar>
                      <ProgressBar
                        variant="success"
                        now={25}
                        key={1}
                        label="Quarter 1"
                      />
                      <ProgressBar
                        variant="primary"
                        now={25}
                        key={2}
                        label="Quarter 2"
                      />
                      <ProgressBar
                        variant="warning"
                        now={25}
                        key={3}
                        label="Quarter 3"
                      />
                      <ProgressBar
                        variant="secondary"
                        now={25}
                        key={4}
                        label="Quater 4"
                      />
                    </ProgressBar>
                  </Row>
                </div>
              </Col>
              <Col lg={3}>
                <h2>Year 2020 -2021 </h2>
                <DatePickerA />
                <Row className="m-3">
                  <Button className="btn-warning">Workplans</Button>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <SupervisorDashboardBody
                  projects={Projects}
                  lastUpdatedProjects={lastUpdatedProjects}
                  activities={activities}
                  lastUpdatedActivities={lastUpdatedActivities}
                  targets={targets}
                  tasks={tasks}
                  users={users}
                  lastUpdatedTargets={lastUpdatedTargets}
                  appraisals={appraisals}
                  lastUpdatedAppraisals={lastUpdatedAppraisals}
                  feedbacks={feedbacks}
                  lastUpdatedFeedbacks={lastUpdatedFeedbacks}
                  trainings={trainings}
                  lastUpdatedTrainings={lastUpdatedTrainings}
                  sectors={sectors}
                  lastUpdatedSectors={lastUpdatedSectors}
                  departments={departments}
                  lastUpdatedDepartments={lastUpdatedDepartments}
                  helpCenter={helpCenter}
                  lastUpdatedHelpCenter={lastUpdatedHelpCenter}
                />
              </Col>
              <Col lg="3">
                <DashBoardRsideMenu
                  trainings={trainings}
                  projects={Projects}
                  activities={activities}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default SupervisorDashboard;
