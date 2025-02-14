import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import TravelGuide from "../pages/TravelGuide";
import Transfer from "../pages/Transfer";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/tavel-guide" element={<TravelGuide />} />
      <Route path="/transfer" element={<Transfer/>} />
      <Route path="/contact-us" element={<Contact/>} />
    </Routes>
  );
};

export default Routers;
