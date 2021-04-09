import React from 'react';
import EnrollStudents from '../EnrollStudents/EnrollStudents';
import HomeCourse from '../HomeCourse/HomeCourse';
import OurBlog from '../OurBlog/OurBlog';
import Footer from '../ShareFile/Footer/Footer';
import Navbar from '../ShareFile/Navbar/Navbar';
import StudentReview from '../StudentReview/StudentReview';
import Teacher from '../Teacher/Teacher';
import Header from './Header/Header';
import './Home.css';

const Home = () => {
    return (
        <section id="home">
            <Navbar></Navbar>
            <Header></Header>
            <HomeCourse></HomeCourse>
            <Teacher></Teacher>
            <EnrollStudents></EnrollStudents>
            <StudentReview></StudentReview>
            <OurBlog></OurBlog>
            <Footer></Footer>
        </section>
    );
};

export default Home;