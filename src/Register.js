import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    // alert(JSON.stringify(data));
    console.log(data);
  };

  // console.log(errors);

  return (
    <React.Fragment>
      <form
        className="col-md-4 col-md-offset-4 container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <label htmlFor="exampleInputFirstName1">First Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName1"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
            name="firstname"
            ref={register({
              required: "First Name is required",
              maxLength: 80
            })}
          />
          {errors.firstname && (
            <p style={{ color: "red" }}>{errors.firstname.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFirstName1">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName1"
            aria-describedby="emailHelp"
            placeholder="Enter Last Name"
            name="lastname"
            ref={register({
              required: "Last Name is required",
              maxLength: 100
            })}
          />
          {errors.lastname && (
            <p style={{ color: "red" }}>{errors.lastname.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            ref={register({
              required: "Email is required",
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            ref={register({
              required: "Password required",
              minLength: { value: 8, message: "Too short password" }
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        <div className="form-actions">
          <input id="inputsubmit" type="submit" className="btn btn-primary" />
        </div>
        <div className="form-actions">
          <small>
            Already have an email?
            <NavLink to="/login"> Log in</NavLink>
          </small>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
