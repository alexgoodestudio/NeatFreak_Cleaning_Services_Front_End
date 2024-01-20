import React from "react";
import Request from "./Request"
import Offer from "./Offer";
import Dashboard from "./Dashboard";
import Reviews from "./Reviews";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Subscribe from "./Subscribe";
import OneTime from "./OneTime";
import Moving from "./Moving";
import Recurring from "./Recurring";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route exact path="/request/:estimate_id/edit">
        <EditForm />
      </Route> */}
      <Route path="/recurring" element={<Recurring />} />
      <Route path="/moving" element={<Moving />} />
      <Route path="/onetime" element={<OneTime />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/ourservices" element={<Offer />} />
      <Route path="/request" element={<Request />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
