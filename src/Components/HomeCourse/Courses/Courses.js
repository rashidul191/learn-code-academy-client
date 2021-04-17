import React, { useState } from "react";
import Footer from "../../ShareFile/Footer/Footer";
import Navbar from "../../ShareFile/Navbar/Navbar";
import "./Courses.css";
import fakeData from "../../fakeData/fakeData";
import AllCourses from "../../AllCourses/AllCourses";
import Cart from "../../Cart/Cart";
import { addToDatabaseCart } from "../../../utilities/databaseManager";

const Courses = () => {
  const allCourses = fakeData.slice(0, 100);
  // console.log(allCourses);
  const [courses, setCourses] = useState(allCourses);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (courseHandle) => {
    console.log("add courses", courseHandle);
    const newCart = [...cart, courseHandle];
    setCart(newCart);

const sameCourse = newCart.filter (cs => cs.courseID === courses.courseID);
const count = sameCourse.length;
    addToDatabaseCart(courses.courseID, count);
  };

  return (
    <section id="Courses">
      <Navbar cart={cart}></Navbar>
      <div className="container mt-3">
        <p className="lead">Home / Course</p>
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
      <div>
        <h3 className="text-center text-light bg-info display-4 mt-3 py-5">All Courses</h3>
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
      {/* add to cart demo */}
      <div>
        <h3>This is Cart</h3>
        <p>Order Summary: {cart.length}</p>

        {/* <CheckOut cart={cart}></CheckOut> */}
       
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Courses;
