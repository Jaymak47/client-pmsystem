import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import { AuthContext } from "../../context/auth";

const MidYearReview = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <Row>
        <Row className="m-3"></Row>

        <Row className="mt-3">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral currentuser={user} />
          </Col>
          <Col md="9" className="mt-5">
            {" "}
            <h1>Mid Year Review</h1>{" "}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default MidYearReview;
