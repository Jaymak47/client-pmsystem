import { useContext } from "react";
import { Row, Col } from "react-bootstrap";

import LeftMenusGeneral from "../menus/leftmenusgeneral";
import { AuthContext } from "../context/auth";

const LoadingPage = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <Row>
        <Row className="m-5"></Row>

        <Row className="mt-3">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral user={user} />
          </Col>
          <Col className="mt-5">
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
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default LoadingPage;
