import React from "react";
import { Link } from 'react-router-dom';

import classes from "./HeaderNavBar.module.css";

import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";


export default function HeaderNavBar() {
  return (
    <Box className={classes.appBarBox} sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography
            className={classes.navBarTitle}
            variant="h4"
            component={Link}
            to='/'
          >
            Book Nook
          </Typography>
        </Toolbar>
        <p></p>
        <Button className={classes.loginBtn} variant="text" color="inherit" component={Link} to='/login'>
          Login
        </Button>
      </AppBar>
    </Box>
  );
}
