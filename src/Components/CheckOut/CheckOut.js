import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../ShareFile/Footer/Footer";
import Navbar from "../ShareFile/Navbar/Navbar";
import "./CheckOut.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

const CheckOut = (props) => {
  document.title = "LCA | Check Out";
  // cart add program start
  // const cart = props.cart;
  // console.log(cart);
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const course = cart[i];
  //   total = total + course.price;
  // }
  // cart add program end

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form submit done", data);

    fetch('https://vast-atoll-65684.herokuapp.com/paymentMethod',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        history.push ("/purchase-history");
        alert("Your Purchase Check Out Successfully.");
      }
    })
    
  };

  return (
    <section id="check-Out">
      <Navbar></Navbar>
      <h3 className="bg-dark text-center text-light mt-3 py-4 display-4">Check Out</h3>
      <div className="container">
        <div className="table-part py-4">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S/L</th>
                <th scope="col">Images</th>
                <th scope="col">Product Details</th>
                <th scope="col">Prices</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {/* <img className="img-fluid purchase-img-size" src={thumbnail} alt="" /> */}
                  <img className="img-fluid purchase-img-size" src="https://i.ytimg.com/vi/d35dfSwBTNY/maxresdefault.jpg" alt="" />
                </td>
                <td>HTML Bangal Turorial</td>
                <td>৳ 199</td>
                <td>*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row pb-5">
          <div className="col-lg-6 col-md-12"></div>

          <div className="col-lg-12 col-md-12 check-out-site">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-body mx-5">
                  <div className="input-group mb-2">                      
                      <input
                        class="form-control form-control-lg"
                        type="date"
                        name="date"
                        defaultValue={new Date()}
                        // placeholder={new Date()}
                        {...register("date", { required: true })}
                      />
                      {errors.date && <p className="error">Date is required</p>}
                    </div>
                    <div className="input-group mb-2">                      
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        name="name"
                        defaultValue={loggedInUser.name}
                        placeholder="Full Name *"
                        {...register("name", { required: true })}
                      />
                      {errors.name && <p className="error">Full Name is required</p>}
                    </div>

                    <div className="input-group mb-2">
                      <input
                        class="form-control form-control-lg"
                        type="email"
                        name="email"
                        defaultValue={loggedInUser.email}
                        placeholder="Email *"
                        {...register("email", { required: true })}
                      />
                      {errors.email && <p className="error">Email is required</p>}
                    </div>

                    <div className="input-group mb-2">
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        name="address"
                        defaultValue={loggedInUser.address}
                        placeholder="Address *"
                        {...register("address", { required: true })}
                      />
                      {errors.address && <p className="error">Address is required</p>}
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="input-group mb-2">
                          <input
                            class="form-control form-control-lg"
                            type="text"
                            name="zipCode"
                            defaultValue={loggedInUser.zipCode}
                            placeholder="Zip Code *"
                            {...register("zipCode", { required: true })}
                          />
                          {errors.zipCode && <p className="error">Zip Code is required</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="input-group mb-2">
                          <input
                            class="form-control form-control-lg"
                            type="text"
                            name="phone"
                            defaultValue={loggedInUser.phone}
                            placeholder="Phone Number *"
                            {...register("phone", { required: true })}
                          />
                          {errors.phone && <p className="error">Phone Number is required</p>}
                        </div>
                      </div>
                    </div>

                    <div class="input-group mb-3">
                      <div className="input-group mb-2">
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          name="paymentMetoh"
                          placeholder="Payment Metoh *"
                          {...register("paymentMetoh", { required: true })}
                        />
                        {errors.paymentMetoh && <p className="error">Payment Metoh is required</p>}
                      </div>
                      {/* <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">
                          Payment Method *
                        </label>
                      </div> */}
                      {/* <select class="custom-select " id="inputGroupSelect01">
                        <option selected>Choose Option</option>
                        <option value="1">bKash</option>
                        <option value="2">Rocket</option>
                        <option value="3">Nagad</option>
                      </select> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card-body">
                    <h3 className="text-center text-primary">Cart Tables</h3>
                    <div>
                      {/* <h5>Items Ordered: {cart.length}</h5> */}
                      {/* <h5>Items Ordered: </h5>

                      <br /> */}
                      {/* <h5>Total: {total}</h5> */}
                      {/* <h5>Total: </h5> */}
                    </div>
                    <div className="row px-5">
                      <h5>Total:</h5>
                      {/* <h5 className="ml-auto">$ {total}</h5> */}
                      <h5 className="ml-auto">$ 199</h5>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <h4 className="text-center">Select Payment Method</h4>
                    <hr />
                  </div>
                  <div>
                    <div class="accordion" id="accordionExample">
                      <div class="">
                        <div class="card-header" id="headingOne">
                          <input
                            type="radio"
                            name=""
                            id="bKash"
                            class="mb-0"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            Collapsible
                            Group
                            Item
                          />
                          <label className="ml-3  mb-0" htmlFor="bKash">
                            bKash
                          </label>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div class="card-body">
                            <div>
                              <p className="mb-0">
                                নিচের বিকাশ নাম্বারে সেন্ড মানি করুন অথবা আপনার নিকটস্থ বিকাশ এজেন্ট দোকান থেকে ক্যাশ ইন করুন। তারপর যে বিকাশ নাম্বার
                                থেকে টাকা সেন্ড করেছেন সেই বিকাশ নাম্বারটি এবং ট্রানজেকশন আইডি টি নিচের ফরমে সাবমিট করুন। যদি আপনি অন্য কোনো মাধ্যমে
                                পেমেন্ট করতে চান তাহলে আমাদের ফেসবুক পেইজে ম্যাসেজ করুন বা সরাসরি কল করুন। <br /> ধন্যবাদ
                              </p>
                              <p className="lead">Number is: 0123456789</p>
                              <hr />
                            </div>
                            <div class="input-group mb-2">
                              {/* <input type="text" class="form-control" placeholder="bKash Number" aria-label="Dollar amount " /> */}
                              <div className="input-group mb-2">
                                <input
                                  class="form-control form-control-lg"
                                  type="text"
                                  name="bkashNumber"
                                  placeholder="bKash Number*"
                                  {...register("bkashNumber", { required: true })}
                                />
                                {errors.bkashNumber && <p className="error">bKash Number is required</p>}
                              </div>
                            </div>
                            <div class="input-group">
                              {/* <input type="text" class="form-control" placeholder="bKash Transaction ID" aria-label="Dollar amount " /> */}
                              <div className="input-group mb-2">
                                <input
                                  class="form-control form-control-lg"
                                  type="text"
                                  name="bkashTrID"
                                  placeholder="bKash Transaction ID *"
                                  {...register("bkashTrID", { required: true })}
                                />
                                {errors.bkashTrID && <p className="error">bKash Transaction ID is required</p>}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="">
                        <div class="card-header" id="headingTwo">
                          <input
                            type="radio"
                            name=""
                            id="rocket"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          />
                          <label className="ml-3 mb-0" htmlFor="rocket">
                            Rocket
                          </label>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                          <div class="card-body">
                            <div>
                              <p className="mb-0">
                                নিচের রকেট নাম্বারে সেন্ড মানি করুন অথবা আপনার নিকটস্থ বিকাশ এজেন্ট দোকান থেকে ক্যাশ ইন করুন। তারপর যে বিকাশ নাম্বার
                                থেকে টাকা সেন্ড করেছেন সেই বিকাশ নাম্বারটি এবং ট্রানজেকশন আইডি টি নিচের ফরমে সাবমিট করুন। যদি আপনি অন্য কোনো মাধ্যমে
                                পেমেন্ট করতে চান তাহলে আমাদের ফেসবুক পেইজে ম্যাসেজ করুন বা সরাসরি কল করুন। <br /> ধন্যবাদ
                              </p>
                              <p className="lead mb-0">Number is: 0123456789</p>
                              <hr />
                            </div>
                            <div class="input-group mb-2">
                              <input type="text" class="form-control" placeholder="Rocket Number" aria-label="Dollar amount " />
                            </div>
                            <div class="input-group">
                              <input type="text" class="form-control" placeholder="Rocket Transaction ID" aria-label="Dollar amount " />
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div class="">
                        <div class="card-header" id="headingThree">
                          <input
                            type="radio"
                            name=""
                            id="nagad"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          />
                          <label className="ml-3 mb-0" htmlFor="nagad">
                            Nagad
                          </label>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div class="card-body">
                            <div>
                              <p className="mb-0">
                                নিচের নাগাদ নাম্বারে সেন্ড মানি করুন অথবা আপনার নিকটস্থ বিকাশ এজেন্ট দোকান থেকে ক্যাশ ইন করুন। তারপর যে বিকাশ নাম্বার
                                থেকে টাকা সেন্ড করেছেন সেই বিকাশ নাম্বারটি এবং ট্রানজেকশন আইডি টি নিচের ফরমে সাবমিট করুন। যদি আপনি অন্য কোনো মাধ্যমে
                                পেমেন্ট করতে চান তাহলে আমাদের ফেসবুক পেইজে ম্যাসেজ করুন বা সরাসরি কল করুন। <br /> ধন্যবাদ
                              </p>
                              <p className="lead">Number is: 0123456789</p>
                              <hr />
                            </div>
                            <div class="input-group mb-2">
                              <input type="text" class="form-control" placeholder="Nagad Number" aria-label="Dollar amount " />
                            </div>
                            <div class="input-group">
                              <input type="text" class="form-control" placeholder="Nagad Transaction ID" aria-label="Dollar amount " />
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div>
                <Link to="/purchase-history">
                  <button>Check Out</button>
                </Link>
              </div> */}

              {/* <input className="btn btn-success btn-lg btn-block mt-3 mb-2" type="submit" value="Check Out" /> */}

              <input className="btn btn-success btn-lg btn-block mt-3 mb-2" type="submit" value="Check Out" />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default CheckOut;
