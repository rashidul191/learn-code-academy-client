import React from "react";
import "./TestCourse.css";
import icon_1 from "../../../../Images/icons/icon1.png";
import icon_2 from "../../../../Images/icons/icon2.png";
import icon_3 from "../../../../Images/icons/icon3.png";
import Navbar from "../../../ShareFile/Navbar/Navbar";
import Footer from "../../../ShareFile/Footer/Footer";
import { Link } from "react-router-dom";

const TestCourse = () => {
  return (
    <section id="test-Course">
      <Navbar></Navbar>
      <div className="container">
        <div className="py-5">
          <div>
            <h1 className="text-center">*** Courses ***</h1>
          </div>

          <div className="row ">
            <div className="col-lg-4 col-md-12 card py-3">
              <div>
                <img className="img-fluid" src="https://i.ytimg.com/vi/d35dfSwBTNY/maxresdefault.jpg" alt="Course Img" />
                <h3 className="pt-3">HTML Bangal Turorial </h3>
              </div>
              <hr />
              <div>
                <div className="row text-center">
                  <div className="col-md-4 ">
                    <img src={icon_1} alt="icon" />
                    <h3>3</h3>
                    <p>Month Required</p>
                  </div>
                  <div className="col-md-4">
                    <img src={icon_2} alt="icon" />
                    <h3>9999</h3>
                    <p>Enrolled</p>
                  </div>
                  <div className="col-md-4">
                    <img src={icon_3} alt="icon" />
                    <h3>Yes</h3>
                    <p>Certificate</p>
                  </div>
                </div>
                <hr />
                <div className="row text-center">
                  <div className="col-md-4">
                    <small>50 Videos</small>
                  </div>
                  <div className="col-md-4 ">
                    <small>10 Quizes</small>
                  </div>
                  <div className="col-md-4 ">
                    <small>2 Assignment</small>
                  </div>
                </div>
                <hr />
                <div className="row mx-3">
                  <div>
                    <h1>৳ 199</h1>
                  </div>
                  <div className="ml-auto">
                      <Link to="/courses-details">
                      <button className="btn btn-success btn-lg">Enroll Now</button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 py-3">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <p>
                    ফটাফট কয়েকটা ভিডিও দেখে HTML, CSS শিখে ফটাফট চমৎকার দুইটা ওয়েবসাইট বানিয়ে ফেলবে। এবং সেগুলার লিংক যেকারো সাথে শেয়ার করে ভাব পেটাতে
                    পারবে।
                  </p>
                  <hr />
                  <p>
                    জাভাস্ক্রিপ্টের ছয়টা মেইন জিনিস, জাভাস্ক্রিপ্ট দিয়ে প্রবলেম সলভিং, ইন্টারভিউ এর প্রশ্ন-উত্তর। এমনকি ES6 দিয়ে তোমার নলেজকে
                    যোগোপযোগী করে তুলবে।
                  </p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <p>
                    বুটস্ট্রাপ (bootstrap) নামক পপুলার ফ্রেমওয়ার্ক এর খুঁটিনাটি ভাজা ভাজা করে ফেলবে। তারপর সেটা দিয়েও দুইটা ই-কমার্স ওয়েবসাইট বানিয়ে
                    ফেলবে। কি মজা !
                  </p>
                  <hr />
                  <p>
                    জাভাস্ক্রিপ্ট দিয়ে ব্যাংকের deposit, withdraw এর লাইভ ক্যালকুলেশন থাকছে। তারপরই থাকছে ই-কমার্স সাইটের শপিং কার্টের হিসাব-নিকাশ
                    করার সিস্টেম।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default TestCourse;
