import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3a4256" }}>
          Your New Smile <br /> Starts here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae est
          saepe sequi officia a nam.
        </p>
        <Link to="/appointment">
          <button className="btn btn-brand">Get APPOINTMENT</button>
        </Link>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
