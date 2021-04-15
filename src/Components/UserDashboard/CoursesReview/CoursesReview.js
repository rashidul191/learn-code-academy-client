import React, { useContext } from "react";
import "./CoursesReview.css";
import { UserContext } from "../../../App";
import Navbar from "../../ShareFile/Navbar/Navbar";
import Footer from "../../ShareFile/Footer/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import thumbnail from "../../../Images/thumbale.jpg";

const CoursesReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section id="courses-Review">
      <Navbar></Navbar>
      <div>
        <h3 className="display-4 text-center bg-info text-light py-4 my-4">Review</h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Images</th>
                  <th scope="col">Product Details</th>
                  <th scope="col">Prices</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img className="img-fluid purchase-img-size" src={thumbnail} alt="" />
                  </td>
                  <td>Compleate web programming course</td>
                  <td>$129.99</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 col-sm-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-2">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  name="name"
                  defaultValue={loggedInUser.name}
                  placeholder="Full Name"
                  {...register("name", { required: true })}
                />
                {errors.name && <p className="error">Full Name is required</p>}
              </div>
              <div class="form-group">
                <textarea class="form-control form-control-lg" id="" rows="5" placeholder="Description"></textarea>
              </div>
              <input className="btn btn-success btn-lg btn-block mb-2" type="submit" value="Submit Review" />
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
};

export default CoursesReview;
