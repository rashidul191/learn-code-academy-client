import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import NoMatch from './Components/NoMatch/NoMatch';
import ContactMe from './Components/ContactMe/ContactMe';
import Courses from './Components/HomeCourse/Courses/Courses';
import AboutUs from './Components/AboutUs/AboutUs';
import OurBlogDetails from './Components/OurBlog/OurBlogDetails/OurBlogDetails';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TcConditeion from './Components/TcConditeion/TcConditeion';
import CoursesDetails from './Components/HomeCourse/CoursesDetails/CoursesDetails';
import CheckOut from './Components/CheckOut/CheckOut';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import MyCourse from './Components/UserDashboard/MyCourse/MyCourse';
import PurchaseHistory from './Components/UserDashboard/PurchaseHistory/PurchaseHistory';
import UserNotification from './Components/UserDashboard/UserNotification/UserNotification';

function App() {
  return (
    <div>
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

          <Route path="/courses-details">
            <CoursesDetails></CoursesDetails>
          </Route>

          <Route path="/our-blogs">
            <OurBlogDetails></OurBlogDetails>
          </Route>

          <Route path="/sign-in">
            <SignIn></SignIn>
          </Route>

          <Route path="/check-out">
            <CheckOut></CheckOut>
          </Route>

          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/privacy-policy">
            <PrivacyPolicy></PrivacyPolicy>
          </Route>


          <Route path="/terms-of-service">
            <TcConditeion></TcConditeion>
          </Route>

          <Route path="/purchase-history">
            <PurchaseHistory></PurchaseHistory>
          </Route>

          <Route path="/user-dashboard">
            <UserDashboard></UserDashboard>
          </Route>

          <Route path="/my-course">
            <MyCourse></MyCourse>
          </Route>

          <Route path="/user-notifications">
           <UserNotification></UserNotification>
          </Route>         


          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
