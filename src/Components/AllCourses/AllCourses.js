import React from "react";
import { Link } from "react-router-dom";
import "./AllCourses.css";

const AllCourses = (props) => {
  //props is received in AllCourses.
  console.log(props.course); //props name = course
  const { courseAbout, courseThumbnail, courseTitle, price, createdBy, enrolled, introVideoLink, lesson } = props.course;
  return (
    <section>
      {/* <div>
        <img src={props.course.courseThumbnail} alt="" />
        <h4>{courseTitle}</h4>
        <p>{price}</p>
      </div> */}

     
        <div className="row">
          <div className="col-lg-4 col-md-6  my-2">
            <div className="course-Body">
              <Link to="/courses-details">
                <img className="img-fluid" src={courseThumbnail} alt="" />
              </Link>

              <div class="course-Body-Style">
                <Link to="/courses-details">
                  <h5 class="">{courseTitle}</h5>
                </Link>
                <hr />

                <p>
                  Create By : <span>{createdBy}</span>
                  <br /> Enrolled : {enrolled} Students
                  <br /> Lesson : {lesson}
                  <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐
                </p>
                <hr />

                <div className="row mx-3">
                  <h4>${price}</h4>
                  <Link to="/courses-details" className="ml-auto">
                    <button className="btn btn-primary">Enroll Course</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </section>
  );
};

export default AllCourses;
