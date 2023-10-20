import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BookingPage from "./Pages/BookingPage";
import NavBar from "./components/NavBar";
import ConfirmedBooking from "./Pages/ConfirmedBooking";

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}


