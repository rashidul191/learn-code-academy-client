import React, { useContext } from "react";
import "./CoursesReview.css";
import { UserContext } from "../../../App";
import Navbar from "../../ShareFile/Navbar/Navbar";
import Footer from "../../ShareFile/Footer/Footer";
import { Link } from "react-router-dom";

const CoursesReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section id="courses-Review">
      <Navbar></Navbar>
      <div>
          <h3 className="display-4 text-center bg-info text-light py-4 my-4">Review</h3>
      </div>

      <div className="container">
          <div className="row">
              <div className="col-md-6 col-sm-12">
                  <h1>course information</h1>
              </div>
              <div className="col-md-6 col-sm-12">
                  <h1>review form</h1>
              </div>
          </div>
      </div>

      <Footer></Footer>
    </section>
  );
};

export default CoursesReview;
