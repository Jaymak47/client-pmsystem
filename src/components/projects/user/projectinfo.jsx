import React, { useContext } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import moment from "moment";
import { useProject } from "../../../graphql/projects";
import { AuthContext } from "../../../context/auth";
import LeftMenusGeneral from "../../../menus/leftmenusgeneral";
import { useHistory } from "react-router";

function ProjectInfo(props) {
  const history = useHistory();
  const projectId = props.match.params.projectId;
  const { user } = useContext(AuthContext);

  const { data: getProject } = useProject(projectId);

  const handleBack = () => {
    history.push("/userprojects");
  };

  let postMarkup;
  if (!getProject) {
    postMarkup = (
      <h1>
        <span
          className="spinner-border"
          style={{
            width: " 3rem",
            height: "3rem",
            textAlign: "center",
            color: "#ee9b00",
          }}
        ></span>
      </h1>
    );
  } else {
    const {
      id,
      createdAt,
      username,
      projectdescription,
      projectno,
      projectname,
      department,
    } = getProject.getProject;

    postMarkup = (
      <Row className="mt-2">
        <div class="card text-center mt-5">
          <div class="card-header">
            <h4>Project Name: </h4>
            {projectname}
          </div>
          <div class="card-body">
            <h5 class="card-title">Project No : {projectno}</h5>
            <p class="card-text">{projectdescription}</p>

            <h5 class="card-title">
              Sector / Department : {department.departmentname}
            </h5>
          </div>

          <div class="card-footer text-muted">
            {moment(createdAt).fromNow()}
            {"- : -"}
            {moment(createdAt).format("DD-MM-YYYY")}
          </div>
          <div>
            <Button className="success" onClick={handleBack}>
              Back
            </Button>
          </div>
        </div>
      </Row>
    );
  }

  return (
    <>
      {" "}
      <Row>
        <Row className="m-3"></Row>

        <Row className="mt-3">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral user={user} />
          </Col>
          <Col md="9" className="mt-5">
            {postMarkup}
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default ProjectInfo;
