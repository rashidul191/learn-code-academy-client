import React from "react";
import "./Teacher.css";
import teacherImg from "../../Images/Rashidul.jpg";
import { faFacebookSquare, faGithubSquare, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Teacher = () => {
  return (
    <section id="Teacher">
      <div className="container text-center">
        <h3 className="text-primary py-4">***Our Expert Teacher***</h3>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <img className="img-fluid" src={teacherImg} alt="" />
            <h5>Md Rashidul Islam</h5>
            <h6>Web Designer</h6>
            <p className="lead py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non ipsum facilis nesciunt aperiam distinctio in praesentium,
            </p>
            <div className="row mb-3 icon-position">
              <div className="mx-3 ">
                <FontAwesomeIcon  icon={faFacebookSquare}></FontAwesomeIcon>
              </div>
              <div className="mx-3 ">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
              </div>
              <div className="mx-3 ">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </div>
              <div className="mx-3 ">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="img-fluid" src={teacherImg} alt="" />
            <h5>Md Rashidul Islam</h5>
            <h6>Web Designer</h6>
            <p className="lead py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non ipsum facilis nesciunt aperiam distinctio in praesentium,
            </p>
            <div className="row mb-3 ">
              <div className="mx-3 ">
                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
              </div>
              <div className="mx-3 ">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
              </div>
              <div className="mx-3 ">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </div>
              <div className="ml-3 ">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="img-fluid" src={teacherImg} alt="" />
            <h5>Md Rashidul Islam</h5>
            <h6>Web Designer</h6>
            <p className="lead py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non ipsum facilis nesciunt aperiam distinctio in praesentium,
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="img-fluid" src={teacherImg} alt="" />
            <h5>Md Rashidul Islam</h5>
            <h6>Web Designer</h6>
            <p className="lead py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non ipsum facilis nesciunt aperiam distinctio in praesentium,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
