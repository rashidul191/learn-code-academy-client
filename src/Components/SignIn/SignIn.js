import React from 'react';
import Footer from '../ShareFile/Footer/Footer';
import Navbar from '../ShareFile/Navbar/Navbar';
import './SignIn.css';

const SignIn = () => {
    return (
        <section id="sign-In">
            <Navbar></Navbar>
            <div className="sign-in-img">
                <div className="sign-in-bg">
                    <div className="container py-4">
                        <h3 className="display-4 text-light pb-3">Sign In</h3>
                        <div>
                            <div className="row">
                                <div className="col-lg-6 col-md-10 sign-body-bg">
                                    <form action="">
                                        <div className="form-group">
                                            <label className="lead" htmlFor="name">Name:</label>
                                            <input type="text" className="form-control form-control-lg " name="name" id="name" placeholder="Your Name"  required/>
                                        </div>

                                        <div className="form-group">
                                            <label className="lead" htmlFor="email">Email:</label>
                                            <input type="email" className="form-control form-control-lg " name="email" id="email" placeholder="name@example.com" required/>
                                        </div>

                                        <div className="form-group">
                                            <label className="lead" htmlFor="password">Password:</label>
                                            <input type="password" className="form-control form-control-lg " name="password" id="password" placeholder="Your password" required/>
                                        </div>
                                        <div className="row mx-1">
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                            </div>
                                            <div className="ml-auto">
                                                <a href="">Create a New Account</a>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input type="submit" value="Submit" className="btn btn-success btn-block btn-lg" />
                                        </div>
                                    </form>
                                    <div>
                                        <p className="lead or-text-style text-center text-primary" htmlFor="">Or</p>
                                        
                                    </div>
                                    <div>
                                        <button>Google With Sign In</button>
                                    </div>
                                    <br/>
                                    <div>
                                        <button>Facebook With Sing IN</button>
                                    </div>
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

export default SignIn;