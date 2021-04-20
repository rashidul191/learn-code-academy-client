import React from 'react';
import Footer from '../ShareFile/Footer/Footer';
import Navbar from '../ShareFile/Navbar/Navbar';
import './AboutUs.css';

const AboutUs = () => {
    document.title = "LCA | About Us";
    return (
        <section id="AboutUs">
            <Navbar></Navbar>
            <div className="container py-5">
                <div>
                    <h3 className="display-4 text-info pb-3">About Us</h3>
                </div>
                <div className="bg-light rounded p-4">
                    <p className="lead">Learn Code একাডেমী (Learn Code Academy) একটি অনলাইন প্লাটফর্ম। পৃথিবীর যে কোন জায়গা থেকে আমাদের কোর্সগুলো করতে পারবেন। আমরা  Learn Code Academy টিম আপনাদের কে সহযোগীতা করতে সর্বদা প্রস্তুত।</p>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default AboutUs;