import React, { useState } from "react";
import "./CourseDetails.css";
import {  useParams } from "react-router";
import Footer from "../ShareFile/Footer/Footer";
import Navbar from "../ShareFile/Navbar/Navbar";
import fakeData from "../fakeData/fakeData";
import AllCourses from "../AllCourses/AllCourses";

const CourseDetails = () => {
  const { courseID } = useParams();
  const course = fakeData.find((cs) => cs.courseID === courseID);

//   console.log(course);

 
  return (
    <section id="courses-Details">
      <Navbar></Navbar>
      <div className="container">
        <p className="lead pt-3">Home / Course / CoursesDetails</p>
        <hr />
      </div>
      <div>
        {/* <h1>{courseID} CourseDetails comming soon......</h1> */}
        <AllCourses showCourseCart={false} course={course}></AllCourses>
      </div>
      
      
      <Footer></Footer>
    </section>
  );
};

export default CourseDetails;
