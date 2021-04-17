import React, { useState } from "react";
import Footer from "../../ShareFile/Footer/Footer";
import Navbar from "../../ShareFile/Navbar/Navbar";
import "./Courses.css";
import thumbale from "../../../Images/thumbale.jpg";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData/fakeData";
import { library } from "@fortawesome/fontawesome-svg-core";
import AllCourses from "../../AllCourses/AllCourses";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import CheckOut from "../../CheckOut/CheckOut";

const Courses = () => {
  const allCourses = fakeData.slice(0, 100);
  // console.log(allCourses);
  const [courses, setCourses] = useState(allCourses);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (courseHandle) => {
    console.log("add courses", courseHandle);

    const newCart = [...cart, courseHandle];
    setCart(newCart);
  };

  return (
    <section id="Courses">
      <Navbar></Navbar>
      <div className="container mt-3">
        <p className="lead">Home / Course</p>
      </div>
      <div>
        <h3 className="text-center text-light bg-info display-4 mt-3 py-5">Courses</h3>
      </div>

      <div className="container  py-5">
        <div className="row">
          {courses.map(
            (cs) => (
              <AllCourses showCourseCart={true} handleAddCourse={handleAddCourse} course={cs}></AllCourses>
            ) //courses is map
            //props name = course
            // cs is call props
            //AllCourses is on components.
          )}
        </div>
      </div>
      {/* cart demo */}
      <div>
        <h3>This is Cart</h3>
        <p>Order Summary: {cart.length}</p>
        <CheckOut cart={cart}></CheckOut>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Courses;
