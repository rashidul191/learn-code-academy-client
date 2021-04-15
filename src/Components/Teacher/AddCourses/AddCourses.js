import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Footer from "../../ShareFile/Footer/Footer";
import Navbar from "../../ShareFile/Navbar/Navbar";
import "./AddCourses.css";
import teacherProfile from "../../../Images/logo/profile-icon.png";
import { Link } from "react-router-dom";

const AddCourses = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section id="add-Courses">
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
          <h3 className="text-info display-4 py-4">Add Courses</h3>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-12"></div>
          <div className="col-lg-8 col-md-12 bg-light p-5">
            <form action="">
              <div>
                <div className="course-content pb-5">
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h3 class="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          About Course
                        </h3>
                      </div>

                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                          <div className="about-course">
                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Course Title" />
                            </div>

                            <div class="form-group">
                              <div class="input-group form-group mb-3">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon1">
                                    Course Thumbnail
                                  </span>
                                </div>
                                <input class="form-control form-control-lg" type="file" name="" id="" />
                              </div>
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Prices" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h3 class="mb-0" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Details Course
                        </h3>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                          <div className="about-course">
                            <div class="form-group">
                              <div class="row">
                                <div class="col">
                                  <input type="text" class="form-control form-control-lg" placeholder="Category" />
                                </div>
                                <div class="col">
                                  <input type="text" class="form-control form-control-lg" placeholder="Modiul" />
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="row">
                                <div class="col">
                                  <input type="text" class="form-control form-control-lg" placeholder="Videos" />
                                </div>
                                <div class="col">
                                  <input type="text" class="form-control form-control-lg" placeholder="Duration" />
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="row">
                                <div class="col">
                                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Lavel</option>
                                    <option value="1">Beginner</option>
                                    <option value="2">Beginner to Advanced</option>
                                    <option value="3">Beginner to Expert</option>
                                  </select>
                                </div>
                                <div class="col">
                                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Language</option>
                                    <option value="1">Bangla</option>
                                    <option value="2">English</option>
                                    <option value="3">Hindi</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div class="input-group form-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">
                                  Intro Video Link
                                </span>
                              </div>
                              {/* <input  type="file" name="" id="" /> */}
                              <input class="form-control form-control-lg" type="text" placeholder="Link here" />
                            </div>
                            <div class="form-group">
                              <textarea class="form-control form-control-lg" rows="3" placeholder="About Course"></textarea>
                            </div>

                            <div class="form-group">
                              <textarea class="form-control form-control-lg" rows="3" placeholder="Requirements"></textarea>
                            </div>

                            <div class="form-group">
                              <textarea class="form-control form-control-lg" rows="3" placeholder="মূলত কাদের জন্য এই কোর্স"></textarea>
                            </div>

                            <div class="form-group">
                              <textarea class="form-control form-control-lg" rows="3" placeholder="এই কোর্স থেকে কি কি শিখতে পারবে"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h3 class="mb-0" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Course Contents
                        </h3>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                          <div className="course-Contents">
                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Modiul Title" />
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Video Title" />
                            </div>

                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Video Title" />
                            </div>

                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Video Title" />
                            </div>

                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Video Title" />
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Video Title" />
                            </div>

                            <div class="form-group">
                              <input type="text" class="form-control form-control-lg" placeholder="Video Title" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input className="btn btn-success btn-block btn-lg" type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div className="col-lg-2 col-md-12"></div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default AddCourses;
