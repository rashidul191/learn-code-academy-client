import React, { useState } from "react";
import "./HomeCourse.css";
import { Link } from "react-router-dom";
import fakeData from "../fakeData/fakeData";
import AllCourses from "../AllCourses/AllCourses";

const HomeCourse = () => {
  const first6 = fakeData.slice(0, 3);
  const [courseFirst6, setCourseFirst6] = useState(first6);


const [cart, setCart] = useState([]);
  const handleAddCourse = (courseHandle) => {
    console.log("add courses", courseHandle);

    const newCart = [...cart, courseHandle];
    setCart(newCart);
  };

  return (
    <section id="home-Course">
      <div className="container py-5">
        <h3 className="popular-course-head ">*** Popular Courses ***</h3>
        <div className="row">
          {courseFirst6.map((cs) => (
            <AllCourses showCourseCart={true} handleAddCourse={handleAddCourse} course={cs}></AllCourses>
          ))}
        </div>
       

        <div className="text-center pt-5">
          <Link to="/courses">
            <button className="btn btn-lg btn-success">
              Browse All Courese
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCourse;
