import { Button } from "@material-ui/core";
import React from "react";
import { useLocalContext } from "../../context/context";
import "./style.css";

const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div className="login">
      <img
        src="https://play-lh.googleusercontent.com/w0s3au7cWptVf648ChCUP7sW6uzdwGFTSTenE178Tz87K_w1P1sFwI6h1CLZUlC2Ug"
        alt="Classroom"
        className="login__logo"
      />
      <Button variant="contained" color="default" onClick={() => login()}>
        Login Now!
      </Button>
    </div>
  );
};

export default Login;

//<h1>{localStorage.getItem("name")}</h1>
