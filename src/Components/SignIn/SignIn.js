import "./SignIn.css";
import googleSignInImg from "../../Images/logo/google logo.png";
import facebookSignInImg from "../../Images/logo/Facebook-logo.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext, useState } from "react";
import Navbar from "../ShareFile/Navbar/Navbar";
import Footer from "../ShareFile/Footer/Footer";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
// import { useForm } from "react-hook-form";

// if (firebase.apps.lenght === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

function SignIn() {
  document.title = "LCA | Sign In";
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm(); // handleFromSubmit,  initialize the hook
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    inSignedIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
    error: "",
    success: false,
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/user-dashboard" } };

  // google sign in here
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          inSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        // console.log(displayName, email, photoURL);
      })
      .catch((error) => {
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        //   console.log(errCode, errMessage, email);
      });
  };

  // facebook sign in here
  const fbprovider = new firebase.auth.FacebookAuthProvider();
  const handleFBSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbprovider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          inSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
  };

  // user sign out here
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          inSignedIn: false,
          name: "",
          email: "",
          photo: "",
          error: "",
          success: false,
        };
        setUser(signOutUser);
        setLoggedInUser(signOutUser);
      })
      .catch((error) => {
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
  };

  // user create new a account / user sign in here
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      // console.log("suming done");
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          // const newUserInfo = res.user;

          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          updateUserName(user.name);
          // updateUserName(name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          // console.log("Sign In User", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  // from blur here
  const handleBlur = (e) => {
    let isFieldValid = true;

    // console.log(e.target.name, e.target.value);
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log(isFieldValid);
    }
    if (e.target.name === "password") {
      const isPasswordValide = e.target.value.length > 8;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValide && passwordHasNumber;
      //console.log(isPasswordValide && passwordHasNumber);
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  // user name update here
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {
        console.log("User name updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section id="sign-In">
      <Navbar></Navbar>
      <div className="sign-in-img">
        <div className="sign-in-bg">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8 col-md-10 sign-body-bg">
                <div className="form-body">
                  <div>
                    {newUser ? (
                      <h3 className="display-4 text-center mb-3">Registration Now</h3>
                    ) : (
                      <h3 className="display-4 text-center text-success mb-5">Sign In</h3>
                    )}
                  </div>
                  {/* google login information  here */}
                  {/* {user.inSignedIn && (
                    <div>
                      <h2>Welcome , {user.name}</h2>
                      <p>Your Email: {user.email}</p>
                      <img src={user.photo} alt="imges here" />
                    </div>
                  )} */}
                  {/* google login information  here */}
                  <form onSubmit={handleSubmit} action="">
                    {newUser && (
                      <div className="newUser-form">                       
                        <div className="input-group-lg my-2">
                          <input className="form-control " type="text" onBlur={handleBlur} name="name" placeholder="Full Name *" required />
                        </div>
                        <div className="input-group-lg my-2">
                          <input className="form-control " type="text" onBlur={handleBlur} name="address" placeholder="Address *" required />
                        </div>
                      </div>
                    )}
                    <div className="input-group-lg my-2">
                      <input className="form-control " type="email" onBlur={handleBlur} name="email" placeholder="email@example.com *" required />
                    </div>
                    <div className="input-group-lg my-2">
                      <input className="form-control " type="password" onBlur={handleBlur} name="password" placeholder="Password *" required />
                    </div>

                    {newUser && (
                      <div className="newUser-form">
                        <div className="input-group-lg my-2">
                          <input
                            className="form-control "
                            type="password"
                            onBlur={handleBlur}
                            name="password"
                            placeholder="Conform Password *"
                            required
                          />
                        </div>

                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="input-group-lg my-2">
                              <input className="form-control " type="text" onBlur={handleBlur} name="zipCode" placeholder="Zip Code *" required />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="input-group-lg my-2">
                              <input
                                className="form-control "
                                type="text"
                                onBlur={handleBlur}
                                name="phoneNumber"
                                placeholder="Phone Number *"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="row mx-5 py-3">
                      <div className="ml-auto">
                        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="" id="createAccount" />
                        <label htmlFor="createAccount">Create a New Account</label>
                      </div>
                    </div>
                    {newUser && (
                      <div className="newUser-form">
                        <div>
                          <ul>
                            <li>At least 8 characters</li>
                            <li>A mixture of both uppercase and lowercase letters</li>
                            <li>A mixture of letters and numbers</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="input-group-lg mx-5">
                      <input className="form-control btn btn-success" type="submit" value={newUser ? "Registration" : "Sign In"} />
                    </div>
                  </form>

                  {/* <form onSubmit={handleSubmit} action="">
                    <div className="input-group-lg">
                      {newUser && (
                        <div className="input-group-lg">
                          <label className="mt-2" htmlFor="name">
                            Name:
                          </label>
                          <br />
                          <input
                            className="form-control "
                            onBlur={handleBlur}
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            {...register("name", { required: true })}
                          />
                          {errors.name && <span>Name is required</span>}
                        </div>
                      )}
                    </div>

                    <div className="input-group-lg">
                      <label className="mt-2" htmlFor="email">
                        Email:
                      </label>
                      <input
                        className="form-control"
                        onBlur={handleBlur}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                        {...register("email", { required: true })}
                      />
                      {errors.email && <span>Email is required</span>}
                    </div>

                    <div className="input-group-lg">
                      <label className="mt-2" htmlFor="password">
                        Password:
                      </label>
                      <input
                        className="form-control"
                        onBlur={handleBlur}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                        {...register("password", { required: true })}
                      />

                      {errors.password && <span>Password is required</span>}
                    </div>
                    <div className="row mx-4 pt-2">
                      <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember Me</label>
                      </div>
                      <div className="ml-auto">
                        <input type="checkbox" onBlur={() => setNewUser(!newUser)} name="" id="createAccount" />
                        <label htmlFor="createAccount">Create New Account</label>
                      </div>
                    </div>
                    <div className="mx-4 py-3">
                      <input className="btn btn-success btn-block btn-lg" type="submit" value={newUser ? "Sign Up" : "Sign In"} />
                    </div>
                  </form> */}
                  <div>
                    <p className="lead or-text-style my-4"> or </p>
                  </div>

                  <div className="text-center">
                    <div>
                      {user.inSignedIn ? (
                        <button className="btn btn-danger" onClick={handleSignOut}>
                          Sign Out
                        </button>
                      ) : (
                        <div className="socail-icon-sing">
                          <div onClick={handleGoogleSignIn} className="">
                            <div className="row mx-5 mt-1">
                              <img className="img-fluid socail-icon-size" src={googleSignInImg} alt="" />
                              <label className="ml-auto" htmlFor="">
                                Sign In with Google
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <br />
                    <div className="socail-icon-sing">
                      <div onClick={handleFBSignIn} className="">
                        <div className="row mx-5 mt-1">
                          <img className="img-fluid socail-icon-size" src={facebookSignInImg} alt="" />
                          <label className="ml-auto" htmlFor="">
                            Sign In with Facebook
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* error masseges here */}
                    <p className="text-center mt-4" style={{ color: "red" }}>
                      {user.error}
                    </p>

                    {/* success masseges here */}
                    {user.success && (
                      <p className="text-center mt-4" style={{ color: "green" }}>
                        User {newUser ? "Created" : "Logged In"} Successfully
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default SignIn;
