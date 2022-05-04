import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Table from "../../../common/table";
import { Modal, Row, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const UserActivityTable = ({
  error,
  activities,
  onSort,
  sortColumn,
  count,
  name,
  show,
  handleClose,
  handleShow,
  loading,
}) => {
  let numbering = 1;
  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },
    {
      path: "activityno",
      label: "Activity No",
      content: (activity) => (
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>More Details</Tooltip>}
        >
          <Link to={`/useractivity/${activity.id}`}>{activity.activityno}</Link>
        </OverlayTrigger>
      ),
    },
    { path: "activityname", label: "Activity Name" },
    { path: "project.department.departmentname", label: "Department" },

    {
      path: "startdate",
      content: (date) => moment(date.startdate).format("DD-MM-YYYY"),
      label: "Start Date",
      date: { type: Date, default: Date },
    },

    {
      path: "enddate",
      content: (date) => moment(date.enddate).format("DD-MM-YYYY"),
      label: "End Date",
    },
  ];

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
        data={activities}
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

export default UserActivityTable;
