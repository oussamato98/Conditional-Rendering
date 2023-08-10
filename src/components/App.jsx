import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? (
        <Form button="Login" isregistred={userIsRegistered} />
      ) : (
        <Form button="Register" />
      )}
    </div>
  );
}

export default App;
