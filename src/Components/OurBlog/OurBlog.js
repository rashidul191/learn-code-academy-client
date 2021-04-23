import React from "react";
import { Link } from "react-router-dom";
import "./OurBlog.css";
import blogerImg from "../../Images/Rashidul.jpg";

const OurBlog = () => {
  return (
    <section id="our-Blog" className="bg-light">
      <div className="container  py-5">
        <h3 className="text-success pb-3 text-center">***Our Latest Blog***</h3>
        <div className="row ">
          <div className="col-lg-4 col-md-6">
            <div>
              <a className="" target="_blank" href="https://rashidul-191cse-gub.medium.com/react-js-some-concepts-method-discretion-adc98b3433e5">
                <img className="img-fluid" src="https://i.imgur.com/saKMUYF.jpg" alt="Image" />
                <h5 className="mt-2">React.js some concepts method discretion.</h5>
              </a>
              <hr />
            </div>
            <div>
              <div className="row">
                <div>
                  <img className="ml-3 img-fluid booger-Img" src={blogerImg} alt="Image" />
                </div>
                <div>
                  <h6 className="ml-3 mt-2">Md Rashidul Islam</h6>
                  <p className="ml-3">Date: Nov 4,2020</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="col-lg-4 col-md-6"></div>
          <div className="col-lg-4 col-md-6"></div>
        </div>
        <div className="text-center">
          <Link to="/our-blogs">
            <button className="btn btn-lg btn-success mt-4">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
