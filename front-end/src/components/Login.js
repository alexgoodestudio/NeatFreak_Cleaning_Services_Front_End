import React, { useState } from "react";
import EmployeeHome from "./EmployeeHome";
import "bootstrap/dist/css/bootstrap.min.css";

const Password = process.env.REACT_APP_Password;

const Login = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const checkPw = (event) => {
    event.preventDefault(); 
    const answer = document.getElementById("password").value.trim();

    if (answer === Password) {
      setIsVerified(true);
    } else {
      setError("Sorry, that's not it");
    }
  };

  return (
    <>
      {isVerified ? (
        <EmployeeHome />
      ) : (
        <form onSubmit={checkPw} className="mt-5 d-flex align-items-center justify-content-center">
          <label htmlFor="password" className=" me-3">Password: </label>
          <input id="password" name="password" type="password" />
          <button type="submit" className=" btn btn-secondary ms-1">Login</button>
          {error && <p>{error}</p>}
        </form>
      )}
 
    </>
  );
};

export default Login;
