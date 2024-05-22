import React from "react";
import Header from "../Header";
import Footbar from "../Footbar";
import "../../stylesheets/JobSeeker/currentJobs.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const CurrentJob = () => {
  return (
    <>
      <Header />
      <div id="current-job">
        <div className="current-job-head">
          <h3>Current Jobs</h3>
          <p>
            Yes Tech Solutions Inc. maintains a Current Jobs database for the
            aspiring professionals. The Current Jobs has been the point of
            initiation for several bright careers as many companies have found
            perfect candidates for their vacancies.
          </p>
          <div className="search-bar">
            <div className="searching-header">
              <h6>Search Jobs</h6>
            </div>

            {/* <div className="search-form">
              <Form>
                <Row className="mb-3">
                  <Col lg={3}>
                    <Form.Label>KeyWord</Form.Label>
                    <Form.Group controlId="formGridEmail">
                      <Form.Control type="text" placeholder="developer" />
                    </Form.Group>
                  </Col>

                  <Col lg={3}>
                    <Form.Label>Functional Area</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">HR Dept</option>
                      <option value="2">IT Industry</option>
                      <option value="3">Mechanical</option>
                      <option value="4">Electrical</option>
                      <option value="5">Sales</option>
                      <option value="6">Marketing</option>
                    </Form.Select>
                  </Col>
                  <Col lg={3}>
                    <Form.Label>Experience</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="<=1year">{`<= 1 year`}</option>
                      <option value="2year">2 year</option>
                      <option value="3year">3 year +</option>
                      <option value="5year+">5 year +</option>
                      <option value="8year+">8 year +</option>
                      <option value="10year+">10 year +</option>
                      <option value="15year+">15 year +</option>
                    </Form.Select>
                  </Col>
                  <Col lg={3}>
                    <div className="action-btns">
                      <Button  type="submit">
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div> */}

          </div>
        </div>
        <div className="jobs-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Jobs</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Posted On</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>HR Recruiter</td>
                <td>Greater Noida</td>
                <td>2.5 lac to 3 lac</td>
                <td>23-7-2023</td>
              </tr>
              <tr>
                <td>Sr. java Developer</td>
                <td>Gurugram</td>
                <td>12lac to 15 lac</td>
                <td>20-7-203</td>
              </tr>
              <tr>
                <td>jr python developer</td>
                <td>Hyderabad</td>
                <td>10lac to 12 lac</td>
                <td>19-7-2023</td>
              </tr>
              <tr>
                <td>HR Recruiter</td>
                <td>Greater Noida</td>
                <td>2.5 lac to 3 lac</td>
                <td>23-7-2023</td>
              </tr>
              <tr>
                <td>Sr. java Developer</td>
                <td>Gurugram</td>
                <td>12lac to 15 lac</td>
                <td>20-7-203</td>
              </tr>
              <tr>
                <td>jr python developer</td>
                <td>Hyderabad</td>
                <td>10lac to 12 lac</td>
                <td>19-7-2023</td>
              </tr>
              <tr>
                <td>HR Recruiter</td>
                <td>Greater Noida</td>
                <td>2.5 lac to 3 lac</td>
                <td>23-7-2023</td>
              </tr>
              <tr>
                <td>Sr. java Developer</td>
                <td>Gurugram</td>
                <td>12lac to 15 lac</td>
                <td>20-7-203</td>
              </tr>
              <tr>
                <td>jr python developer</td>
                <td>Hyderabad</td>
                <td>10lac to 12 lac</td>
                <td>19-7-2023</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Footbar />
    </>
  );
};

export default CurrentJob;
