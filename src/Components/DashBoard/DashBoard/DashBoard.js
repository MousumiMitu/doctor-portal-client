import React, { useContext, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import SideBar from "../SideBar/SideBar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { set } from "react-hook-form";
import { UserContext } from "../../../App";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const DashBoard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  console.log(appointments);

  const handleDateChange = (date) => {
    const localDate = new Date(date).toLocaleDateString();
    setSelectedDate(localDate);

    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: localDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  };
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>
        <div className="col-md-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
