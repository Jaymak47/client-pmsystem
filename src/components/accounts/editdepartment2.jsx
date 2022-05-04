import React, { useContext, useState, useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_DEPARTMENTS } from "../../graphql/queries";
import {
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  Table,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import moment from "moment";
import { useDepartment } from "../../graphql/queries";
import { AuthContext } from "../../context/auth";
import DeleteButton from "./deletebuttondepartment";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import { useHistory } from "react-router";
import { useForm } from "../../utils/hooks";
import { useMutation } from "@apollo/client";
import { UPDATE_DEPARTMENT } from "../../graphql/mutations";

function EditDepartment(props) {
  const history = useHistory();
  const [Addrecord, setAddRecord] = useState("");
  const departmentId = props.match.params.departmentId;
  const { user } = useContext(AuthContext);
  const { data: getDepartment, loading, error } = useDepartment(departmentId);
  const { loading: loadingDepartments, data: departmentsdata } =
    useQuery(LOAD_DEPARTMENTS);
  const [departments, setDepartments] = useState([]);
  const [input, setInput] = useState({
    departmentno: "",
    departmentname: "",
    departmentdescription: "",
  });

  const handleBack = () => {
    history.push("/departments");
  };

  //Load Data from the Server
  useEffect(() => {
    if (departmentsdata) {
      setDepartments(departmentsdata.getDepartments);
    }
  }, [departmentsdata]);

  const { onSubmit, values, validated } = useForm(updateDepartmentCallback, {
    departmentno: "",
    departmentname: "",
    departmentdescription: "",
  });

  const [updateDepartment, { error: UpdateDepartmentError }] = useMutation(
    UPDATE_DEPARTMENT,
    {
      variables: values,
      update(proxy, result) {
        setAddRecord(
          `Department: ${values.departmentname} successfully updated the System `
        );
        const data = proxy.readQuery({
          query: LOAD_DEPARTMENTS,
        });
        data.getDepartments = [
          result.data.updateDepartment,
          ...data.getDepartments,
        ];
        proxy.writeQuery({ query: LOAD_DEPARTMENTS, data });
        values.departmentno = "";
        values.departmentname = "";
        values.departmentdescription = "";
      },
      onError(err) {
        if (err) {
          return UpdateDepartmentError;
        }
      },
    }
  );

  function updateDepartmentCallback() {
    updateDepartment();
  }

  let postMarkup;
  if (!getDepartment) {
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
      departmentdescription,
      departmentno,
      departmentname,
    } = getDepartment.getDepartment;

    function onChange(event) {
      function newValues() {
        setInput({
          departmentno: departmentno,
          departmentname: departmentname,
          departmentdescription: departmentdescription,
        });
      }
      const { name, value } = event.target;
      newValues((prevInput) => {
        return {
          ...prevInput,
          [name]: value,
        };
      });
    }

    postMarkup = (
      <Row className="mt-2">
        <div class="card text-center mt-5">
          <div class="card-header">
            <h4>Department Name: </h4>
            {departmentname}
          </div>
          <div class="card-body">
            <h5 class="card-title">Department No : {departmentno}</h5>
            <p class="card-text">{departmentdescription}</p>
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
            {user && user.username === username && (
              <DeleteButton departmentId={id} />
            )}
          </div>
        </div>
        <Row>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Row className="m-5">
              <h2>Departments</h2>

              <div className="sectiondescription">
                <h6 className="leading">
                  Edit <strong> Department</strong> to the System
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
                    value={input.departmentno}
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
                    value={input.departmentname}
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
                    value={input.departmentdescription}
                    onChange={onChange}
                  />
                  <Button onClick={updateDepartment} variant="success">
                    Edit Department
                  </Button>
                </InputGroup>
              </Form.Group>
            </Row>
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

              <div className={Addrecord ? "ui success message" : null}>
                {Addrecord ? Addrecord : null}
              </div>
            </Row>
          </Form>
        </Row>
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

export default EditDepartment;
