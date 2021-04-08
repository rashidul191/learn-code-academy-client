import React from 'react';
import './HomeCourse.css';
import thumbale from '../../Images/thumbale.jpg';
import { Link } from 'react-router-dom';

const HomeCourse = () => {
    return (
        <section id="Home-Course">
            <div className="container py-5">
                <h3 className="popular-course-head ">*** Popular Courses ***</h3>
                <div class="card-deck ">
                    <div class="card ">
                        <img src={thumbale} class="card-img-top" alt="img here" />
                        <div class="card-body">
                            <h5 class="card-title">Compleat Web Programming Course</h5>
                            <p>Create By <span>Rashidul Islam</span>
                                <br /> Enrolled 191
                           <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐</p>
                            <div className="">
                                <h4>$123.99</h4>
                            </div>
                        </div>
                    </div>

                    <div class="card ">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card ">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="text-center py-4">
                    <Link to="/courses"><button className="btn btn-success">Browse All Courese
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                    </svg>
                    </button></Link>
                </div>

            </div>
        </section>
    );
};

export default HomeCourse;