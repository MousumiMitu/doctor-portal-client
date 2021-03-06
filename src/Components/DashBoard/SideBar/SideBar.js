import React, { useContext } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <div>
          <li>
            <Link to="/allPatients" className="text-white">
              <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
            </Link>
          </li>
          <li>
            <Link to="/allPatients" className="text-white">
              <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
            </Link>
          </li>
          <li>
            <Link to="/prescriptions" className="text-white">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
            </Link>
          </li>
          <li>
            <Link to="/addDoctor" className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
            </Link>
          </li>
          <li>
            <Link to="/doctor/setting" className="text-white">
              <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
            </Link>
          </li>
        </div>
        <div>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
