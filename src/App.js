import "./App.css";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import NoMatch from "./Components/NoMatch/NoMatch";
import ContactMe from "./Components/ContactMe/ContactMe";
import Courses from "./Components/HomeCourse/Courses/Courses";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurBlogDetails from "./Components/OurBlog/OurBlogDetails/OurBlogDetails";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TcConditeion from "./Components/TcConditeion/TcConditeion";
import CoursesDetails from "./Components/HomeCourse/CoursesDetails/CoursesDetails";
import CheckOut from "./Components/CheckOut/CheckOut";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import MyCourse from "./Components/UserDashboard/MyCourse/MyCourse";
import PurchaseHistory from "./Components/UserDashboard/PurchaseHistory/PurchaseHistory";
import UserNotification from "./Components/UserDashboard/UserNotification/UserNotification";
import Instructor from "./Components/Instructor/Instructor";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CoursesReview from "./Components/UserDashboard/CoursesReview/CoursesReview";
import TeacherDashboard from "./Components/Teacher/TeacherDashboard/TeacherDashboard";
import SellCourses from "./Components/Teacher/SellCourses/SellCourses";
import TeacherNotification from "./Components/Teacher/TeacherNotification/TeacherNotification";
import AddCourses from "./Components/Teacher/AddCourses/AddCourses";
import CourseDetails from "./Components/CourseDetails/CourseDetails";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h3>Email: {loggedInUser.email}</h3> */}

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/contact-us">
            <ContactMe></ContactMe>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          

          {/* <Route path="/courses-details">
            <CoursesDetails></CoursesDetails>
          </Route> */}

          {/* : = Dynamic value  course details */}
          <Route path="/courses-details/:courseID">
            <CourseDetails></CourseDetails>
          </Route>

          <Route path="/our-blogs">
            <OurBlogDetails></OurBlogDetails>
          </Route>

          <Route path="/sign-in">
            <SignIn></SignIn>
          </Route>

          {/* private route start here */}
          {/* <PrivateRoute path="/check-out">
            <CheckOut></CheckOut>
          </PrivateRoute>

          <PrivateRoute path="/user-dashboard">
            <UserDashboard></UserDashboard>
          </PrivateRoute>

          <PrivateRoute path="/my-course">
            <MyCourse></MyCourse>
          </PrivateRoute>

          <PrivateRoute path="/course-review">
            <CoursesReview></CoursesReview>
          </PrivateRoute>

          <PrivateRoute path="/purchase-history">
            <PurchaseHistory></PurchaseHistory>
          </PrivateRoute>

          <PrivateRoute path="/user-notifications">
            <UserNotification></UserNotification>
          </PrivateRoute> */}

          {/* private route start here */}
          <Route path="/check-out">
            <CheckOut></CheckOut>
          </Route>

          <Route path="/user-dashboard">
            <UserDashboard></UserDashboard>
          </Route>

          <Route path="/my-course">
            <MyCourse></MyCourse>
          </Route>

          <Route path="/course-review">
            <CoursesReview></CoursesReview>
          </Route>

          <Route path="/purchase-history">
            <PurchaseHistory></PurchaseHistory>
          </Route>

          <Route path="/user-notifications">
            <UserNotification></UserNotification>
          </Route>

          <Route path="/teacher-dashboard">
            <TeacherDashboard></TeacherDashboard>
          </Route>

          <Route path="/sell-courses">
            <SellCourses></SellCourses>
          </Route>

          <Route path="/teacher-notifications">
            <TeacherNotification></TeacherNotification>
          </Route>
          <Route path="/add-courses">
            <AddCourses></AddCourses>
          </Route>
          {/* private route start end */}

          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/instructor">
            <Instructor></Instructor>
          </Route>

          <Route path="/privacy-policy">
            <PrivacyPolicy></PrivacyPolicy>
          </Route>

          <Route path="/terms-of-service">
            <TcConditeion></TcConditeion>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
