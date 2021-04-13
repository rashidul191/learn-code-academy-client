import React, { useContext } from 'react';
import Footer from '../../ShareFile/Footer/Footer';
import Navbar from '../../ShareFile/Navbar/Navbar';
import './UserNotification.css';
import userProfile from '../../../Images/logo/profile-icon.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const UserNotification = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
            <Navbar></Navbar>
            <div className="container pb-5">
                <div className="profile-bg-img">
                    <div className="text-center profile-bg-color my-5 py-5">
                    {loggedInUser.photo?<img className="user-profile img-fluid" src={loggedInUser.photo} alt="User Images" />
                    :<img className="user-profile img-fluid" src={userProfile} alt="User Images" />}
                        <h3>{loggedInUser.name}</h3>
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

                                <li class="nav-item active ">
                                    <Link class="nav-link mx-5 user-link" to="/my-course">My Course</Link>
                                </li>

                                <li class="nav-item active style-navbar">
                                    <Link class="nav-link mx-5 user-link" to="/user-notifications">Notifications</Link>
                                </li>

                                <li class="nav-item active">
                                    <Link class="nav-link mx-5 user-link" to="/purchase-history">Purchase History</Link>
                                </li>
                                <li class="nav-item active ">
                                <button className="btn btn-danger ml-5" onClick={() => setLoggedInUser({})}>LogOut</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <h3 className="text-info display-4 py-4">Notifications</h3>
                </div>
                <div>
                    <p className="lead">Notification Comming soon...</p>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default UserNotification;