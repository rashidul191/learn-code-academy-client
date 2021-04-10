import React from 'react';
import Footer from '../ShareFile/Footer/Footer';
import Navbar from '../ShareFile/Navbar/Navbar';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <section id="check-Out">
            <Navbar></Navbar>
            <h3 className="bg-dark text-center text-light mt-3 py-4 display-4">Check Out</h3>
            <div className="container">
                <div className="table-part py-4">
                    <table class="table  ">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Images</th>
                                <th scope="col">Product Details</th>
                                <th scope="col">Prices</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                           

                        </tbody>
                    </table>
                </div>
                <div className="row pb-5">
                    <div className="col-lg-6 col-md-12"></div>
                    <div className="col-lg-6 col-md-12 check-out-site">
                        <div>
                            <h3 className="text-center text-primary">Cart Tables</h3>
                            <div className="row px-5">
                                <h5>Total:</h5>
                                <h5 className="ml-auto">1000</h5>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <h4 className="text-center py-3">Select Payment Method</h4>
                            <hr />
                        </div>
                        <div>
                            <div class="accordion" id="accordionExample">
                                <div class="">

                                    <div class="card-header" id="headingOne">
                                        <input type="radio" name="" id="bKash"
                                            class="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                            Collapsible Group Item />
                                        <label className="ml-3  mb-0" htmlFor="bKash">bKash</label>
                                    </div>

                                    <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div>
                                                <p className="mb-0">নিচের বিকাশ নাম্বারে সেন্ড মানি করুন অথবা আপনার নিকটস্থ বিকাশ এজেন্ট দোকান থেকে ক্যাশ ইন করুন। তারপর যে বিকাশ নাম্বার থেকে টাকা সেন্ড করেছেন সেই বিকাশ নাম্বারটি এবং ট্রানজেকশন আইডি টি নিচের ফরমে সাবমিট করুন। যদি আপনি অন্য কোনো মাধ্যমে পেমেন্ট করতে চান তাহলে আমাদের ফেসবুক পেইজে ম্যাসেজ করুন বা সরাসরি কল করুন। <br /> ধন্যবাদ</p>
                                                <p className="lead">Number is: 0123456789</p>
                                                <hr />
                                            </div>
                                            <div class="input-group mb-2">
                                                <input type="text" class="form-control" placeholder="bKash Number" aria-label="Dollar amount " />
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="bKash Transaction ID" aria-label="Dollar amount " />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="card-header" id="headingTwo">
                                        <input type="radio" name="" id="rocket"
                                            data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" />
                                        <label className="ml-3 mb-0" htmlFor="rocket">Rocket</label>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div>
                                                <p className="mb-0">নিচের রকেট নাম্বারে সেন্ড মানি করুন অথবা আপনার নিকটস্থ বিকাশ এজেন্ট দোকান থেকে ক্যাশ ইন করুন। তারপর যে বিকাশ নাম্বার থেকে টাকা সেন্ড করেছেন সেই বিকাশ নাম্বারটি এবং ট্রানজেকশন আইডি টি নিচের ফরমে সাবমিট করুন। যদি আপনি অন্য কোনো মাধ্যমে পেমেন্ট করতে চান তাহলে আমাদের ফেসবুক পেইজে ম্যাসেজ করুন বা সরাসরি কল করুন। <br /> ধন্যবাদ</p>
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
                                </div>
                                <div class="">
                                    <div class="card-header" id="headingThree">
                                        <input type="radio" name="" id="nagad"
                                       data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"/>
                                       <label className="ml-3 mb-0" htmlFor="nagad">Nagad</label>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body">
                                        <div>
                                                <p className="mb-0">নিচের নাগাদ নাম্বারে সেন্ড মানি করুন অথবা আপনার নিকটস্থ বিকাশ এজেন্ট দোকান থেকে ক্যাশ ইন করুন। তারপর যে বিকাশ নাম্বার থেকে টাকা সেন্ড করেছেন সেই বিকাশ নাম্বারটি এবং ট্রানজেকশন আইডি টি নিচের ফরমে সাবমিট করুন। যদি আপনি অন্য কোনো মাধ্যমে পেমেন্ট করতে চান তাহলে আমাদের ফেসবুক পেইজে ম্যাসেজ করুন বা সরাসরি কল করুন। <br /> ধন্যবাদ</p>
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
                                </div>
                            </div>
                        </div>


                        <button className="btn btn-success btn-lg btn-block mt-5 mb-2">Check Out</button>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </section>
    );
};

export default CheckOut;