import React, { useState } from "react";
import Appointments from "./Appointments";
import "bootstrap/dist/css/bootstrap.min.css";


const Login = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const checkPw = (event) => {
    event.preventDefault(); 
    const answer = document.getElementById("password").value;

    if (answer === "qw") {
      setIsVerified(true);
    } else {
      setError("Sorry, that's not it");
    }
  };

  return (
    <>
      {isVerified ? (
        <Appointments />
      ) : (
        <form onSubmit={checkPw} className="mt-5 d-flex align-items-center justify-content-center">
          <label for="password" className=" me-3">Password: </label>
          <input id="password" name="password" type="password" />
          <button type="submit" className=" btn btn-secondary ms-1">Login</button>
          {error && <p>{error}</p>}
        </form>
      )}
 
    </>
  );
};

export default Login;
