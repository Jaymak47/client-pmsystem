import { Link } from "react-router-dom";
import Table from "../../../common/table";
import {
  Row,
  Col,
  Modal,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import EditTarget from "./edittarget";
import { MdCreditScore } from "react-icons/md";
import RatingScale from "../ratingscale";
import TotalMeanScore from "../totalmeanscore";

const SupervisorJointAppraisalTable = ({
  targets,
  totalSelfScore,
  totalSupervisorScore,
  totalJointReviewScore,
  onSort,
  sortColumn,
  count,
  show,
  handleClose,
  loading,
  targetId,
  appraiseTarget,
  handleShow,
}) => {
  let numbering = 1;

  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++,
    },
    { path: "task.taskname", label: "Task" },
    {
      path: "targetname",
      label: "Target",
      content: (target) => (
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Appraise Target</Tooltip>}
        >
          <span
            onClick={() => appraiseTarget(target.id)}
            style={{ color: "#007ACC" }}
          >
            {target.targetname}
          </span>
        </OverlayTrigger>
      ),
    },

    { path: "agreedPerformance", label: "Agreed Perfomance Target" },
    { path: "performanceIndicator", label: "Perfomance Indicator" },
    { path: "achievedResult", label: "Achieved Results" },
    { path: "selfScore", label: "Self Score" },
    { path: "supervisorScore", label: "Supervisor Score" },
    { path: "jointScore", label: "Joint Score" },
    {
      key: "targets",
      label: "Appraise Targets",
      content: (target) => (
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Appraise Target</Tooltip>}
        >
          <Button
            variant="blue"
            onClick={() => appraiseTarget(target.id)}
            style={{ color: "#007ACC" }}
          >
            {/* <i className="material-icons">&#xE254;</i> */}
            Score <MdCreditScore />
          </Button>
        </OverlayTrigger>
      ),
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

  let meanscore = 0;
  let supervisormeanscore = 0;
  let jointmeanscore = 0;

  // const TotalMeanScore =
  totalSelfScore > 0 ? (meanscore = totalSelfScore / count) : (meanscore = 0);
  totalSupervisorScore > 0
    ? (supervisormeanscore = totalSupervisorScore / count)
    : (supervisormeanscore = 0);
  totalJointReviewScore > 0
    ? (jointmeanscore = totalJointReviewScore / count)
    : (jointmeanscore = 0);

  return (
    <div>
      <Table
        columns={columns}
        data={targets}
        sortColumn={sortColumn}
        onSort={onSort}
        count={count}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Target</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTarget />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>

      <Row>
        <Col>
          <h3 className="tablestlyles4">Appraisee Self Score</h3>
          <TotalMeanScore totalScore={totalSelfScore} meanscore={meanscore} />
          <h3 className="tablestlyles4">Supervisor Score</h3>
          <TotalMeanScore
            totalScore={totalSupervisorScore}
            meanscore={supervisormeanscore}
          />
          <h3 className="tablestlyles4">Joint Score</h3>
          <TotalMeanScore
            totalScore={totalJointReviewScore}
            meanscore={jointmeanscore}
          />
        </Col>
        <Col md="7">
          <RatingScale />
        </Col>
      </Row>
    </div>
  );
};

export default SupervisorJointAppraisalTable;
