import React from 'react';
import EnrollStudents from '../EnrollStudents/EnrollStudents';
// import HomeCourse from '../HomeCourse/HomeCourse';
import TestHomeCourse from '../HomeCourse/TestHomeCourse/TestHomeCourse';
import TestTeacher from '../HomeCourse/TestHomeCourse/TestTeacher/TestTeacher';
import OurBlog from '../OurBlog/OurBlog';
import Footer from '../ShareFile/Footer/Footer';
import Navbar from '../ShareFile/Navbar/Navbar';
import StudentReview from '../StudentReview/StudentReview';
// import Teacher from '../Teacher/Teacher';
import Header from './Header/Header';
import './Home.css';

const Home = () => {
    document.title = "Learn Code Academy";
    
    return (
        <section id="home" className="bg-light">
            <Navbar></Navbar>
            <Header></Header>
            <TestHomeCourse></TestHomeCourse>
            {/* <HomeCourse></HomeCourse> */}
            {/* <Teacher></Teacher> */}
            <TestTeacher></TestTeacher>
            <EnrollStudents></EnrollStudents>
            <StudentReview></StudentReview>
            <OurBlog></OurBlog>
            <Footer></Footer>
        </section>
    );
};

export default Home;