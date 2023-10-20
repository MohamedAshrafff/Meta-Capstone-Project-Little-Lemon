import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import BlankPage from "./Pages/BlankPage";
import ConfirmedBooking from "./Pages/ConfirmedBooking";

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<BlankPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/orderOnline" element={<BlankPage />} />
        <Route path="/menu" element={<BlankPage />} />
        <Route path="/login" element={<BlankPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}


