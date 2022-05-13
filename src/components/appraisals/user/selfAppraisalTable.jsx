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
import EditTarget from "../jointappraisals/edittarget";
import { MdCreditScore } from "react-icons/md";
import RatingScale from "../ratingscale";
import TotalMeanScore from "../totalmeanscore";

const SelfappraisalTable = ({
  targets,
  totalScore,
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
    { path: "agreedPerformance", label: "Agreed Perfomance" },
    { path: "performanceIndicator", label: "Perfomance Indicator" },
    { path: "achievedResult", label: "Achieved Results" },
    {
      path: "selfScore",
      label: "Self Score",
      content: (target) => (
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Appraise Target</Tooltip>}
        >
          <span
            onClick={() => appraiseTarget(target.id)}
            style={{ color: "#007ACC" }}
          >
            {target.selfScore}
          </span>
        </OverlayTrigger>
      ),
    },

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

  let meanscore = 0;

  // const TotalMeanScore =
  totalScore > 0 ? (meanscore = totalScore / count) : (meanscore = 0);

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
          <TotalMeanScore totalScore={totalScore} meanscore={meanscore} />
        </Col>
        <Col md="7">
          <RatingScale />
        </Col>
      </Row>
    </div>
  );
};

export default SelfappraisalTable;
