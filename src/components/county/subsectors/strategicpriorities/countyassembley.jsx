import { Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const CountyAssembleyStrategies = () => {
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
              <td>County Assembley</td>
              <td>Legislation </td>
              <td>
                Provide an enabling environment for the assembly to function
                effectively and efficiently.{" "}
              </td>
              <td>
                - Capacity building of County Assembly Members on oversight,
                legislation and representation function{" "}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Oversight</td>
              <td>To provide adequate oversight to the executive </td>
              <td> </td>
            </tr>
            <tr>
              <td></td>
              <td>Representation</td>
              <td>
                To ensure quality representation To establish adequate capacity
                to develop necessary County legislation
              </td>
              <td> Drafting bills in consultation with County Departments</td>
            </tr>
          </tbody>
          <thead></thead>
        </Table>
      </Row>
    </div>
  );
};

export default CountyAssembleyStrategies;
