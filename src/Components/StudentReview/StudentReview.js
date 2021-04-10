import React from 'react';
import './StudentReview.css';
import student from '../../Images/Rashidul.jpg'

const StudentReview = () => {
    return (
        <section id="student-Review">
            <div className="container text-center py-5">
                <h4 className="">***Students Review***</h4>
                <div id="carouselExampleFade" class="carousel slide " data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>                       
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row text-center">
                                <div className="col-lg-6 col-md-12">

                                    <img src={student} class="d-block " alt="..." />
                                    <h4>Rashidul Islam</h4>
                                    <p className="lead ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <img src={student} class="d-block " alt="..." />
                                    <h4>Rashidul Islam</h4>
                                    <p className="lead ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <img src={student} class="d-block " alt="..." />
                                    <h4>Rashidul Islam</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <img src={student} class="d-block " alt="..." />
                                    <h4>Rashidul Islam</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <img src={student} class="d-block " alt="..." />
                                    <h4>Rashidul Islam</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <img src={student} class="d-block " alt="..." />
                                    <h4>Rashidul Islam</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StudentReview;