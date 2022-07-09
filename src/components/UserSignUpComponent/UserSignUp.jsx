import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookie from 'cookie'

import { Box, TextField, Button } from "@mui/material";
import classes from "./UserSignUp.module.css";
const addUserURL = "https://librarybackend22.herokuapp.com/user/usersignup";

function UserSignUp({ setState }) {
  let navigate = useNavigate();

  const [body, setBody] = useState({
    first_name: "",
    last_name: "",
    birthDate: "",
    user_name: "",
    user_password: "",
    email: "",
  });

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    console.log("handle change function!", "Name:", name, "value:", value);
    setBody({
      ...body,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("In the handle submit funtion");
    fetch(addUserURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setState(true);
        document.cookie = cookie.serialize("token", data, {
          maxAge: 60 * 60 * 24 * 7,
        });
        navigate("/dashboard", { replace: true });
      });

    //have to imp a err catch still____________
  };

  function validateForm() {
    return (
      body.first_name.length > 0 &&
      body.last_name.length > 0 &&
      body.user_name.length > 0 &&
      body.user_password.length > 8 &&
      body.email.length > 0
    );
  }

  return (
    <Box
      className={classes.formContainer}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        className={classes.firstNameTf}
        required
        label="First Name"
        variant="outlined"
        value={body.first_name}
        name={"first_name"}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className={classes.lastNameTf}
        required
        label="Last Name"
        variant="outlined"
        value={body.last_name}
        name={"last_name"}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className={classes.birthDateTf}
        type="date"
        value={body.birthDate}
        name={"birthDate"}
        onChange={handleChange}
      />
      <TextField
        className={classes.userNameTf}
        required
        label="Username"
        variant="standard"
        value={body.user_name}
        name={"user_name"}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className={classes.passWordTf}
        required
        type="password"
        label="Password"
        variant="standard"
        value={body.user_password}
        name={"user_password"}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        className={classes.emailTf}
        required
        type="email"
        label="email"
        variant="standard"
        value={body.email}
        name={"email"}
        onChange={handleChange}
        fullWidth
      />
      <Button
        type="submit"
        className={classes.signUpBtn}
        variant="contained"
        disabled={!validateForm()}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default UserSignUp;
