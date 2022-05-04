import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/auth";
import _ from "lodash";
import { useActivities } from "../../../graphql/activities";
import { useProjects } from "../../../graphql/projects";
import { Row, Col, Modal, Button } from "react-bootstrap";
import UserActivityTable from "./useractivityTable";
import Pagination from "../../../common/pagination";
import { paginate } from "../../../utils/paginate";
import LeftMenusGeneral from "../../../menus/leftmenusgeneral";

export default function UserActivities() {
  const user = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);

  const departmentId = user.user.department;

  const { data: projectdata } = useProjects(user.department);

  //Load Data from the Server
  useEffect(() => {
    if (projectdata) {
      setProjects(projectdata.getProjects);
    }
  }, [projectdata]);

  const {
    error,
    data: activitiesdata,
    loading: loadingActivities,
  } = useActivities();

  useEffect(() => {
    if (activitiesdata) {
      setActivities(activitiesdata.getActivities);
    }
  }, [activitiesdata]);

  //Initialize Projects

  const [Addrecord, setAddRecord] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(50);
  const [currentPage, setcurrentPage] = useState(1);

  ///getPaged Data Function

  function getPagedData() {
    const allActivities = activities;

    let filtered = allActivities;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedActivities = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aActivities: paginatedActivities,
    };
  }
  const { totalCount, aActivities } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setpageSize(50);
    setcurrentPage(page);
  };

  return (
    <div>
      <Row>
        <Row className="m-5"></Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral />
          </Col>
          <Col md="9" className="mt-2">
            <div className="sectiondescription">
              <Row className="m-3">
                <h2>County Activities</h2>
                <h5 className="tabcontentdisplay">
                  A secure, just and prosperous County, where people achieve
                  their full potential and enjoy a high quality of life.
                </h5>
              </Row>
            </div>

            <Row className="m-1">
              <h4>
                {totalCount === 0
                  ? "No Activities in the Database"
                  : `Showing ${totalCount} Activities in the database.`}
              </h4>

              <UserActivityTable
                error={error}
                activities={aActivities}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={activities.length}
                input="Add New"
                loading={loadingActivities}
                name="Activities"
              />
            </Row>
            <Row className="m-3">
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
