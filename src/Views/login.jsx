import React, { Fragment,useState } from "react";
import "../style/custom.css";
import "../index.css";
import logo from "../style/hd-tickets-49032-removebg-preview.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Header from "../component/Header";
import { useForm } from "react-hook-form";
import {toast} from  'react-toastify'
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const [login , setLogin] = useState(true)
  const onSubmit = (data) => {
    setLogin(true)
    if(login == true){
      toast.success('Login successfully')
      navigate('/home')
    }
    else{
      toast.error('login failed')
    }
  };
  return (
    <Fragment>
      <Header />
      <Container fluid>
        <div className="lcard">
          <Card>
            <Card.Body className="card-alignment">
              <Card.Title className="">Sign In to Login</Card.Title>
              <Card.Text>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="form-control"
                      name="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>Email is Required</span>}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span>Password is Required</span>}
                  </Form.Group>
                  <button className="secondary login-btn"> 
                  Login
                  </button>
                  
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </Fragment>
  );
}

export default Login;
