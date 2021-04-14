import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppoinment from "../BookAppointment/BookAppoinment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar />
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <BookAppoinment date={selectedDate}></BookAppoinment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
