import { Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const WaterEnergyStrategies = () => {
  return (
    <div>
      <Row className="m-3">
        <h6>The strategic priorities of the sector/sub-sector</h6>
        <Table striped bordered hover>
          <thead className="tablestlyles">
            <tr>
              <th>Sub-sector</th>
              <th>Development Needs</th>
              <th>Priorities</th>
              <th>Strategies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Water and sanitation </td>
              <td>
                Increase coverage and access to safe water in urban and rural
                areas
              </td>
              <td>
                <p>
                  {" "}
                  Strengthen synergies in integrated water resources management
                </p>
                <p>Increase water sourcing and storage capacity</p>
                <p>
                  Expand the water distribution network - Expand the water
                  treatment capacity
                </p>
                <p>Strengthen rural water supply governance</p>
              </td>
              <td>
                <p>Enact County water and sanitation laws and policies</p>
                <p>Support integrated water resources management</p>
                <p>Carry out comprehensive water resources mapping</p>
                <p>
                  Develop long term county water master plan - Detailed
                  feasibility studies into appropriate water technologies
                </p>
                <p>
                  Construct dams, boreholes, water pans, sand dams, wells, rock
                  catchments and springs
                </p>
                <p>Construct storage facilities </p>
                <p> Install water metering devices</p>
                <p>Install de-salination plants</p>
                <p>- Establish water treatment facilities </p>
                <p>Rehabilitate water supplies </p>
                <p> Install Solar pumping systems </p>
                <p> Develop new and extend water distribution systems</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Increased sanitation services in urban and rural areas</td>
              <td>
                <p>Expand sanitation facilities</p>
                <p>Expand the sewerage distribution network</p>
                <p>Expand the waste water treatment capacity</p>
              </td>
              <td>
                <p>- Construct sewerage treatment pond</p>
                <p>- Lay and extend sewer pipes</p>
                <p>- Construct ablution blocks</p>
                <p>- Construct pit latrine and bathrooms at all water points</p>
              </td>
            </tr>
          </tbody>
          <thead></thead>
        </Table>
      </Row>

      <Row className="m-3">
        <Table striped bordered hover>
          <thead className="tablestlyles">
            <tr>
              <th>Sub-sector</th>
              <th>Development Needs</th>
              <th>Priorities</th>
              <th>Strategies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Energy Environment, Natural Resources {"&"} Climate Change{" "}
              </td>
              <td>Increase access to energy services</td>
              <td>
                <p>Increase renewable energy sources</p>
              </td>
              <td>
                <p>Install Solar systems </p>
                <p>Construct Biogas systems</p>
                <p> Provide energy saving Jikos</p>
                <p>Install solar street lights</p>
                <p>Install rural lighting solar mini-grids</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Improve protection and conservation of the environment</td>
              <td>
                <p>Reduce environmental degradation</p>
                <p>
                  Strengthen natural resources management
                  <p>Improve vegetation cover</p>
                </p>
                <p>Reduce environmental pollution</p>
              </td>
              <td>
                <p>Planting of trees</p>
                <p> Rehabilitation of degraded areas </p>
                <p>Gabion construction </p>
                <p>
                  Trainings on environmental protection & Natural Resources
                  Management{" "}
                </p>
                <p>Fencing of cemeteries</p>
                <p>Reseeding rangelands</p>
                <p>Control of invasive species </p>
                <p>Establish hygienic solid waste disposal systems </p>
                <p>
                  Formulation of policies and legislation on waste management
                </p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Reduce adverse effects of Climate change</td>
              <td>
                <p>Strengthen Climate resilient livelihoods</p>
              </td>
              <td>
                <p>Develop climate proofing projects</p>
              </td>
            </tr>
          </tbody>
          <thead></thead>
        </Table>
      </Row>
    </div>
  );
};

export default WaterEnergyStrategies;
