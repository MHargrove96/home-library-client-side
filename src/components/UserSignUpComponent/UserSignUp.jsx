import React, { useState, useEffect } from "react";

import { Box, TextField, Button } from "@mui/material";
import classes from "./UserSignUp.module.css";
const addUserURL = "http://localhost:4001/user/usersignup";

function UserSignUp() {
  const [body, setBody] = useState({
    first_name: "",
    last_name: "",
    birthDate: "",
    user_name: "",
    user_password: "",
    email: ""
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
    console.log("In the handle submit funtion");
    fetch(addUserURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(res => console.log(res));
    //have to imp a err catch still____________
  };

  return (
    <Box
      className={classes.formContainer}
      component="form"
      noValidate
      autoComplete="off"
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
        // label="Age"
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
        className={classes.signUpBtn}
        variant="contained"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default UserSignUp;
