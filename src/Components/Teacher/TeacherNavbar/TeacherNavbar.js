import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./TeacherNavbar.css";

const TeacherNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavUser"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavUser">
          <ul class="navbar-nav">
            <li class="nav-item active style-navbar">
              <Link class="nav-link mx-5 user-link " to="/teacher-dashboard">
                Dashboard
              </Link>
            </li>

            <li class="nav-item active ">
              <Link class="nav-link mx-5 user-link" to="/sell-courses">
                Sell Course
              </Link>
            </li>

            <li class="nav-item active ">
              <Link class="nav-link mx-5 user-link" to="/teacher-notifications">
                Notifications
              </Link>
            </li>

            <li class="nav-item active ">
              <Link class="nav-link mx-5 user-link" to="/add-courses">
                Add Courses
              </Link>
            </li>
            <li class="nav-item active ">
              <button className="btn btn-danger ml-5" onClick={() => setLoggedInUser({})}>
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TeacherNavbar;
