import React from "react";
import Footer from "../../ShareFile/Footer/Footer";
import Navbar from "../../ShareFile/Navbar/Navbar";
import "./CoursesDetails.css";
import instractor from "../../../Images/Rashidul.jpg";
import { Link, useHistory } from "react-router-dom";

const CoursesDetails = () => {

  const history = useHistory();
  const handleCheckOut = () => {
    history.push("/check-out");
  };
  return (
    <section id="courses-Details">
      <Navbar></Navbar>
      <div className="container">
        <p className="lead pt-3">Home / Course / CoursesDetails</p>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7 my-4">
            <div className="row py-4 video-product-detaisl-body">
              <div className="col-lg-6 col-md-12 ">
                <div className="video-iframe">
                  <iframe
                    width="320"
                    height="180"
                    src="https://www.youtube.com/embed/i8rllkq2BW4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <h5 class="">Compleat Web Programming Course</h5>
                <hr />
                <p>
                  Create By : <span>Rashidul Islam</span>
                  <br /> Enrolled : 191 Students
                  <br /> Lesson : 45
                  <br /> Students Retting 4.7 ⭐⭐⭐⭐⭐
                </p>
                <hr />
              </div>
            </div>
            <div className="py-4">
              <div className="about">
                <h3>About Course </h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veniam, quia at sit, quidem perferendis reiciendis quas nesciunt
                  dicta ut veritatis nihil adipisci. Reiciendis quaerat et beatae numquam culpa non?
                </p>
              </div>
              <div className="requirements">
                <h3>Requirements</h3>
                <ul className="lead">
                  <li>Complete Web Prgramming Course</li>
                  <li>Computer / Laptop</li>
                  <li>Wifi Speet 10 MBPS</li>
                  <li>Want To Learn More & More</li>
                </ul>
              </div>
              <div className="how-to-add-members">
                <h3>মূলত কাদের জন্য এই কোর্স :</h3>
                <p>
                  যারা ওয়েব ডেভেলপার হতে চায়। যারা একদম শূন্য থেকে শুরু করে শেষ পর্যন্ত ওয়েব ডেভেলপমেন্ট শিখে তারপর ওয়েব ডেভেলপার হিসেবে কোন সফটওয়্যার
                  কোম্পানিতে চাকরি করতে চায়, তাদের জন্য। যারা প্রোগ্রামিং বা ওয়েব ডেভেলপমেন্ট সম্পর্কে তেমন কিছুই জানে না, তাদের জন্য। এমনকি যারা চার
                  বছর CSE পড়েও কিভাবে কি করবে দিশা করতে পারতেছে না, গুছিয়ে তেমন কিছু শিখেনি, তারাও এই কোর্স থেকে কমপ্লিট ওয়েব ডেভেলপমেন্ট শিখে চাকরিতে
                  এপ্লাই করতে পারবে। 😀
                </p>
              </div>
              <div className="how-to-learn-this-course">
                <h3>এই কোর্স থেকে কি কি শিখতে পারবে:</h3>
                <ul>
                  <li>
                    ফটাফট কয়েকটা ভিডিও দেখে HTML, CSS শিখে ফটাফট চমৎকার দুইটা ওয়েবসাইট বানিয়ে ফেলবে। এবং সেগুলার লিংক যেকারো সাথে শেয়ার করে ভাব পেটাতে
                    পারবে।
                  </li>

                  <li>
                    বুটস্ট্রাপ (bootstrap) নামক পপুলার ফ্রেমওয়ার্ক এর খুঁটিনাটি ভাজা ভাজা করে ফেলবে। তারপর সেটা দিয়েও দুইটা ই-কমার্স ওয়েবসাইট বানিয়ে
                    ফেলবে। কি মজা !
                  </li>
                  <li>
                    জাভাস্ক্রিপ্টের ছয়টা মেইন জিনিস, জাভাস্ক্রিপ্ট দিয়ে প্রবলেম সলভিং, ইন্টারভিউ এর প্রশ্ন-উত্তর। এমনকি ES6 দিয়ে তোমার নলেজকে
                    যোগোপযোগী করে তুলবে।
                  </li>
                  <li>
                    জাভাস্ক্রিপ্ট দিয়ে ব্যাংকের deposit, withdraw এর লাইভ ক্যালকুলেশন থাকছে। তারপরই থাকছে ই-কমার্স সাইটের শপিং কার্টের হিসাব-নিকাশ
                    করার সিস্টেম।
                  </li>
                  <li>
                    সার্ভার সম্পর্কে ধারণা, REST API কল করে JSON ডাটা লোড করা, node, mongodb (database), chrome devtool দিয়ে ডিবাগিং সম্পর্কে ধারণা
                    দেয়া হবে।
                  </li>
                  <li>
                    কোর্সের সবচেয়ে গুরুত্বপূর্ণ দিক হচ্ছে দুনিয়ার সবচেয়ে বেশি চাকরি যে জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক এ (React), সেটা দিয়ে পরিপূৰ্ণ একটা
                    ওয়েবসাইট একদম শূন্য থেকে শেষ পর্যন্ত দেখানো হয়েছে।
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* site bar section start */}
          <div className="col-lg-4 col-md-5 my-4 pt-3  site-bar">
            <div className="py-4">
              <h1 className="text-center">$123.99</h1>
            </div>
            <div>
              <button className=" btn btn-primary btn-block" onClick={handleCheckOut}>
                Enroll Course
              </button>
            </div>
            <div className="pt-3">
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Category:</th>
                    <td>Web Development</td>
                  </tr>
                  <tr>
                    <th scope="row">Modiul:</th>
                    <td>61</td>
                  </tr>
                  <tr>
                    <th scope="row">Videos:</th>
                    <td>420</td>
                  </tr>
                  <tr>
                    <th scope="row">Duration:</th>
                    <td>120:12 Hour</td>
                  </tr>
                  <tr>
                    <th scope="row">Quizzes:</th>
                    <td>No</td>
                  </tr>
                  <tr>
                    <th scope="row">Level:</th>
                    <td>Basic</td>
                  </tr>
                  <tr>
                    <th scope="row">Language:</th>
                    <td>Bangla</td>
                  </tr>
                  <tr>
                    <th scope="row">Certificate:</th>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div>
              <h4 className="text-center text-success">Emergency</h4>
              <p className="lead">Call : 0123456789</p>
              <p className="lead">Email: lca@gmail.com</p>
            </div>
          </div>
        </div>
        {/* site bar section end */}

        {/* Instractor sction  start*/}
        <div className="row pb-4">
          <div className="col-lg-6 col-md-12 instractor">
            <h5>Instractor</h5>
            <div className="row ">
              <div className="ml-4">
                <img className="img-fluid instractor-Img" src={instractor} alt="Instractor" />
              </div>
              <div className="ml-4">
                <h4>Name: Md Rashidul Islam</h4>
                <h6 className="text-success">Web Developer </h6>
                <div className="row ml-4">
                  {/* socail icon here */}
                  <p>F Y T I</p>
                </div>
              </div>
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque inventore veritatis quam provident, ex saepe quas alias delectus, dolorum
              minus nisi, magnam quibusdam laudantium enim labore! Dicta ullam sapiente at?
            </p>
          </div>
        </div>
        {/* Instractor sction  end*/}

        {/* course content sction start*/}
        <div className="course-content pb-5">
          <h3>Course Content</h3>

          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h6 class="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  HTML A to Z
                </h6>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <ol className="m-0">
                    <li>Introduction HTML</li>
                    <li>HTML Header</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingTwo">
                <h6 class="mb-0" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  CSS A to Z
                </h6>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                  <ol className="m-0">
                    <li>Introduction CSS</li>
                    <li>CSS Class</li>
                    <li>Css Id</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h6 class="mb-0" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Bootstrap A to Z
                </h6>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  <ol className="m-0">
                    <li>Introduction Bootstrap</li>
                    <li>Boostrap Button</li>
                    <li>Boostrap Input</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* course content sction start*/}
      </div>
      <Footer></Footer>
    </section>
  );
};

export default CoursesDetails;
