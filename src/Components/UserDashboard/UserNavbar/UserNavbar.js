import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css';

const UserNavbar = () => {
    return (
        <section id="user-Navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavUser" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavUser">
                    <ul class="navbar-nav">
                        <li class="nav-item active style-navbar">
                            <Link class="nav-link mx-5 user-link" to="/user-dashboard">Dashboard</Link>
                        </li>

                        <li class="nav-item active">
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
        </section>
    );
};

export default UserNavbar;