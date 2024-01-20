import React from "react";

function ErrorAlert({ error }) {
  console.log("Error received in ErrorAlert:", error);
  return (
    error && (
      <div className="alert alert-danger m-2">{error}</div>
    )
  );
}


export default ErrorAlert;
