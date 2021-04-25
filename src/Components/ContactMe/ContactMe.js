import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Footer from "../ShareFile/Footer/Footer";
import Navbar from "../ShareFile/Navbar/Navbar";
import "./ContactMe.css";

const ContactMe = () => {
  document.title = "LCA | Contact Us";

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("contact us  form submit done", data);

    history.push("/");
    alert("Contact Us Form Submit Successfully.");
  };

  return (
    <section id="Contact-Me">
      <Navbar></Navbar>
      <div className="container mt-3">
        <p className="lead">Home / Contact Us</p>
      </div>
      <h3 className="bg-info display-4 mt-3 py-5 text-center text-light">Contact Us</h3>
      <div className="container">
        <div className="row text-center py-5">
          <div className="col-md-4">
            <h3>Call Us</h3>
            <p className="lead">+880 123456789 (24/7)</p>
          </div>
          <div className="col-md-4">
            <h3>Email Here</h3>
            <p className="lead">lca@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h3>Address</h3>
            <p className="lead">Bangladesh</p>
          </div>
        </div>
        <div className="message-form pb-5">
          <h2 className="text-center pb-5">Message us for any Query</h2>
          <div className="row">
            <div className="col-lg-2 col-md-12"></div>
            <div className="col-lg-8 col-md-12">
              <div className="message-form-body">
                <form onSubmit={handleSubmit(onSubmit)} action="">
                  <div className="mb-2">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="name"
                      //defaultValue={test}
                      placeholder="Your Name"
                      {...register("name", { required: true })}
                    />                   
                    {errors.name && <span className="error">Name is required</span>}
                  </div>

                  <div className="mb-2">
                    <input
                      class="form-control form-control-lg"
                      type="email"
                      name="email"
                      //defaultValue={test}
                      placeholder="name@example.com"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span className="error">Email is required</span>}
                  </div>

                  <div className="mb-2">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="phoneNumber"
                      //defaultValue={test}
                      placeholder="Phone Number"
                      {...register("phoneNumber", { required: true })}
                    />
                    {errors.phoneNumber && <span className="error">Phone Number is required</span>}
                  </div>

  
                  <div class="form-group">
                    <textarea class="form-control form-control-lg" name="message" rows="4" placeholder="Message"  {...register("message", { required: true })}></textarea>
                    {errors.message && <span className="error">Message is required</span>}
                  </div>
                  <div class="form-group ">
                    <input className="btn btn-success btn-lg btn-block " type="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default ContactMe;
