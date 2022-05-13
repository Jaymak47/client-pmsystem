import { useState, useEffect, useContext, useMemo } from "react";
import _ from "lodash";
import { useMutation } from "@apollo/client";
import { FaHandPointLeft } from "react-icons/fa";
import { AuthContext } from "../../../context/auth";
import { useHistory } from "react-router";

import { Col, Row, Button, Form, InputGroup } from "react-bootstrap";
import LeftMenusGeneral from "../../../menus/leftmenusgeneral";
import Pagination from "../../../common/pagination";
import { paginate } from "../../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import {
  LOAD_TARGETS,
  useAppraisal,
  useTarget,
  UPDATE_TARGET,
  UPDATE_JOINTSCORE,
} from "../../../graphql/targets";
import { useUser } from "../../../graphql/users";
import { useForm } from "../../../utils/hooks";

import SupervisorJointReviewTable from "./supervisorjointreviewappraisaltable";

const SupervisorJointReview = (props) => {
  const user = useContext(AuthContext);
  const history = useHistory();
  const userId = props.match.params.userId;
  const [targets, setTargets] = useState([]);

  const [Addrecord, setAddRecord] = useState("");
  const [targetId, setTargetId] = useState("");
  const [target, setTarget] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const [score, setScore] = useState("");
  const [input, setInput] = useState({
    jointScoreCalc: "",
  });

  const {
    data: userdata,
    loading: loadingUserdata,
    error: userdataError,
  } = useUser(userId);

  const {
    data: targetsdata,
    loading,
    error: targetsError,
  } = useAppraisal(userId);
  //Load Data from the Server
  useEffect(() => {
    if (targetsdata) {
      setTargets(targetsdata.getUser.targets);
    }
  }, [targetsdata]);

  //Load Data from the Server
  useEffect(() => {
    if (userdata) {
      setSelectedUser(userdata.getUser);
    }
  }, [userdata]);

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(50);
  const [currentPage, setcurrentPage] = useState(1);

  //handle allTargets Data
  function getPagedData() {
    const allTargets = targets;

    const sorted = _.orderBy(allTargets, [sortColumn.path], [sortColumn.order]);

    const paginatedTargets = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: targets.length,
      aTargets: paginatedTargets,
    };
  }
  const { totalCount, aTargets } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const appraiseTarget = (target) => {
    setTargetId(target);
  };
  const {
    data: targetData,
    loading: LoadTarget,
    error: ErrorLoadingProjectData,
  } = useTarget(targetId);

  useEffect(() => {
    if (targetData) {
      setTarget(targetData.getTarget);
    }
  }, [targetData]);

  const { onChange, onSubmit, values, validated } = useForm(
    updateTargetCallback,
    {
      jointScore: "",
    }
  );

  const { jointScore } = values;

  const [updateTarget, { error }] = useMutation(UPDATE_JOINTSCORE, {
    variables: {
      targetId,
      jointScore,
    },

    update(proxy, result) {
      setAddRecord(
        `Supervisor Score: ${target.targetname} Updated successfully added on the System `
      );
      values.jointScore = "";
    },
    refetchQueries: [
      {
        query: LOAD_TARGETS,
        variables: { userId },
      },
    ],
    onError(err) {
      if (err) {
        //console.log(err.networkError.result.errors);
        return error;
      }
    },
  });

  function updateTargetCallback() {
    updateTarget();
  }

  const handleBack = () => {
    history.push("/systemadminappraisees");
  };

  const { firstname, surname, department, jobgroup, payrollno } = selectedUser;
  const departmentname = department ? department.departmentname : null;
  const jobgroupname = jobgroup ? jobgroup.jobgroupname : null;

  const scoreValue = useMemo(() => {
    return new Array(aTargets.length).fill(1);
  }, [aTargets]);

  const totalSelfScore = useMemo(() => {
    return aTargets.reduce((sum, target, index) => {
      return sum + parseFloat(target.selfScore) * scoreValue[index];
    }, 0);
  }, [scoreValue, aTargets]);

  const totalSupervisorScore = useMemo(() => {
    return aTargets.reduce((sum, target, index) => {
      return sum + parseFloat(target.supervisorScore) * scoreValue[index];
    }, 0);
  }, [scoreValue, aTargets]);

  const totalJointReviewScore = useMemo(() => {
    return aTargets.reduce((sum, target, index) => {
      return sum + parseFloat(target.jointScore) * scoreValue[index];
    }, 0);
  }, [scoreValue, aTargets]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const { pIndicator, aResult } = input;

  const handleSubmit = (event) => {
    let form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const computeScore = (parseInt(aResult) / parseInt(pIndicator)) * 100;
    console.log(computeScore);
    setScore(computeScore);
    setInput({ jointScoreCal: "" });
  };

  return (
    <div>
      <Row>
        <Row className="m-5"></Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral user={user} />
          </Col>
          <Col md="9">
            <div className="sectiondescription">
              <Row className="m-3">
                <h2>System Admin Appraisal</h2>
                <Row>
                  <Col md="2">
                    s<h3>#</h3>
                  </Col>
                  <Col>
                    <h3 style={{ textAlign: "left" }}> Notes</h3>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col md="2">
                    <h3>1</h3>
                  </Col>
                  <Col>
                    <h6 className="leading" style={{ textAlign: "left" }}>
                      This appraisal process will be completed by officers in
                      Job Group ‘J’ and above and equivalent grades in the
                      County Public Service. Officers in Jog Group ‘H’ and below
                      will complete a separate appraisal report.
                    </h6>
                  </Col>
                  <hr></hr>
                </Row>

                <Row>
                  <Col md="2">
                    <h3>2</h3>
                  </Col>
                  <Col>
                    <h6 className="leading" style={{ textAlign: "left" }}>
                      The Appraisee and the Supervisor should read the SPAS
                      guidelines prior to embarking on the actual appraisal.
                    </h6>
                  </Col>
                  <hr></hr>
                </Row>
                <Row>
                  <Col md="2">
                    <h3>3</h3>
                  </Col>
                  <Col>
                    <h6 style={{ textAlign: "left" }}>
                      The Supervisor and Appraisee shall discuss and agree on
                      the performance evaluation and rating at the end of the
                      appraisal period.
                    </h6>
                  </Col>
                </Row>
              </Row>
            </div>
            <Row className="m-3"></Row>

            <Row className="m-3">
              <Row className="tablestlyles4">
                <h3>
                  {firstname} {surname}
                  {"|"} Department {":"}
                  {departmentname} {"|"} {jobgroupname}
                  {"|"}PayrollNo {":"} {payrollno}
                </h3>
              </Row>

              <h4>
                {totalCount === 0
                  ? "No Task in the Database"
                  : `Showing ${totalCount} Targets in the database.`}
              </h4>

              <Col md="9">
                <SupervisorJointReviewTable
                  targets={aTargets}
                  onSort={handleSort}
                  sortColumn={sortColumn}
                  count={targets.length}
                  input="input"
                  loading={loading}
                  name="Targets"
                  targetId={targetId}
                  appraiseTarget={appraiseTarget}
                  totalSelfScore={totalSelfScore}
                  totalSupervisorScore={totalSupervisorScore}
                  totalJointReviewScore={totalJointReviewScore}
                />
                <>
                  <Col className="md-2">
                    <Button variant="warning" onClick={handleBack}>
                      Back
                    </Button>
                  </Col>
                </>
              </Col>

              <Col md="3" className="mt-5">
                <h3>
                  <FaHandPointLeft />
                  {""}
                  Select a Target on the table to Appraise
                </h3>
                <Form noValidate validated={validated} onSubmit={onSubmit}>
                  <div className="adddataform m-2">
                    <h3>{target.targetname}</h3>
                  </div>

                  <Row className="mt-3">
                    <Form.Group as={Col} md="12">
                      <InputGroup>
                        <InputGroup.Text>
                          {" "}
                          Joint Review Score (Per %)
                        </InputGroup.Text>
                        <Form.Control
                          required
                          title="Score"
                          type="text"
                          placeholder="0"
                          name="jointScore"
                          value={jointScore}
                          onChange={onChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Col className="mt-2">
                    <Button variant="success" type="submit">
                      score
                    </Button>
                  </Col>
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
                </Form>
                <>
                  <h3 className="tablestlyles">Score Calculator</h3>
                  <Form validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Form.Group as={Col} md="12">
                        <InputGroup>
                          <InputGroup.Text>
                            {" "}
                            Performance Indicator
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="0"
                            name="pIndicator"
                            value={pIndicator}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Row className="mt-3">
                      <Form.Group as={Col} md="12">
                        <InputGroup>
                          <InputGroup.Text> Achieved Result</InputGroup.Text>
                          <Form.Control
                            required
                            type="text"
                            placeholder="0"
                            name="aResult"
                            value={aResult}
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Col className="mt-2">
                      <Button
                        variant="success"
                        disabled={!values}
                        type="submit"
                      >
                        Calculate
                      </Button>
                    </Col>
                  </Form>
                  <>
                    <Col className="tablestlyles2 mt-2">
                      <h2>
                        Score:{Math.ceil(score)}
                        {""}
                        {"%"}
                      </h2>
                    </Col>
                  </>
                </>
              </Col>
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
};

export default SupervisorJointReview;
