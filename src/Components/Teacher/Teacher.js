import React from 'react';
import './Teacher.css';
import teacherImg from '../../Images/Rashidul.jpg';

const Teacher = () => {
    return (
        <section id="Teacher">
            <div className="container text-center">
                <h3 className="text-primary py-4">***Our Expert Teacher***</h3>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <img className="img-fluid" src={teacherImg} alt="" />
                        <h5>Md Rashidul Islam</h5>
                        <h6>Web Designer</h6>
                        <p className="lead py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non ipsum facilis nesciunt aperiam distinctio in praesentium,</p>
                      
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <img className="img-fluid" src={teacherImg} alt="" />
                        <h5>Md Rashidul Islam</h5>
                        <h6 >Web Designer</h6>
                        <p className="lead py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non ipsum facilis nesciunt aperiam distinctio in praesentium,</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <img className="img-fluid" src={teacherImg} alt="" />
                        <h5>Md Rashidul Islam</h5>
                        <h6 >Web Designer</h6>
                        <p className="lead py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non ipsum facilis nesciunt aperiam distinctio in praesentium,</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <img className="img-fluid" src={teacherImg} alt="" />
                        <h5>Md Rashidul Islam</h5>
                        <h6 >Web Designer</h6>
                        <p className="lead py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta non ipsum facilis nesciunt aperiam distinctio in praesentium,</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teacher;