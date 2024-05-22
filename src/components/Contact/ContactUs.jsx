import React , {useEffect} from "react";
import "../../stylesheets/ContactUs/contactus.css";
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

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors , isSubmitSuccessful},
  } = useForm();
  console.log("errors", errors);

  useEffect(() => {
    if(formState.isSubmitSuccessful){
      reset({
        firstName: "",
        lastName:"",
        email:"",
        state:"",
        city:"",
        pincode:"",
        additionalInfo:"",
        file:"",
        mobNum:"",
      })
    }
  }, [formState, reset]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div id="contact-us">
        <div className="contact-us-heading">
          <h3>Contact Us</h3>
        </div>

        <Container>
          <Row>
            <Col lg={4}>
              <div className="contact-us-text">
                <h5>Bright Career</h5>
                <span className="contact-us-info">
                  <FaUser color="#005878" />
                  <p>Mr. Ahmad Raza Noorani</p>
                </span>
                <span className="contact-us-info">
                  <FaLocationArrow color="#005878" />
                  <p>New Alipore, Kolkata, West Bengal - 700053, India</p>
                </span>
                <span className="contact-us-info">
                  <FaMobile color="#005878" />
                  <p>+91--8240428903</p>
                </span>
                <span className="contact-us-info">
                  <FaEnvelope color="#005878" />
                  <p>ahmed@brightcareer.com</p>
                </span>
                <span className="contact-us-info">
                  <FaDesktop color="#005878" />{" "}
                  <p>http://www.brightcareer.com/</p>
                </span>
              </div>
            </Col>

            <Col lg={8}>
              <div className="contact-us-form">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col lg={6} xs={12}>
                    <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                   >
                     <Form.Label><span className="red-text">*</span>First Name</Form.Label>
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
                      <Form.Label><span className="red-text">*</span>Last Name</Form.Label>
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
                      <Form.Label><span className="red-text">*</span>Email address</Form.Label>
                      <Form.Control type="email"
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
                      })} />
                       <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <p>{message}</p>}
                      />
                    </Form.Group>
                    </Col>
                   
                    <Col lg={6} sm={6} xs={12}> <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label><span className="red-text">*</span>Mobile Number</Form.Label>
                      <Form.Control type="text"
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
                      })} />
                       <ErrorMessage
                        errors={errors}
                        name="mobNum"
                        render={({ message }) => <p>{message}</p>}
                      /> 
                    </Form.Group> </Col>
                
                    <Col lg={4} xs={12}> 
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label><span className="red-text">*</span>State</Form.Label>
                      <Form.Control type="text"
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
                       })} />
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
                      <Form.Label><span className="red-text">*</span>City</Form.Label>
                      <Form.Control type="text" 
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
                      })} />
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
                      <Form.Label><span className="red-text">*</span>PinCode</Form.Label>
                      <Form.Control type="text"
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
                       })} />
                        <ErrorMessage
                         errors={errors}
                         name="pincode"
                         render={({ message }) => <p>{message}</p>}
                       />
                    </Form.Group>
                    </Col>
                    
                  </Row>

                  <Form-Group>
                  <Form.Label><span className="red-text">*</span>Enquiry For</Form.Label>
                  <FormSelect aria-label="enquiry for" name="enquiry" {...register("enquiry",{
                    required:{
                      value:true,
                      message:'enquiry is required'
                    }
                  })}>
                    <option>Get a job</option>
                    <option>Post a job</option>
                  </FormSelect>
                  </Form-Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Additional Information</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                    name="additionalInfo"
                    {...register("additionalInfo",{
                    required:{
                      value:false,
                    }
                  })}/>
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Attach Resume</Form.Label>
                    <Form.Control accept="application/pdf,application/msword" type="file"
                     name="file"
                     {...register("file",{
                     required:{
                       value:false,
                       message:'Resume file is required'
                     }
                   })} />
                    <span className="muted-text">acceptale files: only ".pdf" & ".doc"</span>
                    
                  </Form.Group>

                  <div className="action-btn">
                    <Button type="submit" variant="success">
                      Submit
                    </Button>{" "}
                    <Button variant="primary" onClick={() => {
                      reset({
                        firstName: "",
                        lastName:"",
                        email:"",
                        state:"",
                        city:"",
                        pincode:"",
                        additionalInfo:"",
                        file:"",
                        mobNum:"",
                      })
                    }}>Reset</Button>
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

export default ContactUs;
