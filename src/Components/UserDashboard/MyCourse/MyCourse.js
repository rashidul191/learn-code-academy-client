import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../ShareFile/Footer/Footer";
import Navbar from "../../ShareFile/Navbar/Navbar";
import thumbale from "../../../Images/thumbale.jpg";
import userProfile from "../../../Images/logo/profile-icon.png";
import "./MyCourse.css";
import { UserContext } from "../../../App";

const MyCourse = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section>
      <Navbar></Navbar>
      <div className="container pb-5">
        <div className="profile-bg-img">
          <div className="text-center profile-bg-color my-5 py-5">
            {loggedInUser.photo ? (
              <img className="user-profile img-fluid" src={loggedInUser.photo} alt="" />
            ) : (
              <img className="user-profile img-fluid" src={userProfile} alt="User Images" />
            )}
            <h3>{loggedInUser.name}</h3>
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
                  <Link class="nav-link mx-5 user-link" to="/user-dashboard">
                    Dashboard
                  </Link>
                </li>

                <li class="nav-item active style-navbar">
                  <Link class="nav-link mx-5 user-link" to="/my-course">
                    My Course
                  </Link>
                </li>

                <li class="nav-item active">
                  <Link class="nav-link mx-5 user-link" to="/user-notifications">
                    Notifications
                  </Link>
                </li>

                <li class="nav-item active">
                  <Link class="nav-link mx-5 user-link" to="/purchase-history">
                    Purchase History
                  </Link>
                </li>
                <li class="nav-item active ">
                  <button className="btn btn-danger ml-5" onClick={() => setLoggedInUser({})}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div>
          <h3 className="text-info display-4 py-3">Enrolled Courses</h3>
        </div>


         <div className="row">
          <div className="col-lg-4 col-md-6">
            <Link to="/lesson">
              <img className="img-fluid" src="https://i.ytimg.com/vi/d35dfSwBTNY/maxresdefault.jpg" alt="" />
            </Link>
            <div class="course-Body-Style">
              <Link to="/lesson">
                <h5 class="">HTML Bangal Turorial</h5>
              </Link>
              <hr />
              <p>
                Create By : <span>Anisul Islam</span>
                <br /> Enrolled : 99 Students
                <br /> Lesson : 50
                <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐
              </p>
              <hr />
              <div className="row">
                {/* <Link to="/lesson" className="">
                  <button className="btn btn-success mr-3">Go To Lesson</button>
                </Link>
                <Link to="/course-review" className="">
                  <button className="btn btn-success ml-3 ">Go To Review</button>
                </Link> */}
                 <a target="_blank" href="https://www.youtube.com/playlist?list=PLgH5QX0i9K3oHBr5dsumGwjUxByN5Lnw3" className="">
                  <button className="btn btn-success mr-3">Go To Lesson</button>
                </a>
              </div>
            </div>
          </div>
       
        </div> 
      </div>
      <Footer></Footer>
    </section>
  );
};

export default MyCourse;
