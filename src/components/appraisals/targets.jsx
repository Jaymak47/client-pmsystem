import { useState, useEffect } from "react";
import _ from "lodash";
import { AuthContext } from "../../context/auth";
import { useQuery } from "@apollo/client";
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
import LeftMenusGeneral from "../leftmenusgeneral";
import TargetsTable from "./selfAppraisalTable";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import { LOAD_TARGETS } from "../../graphql/queries";
import { UPDATE_TARGET } from "../../graphql/updatecomponents";

const Targets = () => {
  const user = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data: targetsdata } = useQuery(LOAD_TARGETS);
  const [targets, setTargets] = useState([]);
  const [Addrecord, setAddRecord] = useState("");

  const { onChange, onSubmit, values, validated } = useForm(
    createTargetCallback,
    {
      targetno: "",
      targetname: "",
      task: "",
      agreedPerformance: "",
      performanceIndicator: "",
      startdate: "",
      enddate: "",
      selfScore: "",
      supervisorScore: "",
      jointScore: "",
    }
  );

  const [updateTarget, { error }] = useMutation(UPDATE_TARGET, {
    variables: {
      targetId,
      targetno,
      targetname,
      task,
      agreedPerformance,
      performanceIndicator,
      startdate,
      enddate,
      selfScore,
      supervisorScore,
      jointScore,
    },

    update(proxy, result) {
      setAddRecord(
        `Department: ${values.departmentname} Edited successfully added to the System `
      );
      const data = proxy.readQuery({
        query: LOAD_TARGETS,
      });

      proxy.writeQuery({ query: LOAD_TARGETS, data });

      values.departmentno = "";
      values.departmentname = "";
      values.departmentdescription = "";
    },
    onError(err) {
      if (err) {
        //console.log(err.networkError.result.errors);
        return error;
      }
    },
  });

  function updateDepartmentCallback() {
    updateDepartment();
  }

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
      totalCount: allTargets.length,
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

  const {
    task,
    targetno,
    targetname,
    agreedPerformance,
    performanceIndicator,
    startdate,
    enddate,
    selfScore,
    supervisorScore,
    jointScore,
  } = values;
  console.log(aTargets);
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
                <h2>Set Targets</h2>
                <h5 className="tabcontentdisplay">
                  A secure, just and prosperous County, where people achieve
                  their full potential and enjoy a high quality of life.
                </h5>
              </Row>
            </div>

            <Row className="m-1">
              <h4>
                {totalCount === 0
                  ? "No Task in the Database"
                  : `Showing ${totalCount} Targets in the database.`}
              </h4>
              <Col></Col>
              <Col md="2">
                <Button onClick={handleShow} variant="success" className="mx-2">
                  Add Target
                </Button>
              </Col>

              <TargetsTable
                targets={aTargets}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={targets.length}
                input={input}
                loading={loading}
                name="Targets"
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
};

export default Targets;
