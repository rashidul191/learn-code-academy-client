import React, { useContext } from 'react';
import Footer from '../../ShareFile/Footer/Footer';
import Navbar from '../../ShareFile/Navbar/Navbar';
import userProfile from '../../../Images/logo/profile-icon.png';
import './PurchaseHistory.css';
import { Link } from 'react-router-dom';
import thumbale from '../../../Images/thumbale.jpg';
import { UserContext } from '../../../App';

const PurchaseHistory = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section id="purchase-History">
            <Navbar></Navbar>
            <div className="container pb-3">
                <div className="profile-bg-img">
                    <div className="text-center profile-bg-color my-5 py-5">
                       {loggedInUser.photo?<img src={loggedInUser.photo} alt="Image"/>
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

                                <li class="nav-item active ">
                                    <Link class="nav-link mx-5 user-link" to="/user-notifications">Notifications</Link>
                                </li>

                                <li class="nav-item active style-navbar">
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
                    <h3 className="text-info display-4 py-4">Purchase History</h3>
                </div>
                <div>
                    <table class="table ">
                        <thead>
                            <tr>
                                <th scope="col">S/L</th>
                                <th scope="col">Image</th>
                                <th scope="col">Product Details</th>
                                <th scope="col">Check Admin</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><img className="img-fluid purchase-img-size" src={thumbale} alt="Images" /></td>
                                <td>Compleate Web programming Course</td>
                                <td className="btn btn-danger">Pendding</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default PurchaseHistory;