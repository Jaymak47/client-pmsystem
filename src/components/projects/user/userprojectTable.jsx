import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Table from "../../../common/table";
import { Modal, Row, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const UserProjectTable = ({
  error,
  projects,
  loading,
  onSort,
  sortColumn,
  count,
  name,
  show,
  handleClose,
  handleShow,
}) => {
  let numbering = 1;

  const currFormat = (num) => {
    return parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },
    {
      path: "projectno",
      label: "Project No",
      content: (project) => (
        <Link to={`/userproject/${project.id}`}>{project.projectno}</Link>
      ),
    },
    { path: "projectname", label: "Project Name" },
    { path: "projectdescription", label: "Project Description" },
    { path: "department.departmentname", label: "Department" },
  ];

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  if (loading) {
    return (
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
  }

  return (
    <div>
      <Table
        columns={columns}
        data={projects}
        sortColumn={sortColumn}
        onSort={onSort}
        count={count}
        name={name}
      />

      <Row className="m-3">
        {error && (
          <div className="ui error message" style={{ marginBottom: 20 }}>
            <ul
              className="list "
              style={{
                "text-align": "center",
              }}
            >
              <li>
                {error.networkError
                  ? "Network Error: - Error connecting to PFMS Database Server: Contact System Administrator"
                  : error.graphQLErrors[0].message}
              </li>
            </ul>
          </div>
        )}
      </Row>
    </div>
  );
};

export default UserProjectTable;
