import React from 'react';
import './Header.css';
import headerImg from '../../../Images/header-img.png';

const Header = () => {
    return (
        <section id="header">
            <div className="container text-light">
                <div className="row py-5">
                    <div className="col-lg-6 col-md-12">
                        <h6 className="text-center">Welcome to Learn Code Acedemy</h6>
                        <h1 className="display-4">Build 10 professional projects while learning.</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores temporibus, porro ipsam molestiae quam facilis vero, dolorem, excepturi at accusantium sed quos. Ab recusandae expedita repellendus qui quo amet?</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="img-fluid d-none d-lg-block" src={headerImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;