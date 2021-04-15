import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Footer from "../../ShareFile/Footer/Footer";
import Navbar from "../../ShareFile/Navbar/Navbar";
import "./TeacherNotification.css";

const TeacherNotification = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section id="teacher-Notification">
      <Navbar></Navbar>
      <div className="container">
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
                <li class="nav-item active ">
                  <Link class="nav-link mx-5 user-link " to="/teacher-dashboard">
                    Dashboard
                  </Link>
                </li>

                <li class="nav-item active ">
                  <Link class="nav-link mx-5 user-link" to="/sell-courses">
                    Sell Course
                  </Link>
                </li>

                <li class="nav-item active style-navbar ">
                  <Link class="nav-link mx-5 user-link " to="/teacher-notifications">
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
        <div>
          <h3 className="text-info display-4 py-4">Notifications</h3>
        </div>
        <div>
          <p className="lead">Notification Comming soon...</p>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default TeacherNotification;
