import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo/Logo.png";
import paymentIcons from "../../../Images/SSLCommerz-Pay-With-logo.jpg";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section id="footer">
      <div className="bg-dark text-light">
        <div className="container  py-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
              <Link to="/">
                {" "}
                <img className="footer-logo-size img-fluid" src={logo} alt="" />
              </Link>
              <div className="pt-4">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon> Official: lca@gmail.com <br />
                  <FontAwesomeIcon icon={faPhoneSquareAlt}></FontAwesomeIcon> Helpline: 0123456789 <br /> (Available: 09:00am to 11:00pm)
                </p>
              </div>
              <div>
                <span className="pr-2">
                  <a target="_blank" href="https://www.facebook.com/groups/learncodeacademy">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </span>
                <span className="p-2">
                  <a target="_blank" href="https://www.linkedin.com/in/rashidul191/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </span>
                <span className="p-2">
                  <a target="_blank" href="https://twitter.com/Rashidul191">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>
                </span>
                <span className="pl-2">
                  <a target="_blank" href="https://www.instagram.com/rashidul191.r/">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 pb-3">
              <ul class="navbar-nav ">
                <li class="nav-item active">
                  <Link class="nav-link mr-2" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link  mr-2" to="/instructor">
                    Instructor
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link mr-2" to="/terms-of-service">
                    Terms Of Service
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link  mr-2 " to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-12 pb-3">
              <img className="pay-with img-fluid rounded" src={paymentIcons} alt="Pay With" />
            </div>
          </div>
          <div className="text-center  mx-5">
            <p className="pt-3"> Copyright &copy; LCA {new Date().getFullYear()} Rashidul Islam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
