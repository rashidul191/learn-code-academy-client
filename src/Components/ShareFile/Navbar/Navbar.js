import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../Images/logo/Logo.png";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <section id="nav-Bar " className="navbar-style sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light  bg-light">
        <div className="container">
          <Link class="navbar-brand" to="/">
            <img className="logo-size img-fluid rounded " src={logo} alt="Logo Here" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto text-center">
              <li class="nav-item active mx-4">
                <Link class="nav-link link-style" to="/home">
                  Home{" "}
                </Link>
              </li>
              <li class="nav-item active mx-4">
                <Link class="nav-link link-style" to="/courses">
                  Courses
                </Link>
              </li>
              <li class="nav-item active mx-4">
                <Link class="nav-link link-style" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item active mx-4">
                <Link class="nav-link  link-style" to="/our-blogs">
                  Our Blogs
                </Link>
              </li>

              <li class="nav-item active ">
                {loggedInUser.email ? (
                  <div>                    
                    <Link to="/user-dashboard">
                      <button className="btn btn-info mx-4">Daeshboard</button>
                    </Link>
                    <button className="btn btn-danger " onClick={() => setLoggedInUser({})}>
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link class="nav-link " to="/sign-in">
                    <button className="btn btn-info ml-4">Sign In</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
