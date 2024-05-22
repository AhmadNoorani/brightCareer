import React, { useEffect } from "react";
import "../../stylesheets/JobSeeker/uploadCv.css";
import Header from "../Header";
import Footbar from "../Footbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import {
  FaUser,
  FaLocationArrow,
  FaEnvelope,
  FaMobile,
  FaDesktop,
} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import FormSelect from "react-bootstrap/esm/FormSelect";

const UploadCv = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  console.log("errors", errors);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        city: "",
        pincode: "",
        keySkills: "",
        file: "",
        graduationDegree: "",
        lakhs: "Lakhs",
        Thousand: "Thousands",
        years: "Years",
        months: "Months",
        mobNum: "",
      });
    }
  }, [formState, reset]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div id="uploadCV">
        <div className="uploadCV-heading">
          <h3>Upload CV</h3>
        </div>

        <Container>
          <Row>
            <Col lg={4}>
              <div className="uploadCV-text">
                <h5>Bright Career</h5>
                <span className="uploadCV-info">
                  <FaUser color="#005878" />
                  <p>Mr. Ahmad Raza Noorani</p>
                </span>
                <span className="uploadCV-info">
                  <FaLocationArrow color="#005878" />
                  <p>New Alipore, Kolkata, West Bengal - 700053, India</p>
                </span>
                <span className="uploadCV-info">
                  <FaMobile color="#005878" />
                  <p>+91--8240428903</p>
                </span>
                <span className="uploadCV-info">
                  <FaEnvelope color="#005878" />
                  <p>ahmed@brightcareer.com</p>
                </span>
                <span className="uploadCV-info">
                  <FaDesktop color="#005878" />{" "}
                  <p>http://www.brightcareer.com/</p>
                </span>
              </div>
            </Col>

            <Col lg={8}>
              <div className="uploadCV-form">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col lg={6} xs={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>First Name
                        </Form.Label>
                        <Form.Control
                          name="firstName"
                          type="text"
                          {...register("firstName", {
                            required: {
                              value: true,
                              message: "first name is required",
                            },
                            minLength: {
                              value: 2,
                              message: "min required length is 2",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="firstName"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={6} xs={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>Last Name
                        </Form.Label>
                        <Form.Control
                          name="lastName"
                          type="text"
                          {...register("lastName", {
                            required: {
                              value: true,
                              message: "last name is required",
                            },
                            minLength: {
                              value: 2,
                              message: "min lentgh is 2",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="lastName"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                

                 <Row>
                    <Col lg={6} xs={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "email is required",
                            },
                            min: {
                              value: 1,
                              message: "put min 1 value",
                            },
                            pattern: {
                              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                              message: "please fill valid format of email",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="email"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={6} sm={6} xs={12}>
                      {" "}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>Mobile Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          {...register("mobNum", {
                            required: {
                              value: true,
                              message: "Mobile Number is required",
                            },
                            minLength: {
                              value: 10,
                              message: "please fill correct mobile number",
                            },
                            maxLength: {
                              value: 10,
                              message: "please fill correct mobile number",
                            },
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "please fill valid format for name",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="mobNum"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>{" "}
                    </Col>

                    <Col lg={4} xs={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>State
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          {...register("state", {
                            required: {
                              value: true,
                              message: "state is required",
                            },
                            minLength: {
                              value: 3,
                              message: "put valid State",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="state"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={4} xs={12}>
                      <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>City
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          {...register("city", {
                            required: {
                              value: true,
                              message: "city is required",
                            },
                            minLength: {
                              value: 3,
                              message: "put valid city",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="city"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={4} xs={12}>
                      <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>PinCode
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          {...register("pincode", {
                            required: {
                              value: true,
                              message: "pincode is required",
                            },
                            minLength: {
                              value: 6,
                              message: "put valid pincode",
                            },
                            manLength: {
                              value: 6,
                              message: "please enter valid pincode",
                            },
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "please fill valid format for pincode",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="pincode"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>Graduation Degree
                        </Form.Label>
                        <Form.Control
                          name="graduationDegree"
                          type="text"
                          {...register("graduationDegree", {
                            required: {
                              value: true,
                              message: "Graduation Degree is required",
                            },
                            minLength: {
                              value: 2,
                              message: "min required length is 2",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="graduationDegree"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={6} xs={12}>
                      <Form.Group>
                        <Form.Label>
                          <span className="red-text">*</span>Current Anuual
                          Salary
                        </Form.Label>
                        <FormSelect
                          aria-label="Default select example"
                          name="lakhs"
                          {...register("lakhs", {
                            required: {
                              value: true,
                              message: "lakhs is required",
                            },
                          })}
                        >
                          <option>Lakhs</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                          <option>8+</option>
                          <option>10+</option>
                          <option>12+</option>
                        </FormSelect>
                      </Form.Group>
                    </Col>
                    <Col lg={6} xs={12}>
                      <Form.Group>
                        <Form.Label>
                          <span id="hidden"> hidden word</span>
                        </Form.Label>
                        <FormSelect
                          aria-label="Default select example"
                          name="Thousand"
                          {...register("Thousand", {})}
                        >
                          <option>Thousands</option>
                          <option>{`< 10`}</option>
                          <option>{`< 20`}</option>
                          <option>{`< 30`}</option>
                          <option>{`< 40`}</option>
                          <option>{`< 50`}</option>
                          <option>{`< 60`}</option>
                          <option>{`< 70`}</option>
                          <option>{`< 80`}</option>
                          <option>{`< 90`}</option>
                          <option>{`< 99`}</option>
                        </FormSelect>
                      </Form.Group>
                    </Col>

                    <Col lg={6} xs={12}>
                      <Form.Group>
                        <Form.Label>
                          <span className="red-text">*</span>Total Experience
                        </Form.Label>
                        <FormSelect
                          aria-label="Default select example"
                          name="years"
                          {...register("years", {
                            required: {
                              value: true,
                              message: "years is required",
                            },
                          })}
                        >
                          <option>Years</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                          <option>8+</option>
                          <option>10+</option>
                          <option>12+</option>
                        </FormSelect>
                      </Form.Group>
                    </Col>
                    <Col lg={6} xs={12}>
                      <Form.Group>
                        <Form.Label>
                          <span id="hidden"> hidden word</span>
                        </Form.Label>
                        <FormSelect
                          aria-label="Default select example"
                          name="months"
                          {...register("months", {
                            required: {
                              value: false,
                              message: "months is required",
                            },
                          })}
                        >
                          <option>Months</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                        </FormSelect>
                      </Form.Group>
                    </Col>

                    <Col lg={12}>
                      {" "}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          <span className="red-text">*</span>Key Skills
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="keySkills"
                          {...register("keySkills", {
                            required: {
                              value: true,
                              message: "Key skills are required",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="keySkills"
                          render={({ message }) => <p>{message}</p>}
                        />
                      </Form.Group>
                    </Col>

                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>
                        <span className="red-text">*</span>Attach Resume
                      </Form.Label>
                      <Form.Control
                        accept="application/pdf,application/msword"
                        type="file"
                        name="file"
                        {...register("file", {
                          required: {
                            value: true,
                            message: "Resume file is required",
                          },
                        })}
                      />
                      <span className="muted-text">
                        acceptale files: only ".pdf" & ".doc"
                      </span>
                    </Form.Group>
                  </Row> 

                  <div className="action-btn">
                    <Button
                      variant="primary"
                      onClick={() => {
                        reset({
                          firstName: "",
                          lastName: "",
                          email: "",
                          state: "",
                          city: "",
                          pincode: "",
                          keySkills: "",
                          file: "",
                          graduationDegree: "",
                          lakhs: "Lakhs",
                          Thousand: "Thousands",
                          years: "Years",
                          months: "Months",
                          mobNum: "",
                        });
                      }}
                    >
                      Reset
                    </Button>
                    <Button type="submit" variant="success">
                      Submit
                    </Button>{" "}
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footbar />
    </>
  );
};

export default UploadCv;

{
  /* <Col lg={12}>
<Form.Label>
  <span className="red-text">*</span>Gender
</Form.Label>
{["radio"].map((type) => (
  <div
    key={`inline-${type}`}
    className="mb-3"
    {...register("gender", {
      required: {
        value: true,
        message: "Gender name is required",
      },
    })}
  >
    <Form.Check
      inline
      label={`Male`}
      name="group1"
      type={type}
      id={`inline-${type}-1`}
      {...register("male", {
     })}
    />
    <Form.Check
      inline
      label={`Female`}
      name="group1"
      type={type}
      id={`inline-${type}-2`}
      {...register("Female", {
     })}
    />
    <ErrorMessage
      errors={errors}
      name="gender"
      render={({ message }) => <p>{message}</p>}
    />
  </div>
))}

</Col> */
}

// {["radio"].map((type) => (
//   <div
//     key={`inline-${type}`}
//     className="mb-3"
//     {...register("gender", {})}
//   >
//     <Form.Check
//       inline
//       label="Male"
//       value="Male"
//       name="group1"
//       type="radio"
//       id={`inline-${type}-1`}
//     />
//     <Form.Check
//       inline
//       label="Female"
//       value="Female"
//       name="group1"
//       type="radio"
//       id={`inline-${type}-2`}
//     />
//   </div>
// ))}
