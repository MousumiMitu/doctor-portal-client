import React from "react";
import InfoCart from "../InfoCart/InfoCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn, NY 10003 USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+15638974124",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCart info={info}></InfoCart>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
