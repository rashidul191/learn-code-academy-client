import React from "react";
import "./TestTeacher.css";

const TestTeacher = () => {
  return (
    <section id="test-Teacher">
      <div className="container  py-5">
        <h3 className="text-primary text-center pb-4">***Our Expert Teacher***</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="row ">
            
              <div className="ml-auto">
                <img className="img-fluid teacher-img" src="http://www.studywithanis.com/wp-content/uploads/2018/01/Anis.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 ">
            <h3>Anisur Islam</h3>
            <p className="lead">
              I like to call myself “a passionate computer science teacher”. I always had a wish on my mind that I will do something for the computer
              science students that’s why I made lots of videos on different subjects. My first priority is making the subject more interesting and
              clear so you can feel it and don’t get bore. ?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestTeacher;
