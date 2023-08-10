import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      <button type="submit">{props.button}</button>
    </form>
  );
}

export default Login;
