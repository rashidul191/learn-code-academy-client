import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../ShareFile/Footer/Footer";
import Navbar from "../../ShareFile/Navbar/Navbar";
import "./SellCourses.css";
import teacherProfile from "../../../Images/logo/profile-icon.png";
import { UserContext } from "../../../App";
import thumbale from '../../../Images/thumbale.jpg';

const SellCourses = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <section id="sell-Courses">
      <Navbar></Navbar>
      <div className="container pb-5">
        <div className="profile-bg-img">
          <div className="text-center profile-bg-color my-5 py-5">
            {loggedInUser.photo ? (
              <img className="user-profile img-fluid" src={loggedInUser.photo} alt="Image" />
            ) : (
              <img className="user-profile img-fluid" src={teacherProfile} alt="User Images" />
            )}
            <h3 className="mt-3">{loggedInUser.name}</h3>
          </div>
        </div>
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

                <li class="nav-item active style-navbar">
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

        <div>
          <h3 className="text-info display-4 py-4">Sell Courses</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/* <Link to="/lesson"> */}
              <img className="img-fluid" src={thumbale} alt="" />
            {/* </Link> */}
            <div class="course-Body-Style">
              {/* <Link to="/lesson"> */}
                <h5 class="">Compleat Web Programming Course</h5>
              {/* </Link> */}
              <hr />
              <p>
                Create By : <span>Rashidul Islam</span>
                <br /> Enrolled : 191 Students
                <br /> Lesson : 45
                <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐
              </p>
              <hr />
              {/* <div className="row">
                <Link to="/lesson" className="">
                  <button className="btn btn-success mr-3">Go To Lesson</button>
                </Link>
                <Link to="/course-review" className="">
                  <button className="btn btn-success ml-3 ">Go To Review</button>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6"></div>
          <div className="col-lg-4 col-md-6"></div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default SellCourses;
