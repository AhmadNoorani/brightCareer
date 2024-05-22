import React from "react";
import Header from "../Header";
import Footbar from "../Footbar";
import "../../stylesheets/JobSeeker/jobSeeker.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const JobSeeker = () => {
  return (
    <>
      <Header />
      <div id="jobSeeker">
       
        <div className="jobSeeker-content">
        <div className="jobSeeker-heading">
          <h2>Job-Seekers</h2>
        </div>
          <Card>
            <Card.Body>
              <Card.Title><h4>Current Jobs</h4></Card.Title>
              <Card.Text>
              Yes Tech Solutions Inc. maintains a Current Jobs database for the 
              aspiring professionals. The Current Jobs has been the point of 
              initiation for several bright careers as many companies have found 
              perfect candidates for their vacancies.
              </Card.Text>
              <Link id="card-btn" to="/job-seeker/current-jobs">See Current Jobs</Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title><h4>Upload CV</h4></Card.Title>
              <Card.Text>
              Post Your Resumes with Yes Tech Solutions Inc. and be automatically 
              eligible for the best jobs across the industrial sector. Do Post 
              Your Resume and prepare for the upward ascent in the professional 
              environment as your corporate life begins..!
              </Card.Text>
              <Link id="card-btn" to="/job-seeker/upload-cv">Upload Your CV</Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title><h4>Notices</h4></Card.Title>
              <Card.Text>
              Terms And Condition You are deemed to have read and agreed to the 
              following terms, conditions and use of service. Recruitment of 
              personnel will be effective through "YTS Inc". "YTS Inc" a leading 
              recruitment agency, provides its clients the most effective solutions
               with a committed approach. Our team of consultants personally 
               handles every step of each assignment following the best ethical
              standards.
              </Card.Text>
              <Link id="card-btn" to="/job-seeker/notice">More Info</Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title><h4>Trainings</h4></Card.Title>
              <Card.Text>
              YTS INC. is not only a manpower outsourcing company but also a 
              training provider. We offer extensive training on different levels 
              and domains, mentioned a few - Personality development Interview 
              tips and questionnaire Grooming and soft skill training and more...
              To know more about our training feel free to call or drop an email 
              at ahmed@yestechsoft.com, or if you like to visit our office for face
              to face job discussion.
              </Card.Text>
              <Link id="card-btn" to="/job-seeker/training">More Info</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footbar />
    </>
  );
};

export default JobSeeker;
