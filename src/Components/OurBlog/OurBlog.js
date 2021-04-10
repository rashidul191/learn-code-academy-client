import React from 'react';
import { Link } from 'react-router-dom';
import './OurBlog.css';

const OurBlog = () => {
    return (
        <section id="our-Blog">
          <div className="container text-center py-5">
            <h3 className="text-success">***Our Latest Blog***</h3>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis facere dolorem cupiditate animi non labore aperiam voluptas. Nulla, ullam dicta impedit nobis sint ducimus dignissimos, alias eveniet natus quos facilis!</p>
        <Link to="/our-blogs"><button className="btn btn-lg btn-success mt-4">Learn More</button></Link> 
            {/* <div className="row">
                <div className="col-lg-4 col-md-12"> </div>
                <div className="col-lg-4 col-md-12"></div>
                <div className="col-lg-4 col-md-12"></div>
            </div> */}
            </div>
          
        </section>
    );
};

export default OurBlog;