import React, { useState } from "react";
import Appointments from "./Appointments";
import Footer from "./Footer"

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
        <form onSubmit={checkPw}>
          <input id="password" name="password" type="password" />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      )}
 
    </>
  );
};

export default Login;
