import React from 'react';
import Footer from '../../ShareFile/Footer/Footer';
import Navbar from '../../ShareFile/Navbar/Navbar';
import './OurBlogDetails.css';
import blogerImg from '../../../Images/Rashidul.jpg';

const OurBlogDetails = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="container mt-3">
                <p className="lead">Home / Our Blogs</p>
            </div>
            <div>
                <h3 className="bg-info py-5 mt-3 text-center text-light display-4">Our Latest Blogs</h3>
            </div>

            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <a className="" target="_blank" href="https://rashidul-191cse-gub.medium.com/react-js-some-concepts-method-discretion-adc98b3433e5">
                                <img className="img-fluid" src="https://miro.medium.com/max/402/1*CHyFATmXWkMOSEOVhzD5Cw.jpeg" alt="Image" />
                                <h5 className="mt-2">React.js some concepts metohd descreteion.</h5>
                            </a>
                            <hr />
                        </div>
                        <div>
                            <div className="row">
                                <img className="ml-3 img-fluid booger-Img" src={blogerImg} alt="Image" />
                                <h6 className="ml-3 mt-2">Name: Md Rashidul Islam</h6>
                            </div>
                            <p className="">Date: Nov 4,2020</p>
                            <hr />
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

export default OurBlogDetails;