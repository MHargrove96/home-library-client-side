import React, { useEffect, useState } from "react";
import cookie from 'cookie'
import { Box, TextField, Button } from "@mui/material";
import classes from "./LoginForm.module.css";
const loginURL = "http://localhost:4001/auth";

function LoginForm() {
  const [body, setBody] = useState({
    user_name: "",
    user_password: "",
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
    fetch(loginURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      document.cookie = cookie.serialize('token', data, {
        maxAge: 60 * 60 * 24 * 7
      })
    });
    //have to imp a err catch still____________
  };


  return (
    <Box
      className={classes.formContainer}
      component="form"
      noValidate
      autoComplete="off"
    >
      {" "}
      <TextField
        className={classes.userNameTf}
        required
        label="Username"
        variant="standard"
        value={body.user_name}
        name="user_name"
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
        name="user_password"
        onChange={handleChange}
        fullWidth
      />
      <Button
        className={classes.loginBtn}
        variant="contained"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
