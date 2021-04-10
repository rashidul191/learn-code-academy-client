import React from 'react';
import Footer from '../../ShareFile/Footer/Footer';
import Navbar from '../../ShareFile/Navbar/Navbar';
import './Courses.css';
import thumbale from '../../../Images/thumbale.jpg'
import { Link } from 'react-router-dom';
// import ShippingCard from '../../ShippingCard/ShippingCard';

const Courses = () => {
    return (
        <section id="Courses">
            <Navbar></Navbar>
            <div className="container mt-3">
                <p className="lead">Home / Course</p>
            </div>
            <h3 className="text-center text-light bg-info display-4 mt-3 py-5">Courses</h3>
            <div className="container  py-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6  my-2">
                        <div className="course-Body">
                            <Link to="/courses-details"><img className="img-fluid" src={thumbale} alt="" /></Link>
                            <div class="course-Body-Style">
                                <Link to="/courses-details"><h5 class="">Compleat Web Programming Course</h5></Link>
                                <hr />
                                <p>Create By : <span>Rashidul Islam</span>
                                    <br /> Enrolled : 191 Students
                                    <br /> Lesson : 45
                                   <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐</p>
                                <hr />
                                <div className="row mx-3">
                                    <h4>$123.99</h4>
                                    <Link to="/courses-details" className="ml-auto">
                                        <button className="btn btn-primary" >Enroll Course</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-2">
                        <div className="course-Body">
                            <Link to="/courses-details"><img className="img-fluid" src={thumbale} alt="" /></Link>
                            <div class="course-Body-Style">
                                <Link to="/courses-details"><h5 class="">Compleat Web Programming Course</h5></Link>
                                <hr />
                                <p>Create By : <span>Rashidul Islam</span>
                                    <br /> Enrolled : 191 Students
                                    <br /> Lesson : 45
                                   <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐</p>
                                <hr />
                                <div className="row mx-3">
                                    <h4>$123.99</h4>
                                    <Link to="/courses-details" className="ml-auto">
                                        <button className="btn btn-primary">Enroll Course</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-2">
                        <div className="course-Body">
                            <Link to="/courses-details"><img className="img-fluid" src={thumbale} alt="" /></Link>
                            <div class="course-Body-Style">
                                <Link to="/courses-details"><h5 class="">Compleat Web Programming Course</h5></Link>
                                <hr />
                                <p>Create By : <span>Rashidul Islam</span>
                                    <br /> Enrolled : 191 Students
                                    <br /> Lesson : 45
                                   <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐</p>
                                <hr />
                                <div className="row mx-3">
                                    <h4>$123.99</h4>
                                    <Link to="/courses-details" className="ml-auto">
                                        <button className="btn btn-primary">Enroll Course</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Courses;