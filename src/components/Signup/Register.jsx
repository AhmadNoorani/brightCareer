import React, {useEffect} from 'react';
import '../../stylesheets/Signup/login.css';
import Header from "../Header";
import Footbar from "../Footbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from 'react-router-dom';

const Register = () => {
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
            fullName:"",
            email: "",
            password:"",
          })
        }
      }, [formState, reset]);
    
      const onSubmit = (data) => {
        console.log(data);
        window.alert("you are logged in successfully")
      };
  return (
    <>
    <Header/>
    <div id="login"> 
        <Container>
        <div className="login-form">
        <div className="login-heading">
          <h3>Register</h3>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
            <Col lg={12}>
                <Form.Group
                      className="mb-3" 
                    >
                      <Form.Label><span className="red-text">*</span>FullName</Form.Label>
                      <Form.Control type="text"
                      name="email"
                      {...register("fullName", {
                        required: {
                          value: true,
                          message: "fullName is required" ,
                        },
                      })} />
                       <ErrorMessage
                        errors={errors}
                        name="fullName"
                        render={({ message }) => <p>{message}</p>}
                      />
                    </Form.Group>
                </Col>
                <Col lg={12}>
                <Form.Group
                      className="mb-3" 
                    >
                      <Form.Label><span className="red-text">*</span>Email address</Form.Label>
                      <Form.Control type="text"
                      name="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "email is required",
                        },
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/,
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
                <Col lg={12}>
                    <Form.Group
                      className="mb-3"
                     
                    >
                      <Form.Label><span className="red-text">*</span>Password</Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "last name is required",
                          },
                          minLength: {
                            value: 8,
                            message: "min lentgh is 8",
                          },
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/,
                            message: "please fill valid format of password , atleast one lower case letter , one uppercase letter , one numeric value and one special character ",
                            // 
                          },
                        
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ message }) => <p>{message}</p>}
                      />
                    </Form.Group>
                    </Col>
                    <div className="action-btn">
                    <Button type="submit" variant="success">
                      Submit
                    </Button>
                    <div className="sign-button">
                    <Link to="/login">Already have an account</Link>
                    </div>
                  </div>
            </Row>
        </Form>
        </div>
        </Container>
    </div>
    <Footbar/>
    </>
  )
}

export default Register
