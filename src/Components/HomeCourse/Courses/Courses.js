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
            <h1 className="text-center text-light bg-info py-5">Courses</h1>
            <div className="container  py-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6  my-2">
                        <div className="course-Body">
                            <Link to="/courses-details"><img className="img-fluid" src={thumbale} alt="" /></Link>
                            <div class="course-Body-Style">
                                <Link to="/courses-details"><h5 class="">Compleat Web Programming Course</h5></Link>
                                <hr />
                                <p>Create By <span>Rashidul Islam</span>
                                    <br /> Enrolled 191
                                   <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐</p>
                                <hr />
                                <div className="row">
                                    <h4>$123.99</h4>
                                    <Link to="/courses-details">
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
                                <p>Create By <span>Rashidul Islam</span>
                                    <br /> Enrolled 191
                                   <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐</p>
                                <hr />
                                <div className="row">
                                    <h4>$123.99</h4>
                                    <Link to="/courses-details">
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
                                <p>Create By <span>Rashidul Islam</span>
                                    <br /> Enrolled 191
                                   <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐</p>
                                <hr />
                                <div className="row">
                                    <h4>$123.99</h4>
                                    <Link to="/courses-details">
                                        <button className="btn btn-primary">Enroll Course</button></Link>

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