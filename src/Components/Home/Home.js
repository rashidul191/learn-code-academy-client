import React from 'react';
import HomeCourse from '../HomeCourse/HomeCourse';
import Footer from '../ShareFile/Footer/Footer';
import Navbar from '../ShareFile/Navbar/Navbar';
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
            <Footer></Footer>
        </section>
    );
};

export default Home;