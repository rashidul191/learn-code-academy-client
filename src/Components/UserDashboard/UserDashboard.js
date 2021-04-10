import React from 'react';
import Footer from '../ShareFile/Footer/Footer';
import Navbar from '../ShareFile/Navbar/Navbar';
import './UserDashboard.css';
import UserNavbar from './UserNavbar/UserNavbar';
import userProfile from '../../Images/logo/profile-icon.png';

const UserDashboard = () => {
    return (
        <section id="user-Dashboard">
            <Navbar></Navbar>
            <div className="container pb-5">
                <div className="profile-bg-img">
                    <div className="text-center profile-bg-color my-5 py-5">
                        <img className="user-profile img-fluid" src={userProfile} alt="User Images" />
                        <h3>Name: Rashidul Islam</h3>
                    </div>
                </div>
                <div>
                    <UserNavbar></UserNavbar>
                </div>
                <div>
                <h3 className="text-info display-4 py-4">Dashboard</h3>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 col-md-12">
                        <div className="bg-light m-4 p-4">
                           
                            <div className="row ">
                                <h5 className="ml-4">Full Name: </h5>
                                <p className="ml-auto mb-0 lead">Md Rashidul Islam</p>
                                <hr />
                            </div>
                            <hr />

                            <div className="row">
                                <h5 className="ml-4">Email: </h5>
                                <p className="ml-auto mb-0 lead">rashidul.191cse.gub@gmail.com</p>
                                <hr />
                            </div>
                            <hr />

                            <div className="row">
                                <h5 className="ml-4">Phone Number: </h5>
                                <p className="ml-auto mb-0 lead"></p>
                                <hr />
                            </div>
                            <hr />

                            <div className="row">
                                <h5 className="ml-4">Address: </h5>
                                <p className="ml-auto mb-0 lead"></p>
                                <hr />
                            </div>
                            <hr />

                            <div className="row">
                                <h5 className="ml-4">Facebook: </h5>
                                <p className="ml-auto mb-0 lead"></p>
                                <hr />
                            </div>
                            <hr />

                            <div className="row">
                                <h5 className="ml-4">Linked in: </h5>
                                <p className="ml-auto mb-0 lead"></p>
                                <hr />
                            </div>
                            <hr />

                            <div className="row">
                                <h5 className="ml-4">Twitter: </h5>
                                <p className="ml-auto mb-0 lead"></p>
                                <hr />
                            </div>
                            <hr />

                            <div className="row">
                                <h5 className="ml-4">About: </h5>
                                <p className="ml-auto mb-0 lead"></p>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default UserDashboard;