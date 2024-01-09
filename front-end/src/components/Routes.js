import React from "react";
import Request from "./Request"
import Offer from "./Offer";
import Dashboard from "./Dashboard";
import Reviews from "./Reviews";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Subscribe from "./Subscribe";
import Products from "./Products";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<Products/>} />
      <Route path="/subscribe" element={<Subscribe/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/reviews" element={<Reviews/>} />
      <Route path="/ourservices" element={<Offer/>} />
      <Route path="/request" element={<Request/>} />
      <Route path="/" element={<Dashboard/>} />
    </Routes>
  );
}

export default AppRoutes;
