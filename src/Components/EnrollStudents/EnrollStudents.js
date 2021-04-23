import React from 'react';
import './EnrollStudents.css';

const EnrollStudents = () => {
    return (
        <section id="enroll-Students" className="bg-light">
            <div className="container text-center">
                <div className="row py-5">
                    <div className="col-lg-3 col-md-6">
                        <h1>5</h1>
                        <p className="lead">EXPERT INSTUCTORS</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h1>9999</h1>
                        <p className="lead">STUDENTS</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h1>9999</h1>
                        <p className="lead">TOTAL ENROLLED</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h1>1</h1>
                        <p className="lead">TOTAL COURSE</p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default EnrollStudents;