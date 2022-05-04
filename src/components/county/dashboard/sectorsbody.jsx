import React from "react";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Secure from "../dashboard/Images/secure.jpg";
import Just from "../dashboard/Images/just.jpg";
import Prosperous from "../dashboard/Images/prosperous.jpg";
import PublicParticipation from "../dashboard/Images/publicparticipation.jpg";
import InfrastructureDev from "../dashboard/Images/infrastructuredev.jpg";
import { Link } from "react-router-dom";

const SectorsBody = ({ projects }) => {
  return (
    <div>
      <Row>
        {" "}
        <CardGroup>
          <Card className="m-2">
            <Link to="/agrilivefishdev">
              <Card.Img variant="top" src={InfrastructureDev} />
              <Card.Body>
                <Card.Title>
                  <h3>Agriculture, Livestock, Fisheries and Irrigation</h3>
                </Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>
                    i. Enhance Food and Nutrition Security;
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    ii. Improve market access and linkages;
                  </p>{" "}
                  <p style={{ textAlign: "justify" }}>
                    iii. Increase production and productivity of agricultural
                    produce.
                  </p>
                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>

          <Card className="m-2">
            <Link to="/waterenergyenv">
              <Card.Img variant="top" src={Secure} />
              <Card.Body>
                .
                <Card.Title>
                  <h3>
                    Water, Energy, Environment, Natural Resources & Climate
                    Change
                  </h3>{" "}
                </Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>
                    <strong>Water Sub-Sector</strong> strategic priorities are
                    to improve reliability, accessibility and availability of
                    adequate quantities of good quality water supply for all
                    uses in the County{" "}
                  </p>
                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>

          <Card className="m-2">
            <Link to="/healthservices">
              <Card.Img variant="top" src={Secure} />
              <Card.Body>
                <Card.Title>
                  <h3>Health Services</h3>{" "}
                </Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>
                    Elimination of Communicable diseases
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Provision of Essential Health Care
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Provision of adequate and appropriate health infrastructures
                  </p>
                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </CardGroup>
      </Row>
      <Row>
        {" "}
        <CardGroup>
          <Card className="m-2">
            <Link to="/landsurbanplanning">
              <Card.Img variant="top" src={Secure} />
              <Card.Body>
                <Card.Title>
                  <h3>
                    Lands, Physical Planning, Surveying and Housing, Roads and
                    Public Works{" "}
                  </h3>{" "}
                </Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>
                    To have well planned and organized spaces with clearly
                    defined land uses and boundaries
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    To improve accessibility and movement in the County{" "}
                  </p>
                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card className="m-2">
            <Link to="/tourismwildlifetrade">
              <Card.Img variant="top" src={InfrastructureDev} />
              <Card.Body>
                <Card.Title>
                  <h3>
                    Tourism, Wildlife, Trade, Public Service and County
                    Administration
                  </h3>
                </Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>
                    To increase tourists’ arrivals and earnings to the county,
                    Trade enhancement, Enhancement of cooperative development,
                    Enhancement of fair trade practices, Industrial development
                  </p>
                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>

          <Card className="m-2">
            <Link to="/educationvocationaltraining">
              <Card.Img variant="top" src={Secure} />
              <Card.Body>
                <Card.Title>
                  <h3>Education, Youth Affairs, Gender and Social Services</h3>{" "}
                </Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>
                    To empower the Youth, women and people living with
                    disability
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    To engage the youth in sports and vocational training
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    To cushion vulnerable groups to meet basic human needs
                  </p>
                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </CardGroup>
      </Row>
      <Row>
        {" "}
        <CardGroup>
          <Card className="m-2">
            <Link to="/fiananceeconomicplanning">
              <Card.Img variant="top" src={Secure} />
              <Card.Body>
                <Card.Title>
                  <h3>
                    Finance,Economic Planning, ICT and Conflict Resolution
                  </h3>{" "}
                </Card.Title>
                <Card.Text>
                  <strong>Finance and Economic Planning</strong>
                  <p style={{ textAlign: "justify" }}>
                    Ensuring of accountability and prudent financial management
                    for county public resources
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Enhancing economic policy management for county development
                  </p>
                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card className="m-2">
            <Link to="/officeofgovdpgov">
              <Card.Img variant="top" src={InfrastructureDev} />
              <Card.Body>
                <Card.Title>
                  <h3>Office of Governor and Deputy</h3>
                </Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>
                    Provide overall policy and strategic direction for the
                    socio-economic and political transformation of the county
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Attract, retain and develop competent human resource in the
                    public service for efficient and effective service delivery
                  </p>

                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>

          <Card className="m-2">
            <Link to="/countyassembley">
              <Card.Img variant="top" src={Secure} />
              <Card.Body>
                <Card.Title>
                  <h3>The County Assembly </h3>{" "}
                </Card.Title>
                <Card.Text>
                  <p style={{ textAlign: "justify" }}>
                    To facilitate the Members of county assembly to efficiently
                    and effectively fulfill their constitutional mandate in
                    enhancing democracy in collaboration with executive
                  </p>

                  <strong>Read more</strong>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </CardGroup>
      </Row>
    </div>
  );
};

export default SectorsBody;
