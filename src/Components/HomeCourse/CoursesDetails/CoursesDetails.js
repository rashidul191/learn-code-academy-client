import React from 'react';
import Footer from '../../ShareFile/Footer/Footer';
import Navbar from '../../ShareFile/Navbar/Navbar';
import './CoursesDetails.css';

const CoursesDetails = () => {
    return (
        <section id="courses-Details">
            <Navbar></Navbar>
            <div className="container">
                <p className="lead">Home/Course/CoursesDetails</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <h1>vides</h1>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <h1>product detaisls</h1>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <h1>Site bar</h1>
                    </div>
                </div>
            </div>

            <div className="container">

            </div>
            <Footer></Footer>
        </section>
    );
};

export default CoursesDetails;