import React, { useEffect, useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_DEPARTMENTS, useDepartment } from "../../../graphql/departments";
import { useProjects } from "../../../graphql/projects";
import _ from "lodash";
import { Row, Col, Modal, Button } from "react-bootstrap";
import LeftMenusGeneral from "../../../menus/leftmenusgeneral";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../../common/pagination";
import UserContractTable from "./usecontracttable";
import { AuthContext } from "../../../context/auth";

function UserPerformanceContracts() {
  const { user } = useContext(AuthContext);

  const departmentId = user.department;
  const { data: departmentdata } = useDepartment(departmentId);
  const {
    error,
    loading: loadingProjects,
    data: projectdata,
  } = useProjects(user.department);

  const { loading: loadingDepartments, data: departmentsdata } =
    useQuery(LOAD_DEPARTMENTS);
  const [errors, setErrors] = useState({});
  const [netErrors, setNetErrors] = useState("");
  const [Addrecord, setAddRecord] = useState("");
  const [projects, setProjects] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState({});
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });
  const [pageSize, setpageSize] = useState(100);
  const [currentPage, setcurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Get Data From Server
  useEffect(() => {
    if (projectdata) {
      setProjects(projectdata.getProjects);
    }
  }, [projectdata]);

  const { id: projectId, projectname: currProjectname } = projects;
  useEffect(() => {
    if (departmentsdata) {
      setDepartments(departmentsdata.getDepartments);
    }
  }, [departmentsdata]);

  useEffect(() => {
    if (departmentdata) {
      setDepartment(departmentdata.getDepartment);
    }
  }, [departmentdata]);

  ///getPaged Data Function

  function getPagedData() {
    const allProjects = projects;

    let filtered = allProjects;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedProjects = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aProjects: paginatedProjects,
    };
  }
  const { totalCount, aProjects } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  return (
    <div>
      <Row>
        <Row className="m-5"></Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral user={user} />
          </Col>
          <Col md="9" className="mt-2">
            <div className="sectiondescription">
              <Row className="m-3">
                <h2>Performance Contracts</h2>
                <h5 className="tabcontentdisplay">
                  A secure, just and prosperous County, where people achieve
                  their full potential and enjoy a high quality of life.
                </h5>
              </Row>
            </div>

            <Row className="m-1">
              <h4>
                {totalCount === 0
                  ? "No Contracts in the Database"
                  : `Showing ${totalCount} Contracts in the database.`}
              </h4>

              <UserContractTable
                error={error}
                projects={aProjects}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={projects.length}
                input="Input"
                loading={loadingProjects}
                name="Projects"
                projectId={projectId}
                currProjectname={currProjectname}
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

export default UserPerformanceContracts;
