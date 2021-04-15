import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Footer from "../../ShareFile/Footer/Footer";
import Navbar from "../../ShareFile/Navbar/Navbar";
import "./TeacherDashboard.css";
import teacherProfile from '../../../Images/logo/profile-icon.png';
import TeacherNavbar from "../TeacherNavbar/TeacherNavbar";

const TeacherDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section id="teacher-Dashboard">
      <Navbar></Navbar>
      <div className="container pb-5">
        <div className="profile-bg-img">
          <div className="text-center profile-bg-color my-5 py-5">
            {loggedInUser.photo ? (
              <img className="user-profile img-fluid" src={loggedInUser.photo} alt="Image" />
            ) : (
              <img className="user-profile img-fluid" src={teacherProfile} alt="User Images" />
            )}
            <h3 className="mt-3">{loggedInUser.name}</h3>
          </div>
        </div>
        <div>
          <TeacherNavbar></TeacherNavbar>
        </div>
        <div>
          <h3 className="text-info display-4 py-4">Dashboard</h3>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 col-md-12">
            <div className="bg-light m-4 p-4">
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td scope="row">Full Name: </td>
                    <th>{loggedInUser.name} </th>
                  </tr>

                  <tr>
                    <td scope="row">Email: </td>
                    <th>{loggedInUser.email} </th>
                  </tr>

                  <tr>
                    <td scope="row">Address: </td>
                    <th>{loggedInUser.address} </th>
                  </tr>
                  <tr>
                    <td scope="row">Phone Number: </td>
                    <th> {loggedInUser.phoneNumber}</th>
                  </tr>

                  <tr>
                    <td scope="row">Phone Number: </td>
                    <th> {loggedInUser.zipCode}</th>
                  </tr>

                  <tr>
                    <td scope="row">Facebook: </td>
                    <th>{loggedInUser.FbLink}</th>
                  </tr>

                  <tr>
                    <td scope="row">Linked in: </td>
                    <th> {loggedInUser.linkedInLink}</th>
                  </tr>

                  <tr>
                    <td scope="row">About: </td>
                    <th>{loggedInUser.about}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default TeacherDashboard;
