import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useQuery } from "@apollo/client";
import { LOAD_DEPARTMENTS } from "../../graphql/queries";
import { useMutation } from "@apollo/client";
import { ADD_DEPARTMENT } from "../../graphql/mutations";

import {
  Col,
  Row,
  Button,
  InputGroup,
  Form,
  FormControl,
} from "react-bootstrap";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import DepartmentTable from "./departmentTable";
import _ from "lodash";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import { useForm } from "../../utils/hooks";

const Department = () => {
  const user = useContext(AuthContext);
  const { loading: loadingDepartments, data: departmentsdata } =
    useQuery(LOAD_DEPARTMENTS);
  const [departments, setDepartments] = useState([]);
  const [Addrecord, setAddRecord] = useState("");
  const pageSize = 50;
  const [currentPage, setcurrentPage] = useState(1);

  const { onChange, onSubmit, values, validated } = useForm(
    createDepartmentCallback,
    {
      departmentno: "",
      departmentname: "",
      departmentdescription: "",
    }
  );

  const [createDepartment, { error }] = useMutation(ADD_DEPARTMENT, {
    variables: values,

    update(proxy, result) {
      setAddRecord(
        `A new Department: ${values.departmentname} successfully added to the System `
      );
      const data = proxy.readQuery({
        query: LOAD_DEPARTMENTS,
      });
      data.getDepartments = [
        result.data.createDepartment,
        ...data.getDepartments,
      ];
      proxy.writeQuery({ query: LOAD_DEPARTMENTS, data });
      values.departmentno = "";
      values.departmentname = "";
      values.departmentdescription = "";
    },
    onError(err) {
      if (err) {
        return error;
      }
    },
  });

  function createDepartmentCallback() {
    createDepartment();
  }

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Load Data from the Server
  useEffect(() => {
    if (departmentsdata) {
      setDepartments(departmentsdata.getDepartments);
    }
  }, [departmentsdata]);

  //handle filtered Data
  function getPagedData() {
    const allDepartments = departments;

    let filtered = allDepartments;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedDepartments = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aDepartments: paginatedDepartments,
    };
  }
  const { totalCount, aDepartments } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const { departmentno, departmentname, departmentdescription } = values;
  return (
    <div>
      <Row>
        <Row className="m-5"></Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral user={user} />
          </Col>
          <Col md="9">
            <Form noValidate validated={validated} onSubmit={onSubmit}>
              <Row className="m-5">
                <h2>Departments</h2>

                <div className="sectiondescription">
                  <h6 className="leading">
                    Add a <strong> Department</strong> to the System
                  </h6>
                </div>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Department No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Department No"
                      name="departmentno"
                      value={departmentno}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Department Name</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Department Name"
                      name="departmentname"
                      value={departmentname}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <hr></hr>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text>Department Description</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Write Department Description Here"
                      name="departmentdescription"
                      as="textarea"
                      rows={3}
                      value={departmentdescription}
                      onChange={onChange}
                    />
                    <Button type="submit" variant="success">
                      Add Department
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="m-3">
                {error && (
                  <div
                    className="ui error message"
                    style={{ marginBottom: 20 }}
                  >
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

                <div className={Addrecord ? "ui success message" : null}>
                  {Addrecord ? Addrecord : null}
                </div>
              </Row>
              <Row className="m-3">
                <h4>
                  {totalCount === 0
                    ? "No Departments in the Database"
                    : `Showing ${totalCount} Sub-Sectors in the database.`}
                </h4>
                <DepartmentTable
                  departments={aDepartments}
                  onSort={handleSort}
                  sortColumn={sortColumn}
                  count={departments.length}
                  input=""
                  name="Sub Sectors"
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
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Department;
