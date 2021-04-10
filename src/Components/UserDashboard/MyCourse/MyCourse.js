import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../ShareFile/Footer/Footer';
import Navbar from '../../ShareFile/Navbar/Navbar';
import thumbale from '../../../Images/thumbale.jpg'
import userProfile from '../../../Images/logo/profile-icon.png';
import './MyCourse.css';

const MyCourse = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="container pb-5">
                <div className="profile-bg-img">
                    <div className="text-center profile-bg-color my-5 py-5">
                        <img className="user-profile img-fluid" src={userProfile} alt="User Images" />
                        <h3>Name: Rashidul Islam</h3>
                    </div>
                </div>

                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavUser" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavUser">
                            <ul class="navbar-nav">
                                <li class="nav-item active ">
                                    <Link class="nav-link mx-5 user-link" to="/user-dashboard">Dashboard</Link>
                                </li>

                                <li class="nav-item active style-navbar">
                                    <Link class="nav-link mx-5 user-link" to="/my-course">My Course</Link>
                                </li>

                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/user-notifications">Notifications</Link>
                                </li>

                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/purchase-history">Purchase History</Link>
                                </li>
                                <li class="nav-item active ">
                                    <button className="btn btn-info ml-5">LogOut</button>
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
                        <Link to="/lesson"><img className="img-fluid" src={thumbale} alt="" /></Link>
                        <div class="course-Body-Style">
                            <Link to="/lesson"><h5 class="">Compleat Web Programming Course</h5></Link>
                            <hr />
                            <p>Create By : <span>Rashidul Islam</span>
                                <br /> Enrolled : 191 Students
                                    <br /> Lesson : 45
                                      <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐</p>
                            <hr />
                            <div className=" mx-3">

                                <Link to="/lesson" className="ml-auto">
                                    <button className="btn btn-success btn-lg btn-block" >Go To Lesson</button>
                                </Link>
                            </div>
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

export default MyCourse;