import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../Images/logo/Logo.png';

const Navbar = () => {
    return (
        <section id="nav-bar">
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link class="navbar-brand" to="/">
                            <img className="logo-size img-fluid rounded " src={logo} alt="Logo Here"/>
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active mx-5">
                                    <Link class="nav-link link-style" to="/home">Home </Link>
                                </li>
                                <li class="nav-item active mx-5">
                                    <Link class="nav-link link-style" to="/course">Course</Link>
                                </li>
                                <li class="nav-item active mx-5">
                                    <Link class="nav-link link-style" to="/contact-me">Contact Me</Link>
                                </li>
                                <li class="nav-item active ml-5">
                                    <Link class="nav-link  link-style" to="/blog" >Our Blog</Link>
                                </li>

                                <li class="nav-item active ml-5">
                                    <Link class="nav-link " to="/sign-in" > <button className="btn btn-info">Sign In</button> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        </section>
    );
};

export default Navbar;