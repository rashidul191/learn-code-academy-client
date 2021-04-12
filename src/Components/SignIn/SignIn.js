import "./SignIn.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";
import Navbar from "../ShareFile/Navbar/Navbar";
import Footer from "../ShareFile/Footer/Footer";
// import { useForm } from "react-hook-form";

firebase.initializeApp(firebaseConfig);

function SignIn() {
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

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
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
        };
        setUser(signedInUser);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        const errCode = err.code;
        const errMessage = err.message;
        const email = err.email;
        console.log(errCode, errMessage, email);
      });
  };

  const fbprovider = new firebase.auth.FacebookAuthProvider();
  const handleFBLogin = () => {
    firebase
      .auth()
      .signInWithPopup(fbprovider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorCode, errorMessage, email);
      });
  };

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
        };
        setUser(signOutUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      // console.log("suming done");
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          //console.log(res);
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
          console.log("Sign In User", res.user);
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
            <div>
              <h3 className="display-4 text-light">Sign In</h3>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-10 sign-body-bg">
                <div className="form-body">
                  {/* google login information  here */}
                  {user.inSignedIn && (
                    <div>
                      <h2>Welcome , {user.name}</h2>
                      <p>Your Email: {user.email}</p>
                      <img src={user.photo} alt="imges here" />
                    </div>
                  )}
                  {/* google login information  here */}

                  <h1>Our own Authentication</h1>

                  <form onSubmit={handleSubmit} action="">
                    {newUser && (
                      <div>
                        <input type="text" onBlur={handleBlur} name="name" placeholder="your name" />
                        <br />
                      </div>
                    )}
                    <input type="email" onBlur={handleBlur} name="email" placeholder="your email" required />
                    <br />
                    <input type="password" onBlur={handleBlur} name="password" placeholder="your password" required />
                    <br />

                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="" id="createAccount" />
                    <label htmlFor="createAccount">Create a New Account</label>
                    <br />
                    <input type="submit" value={newUser ? "Sign Up" : "Sign In"} />
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
                    <div>
                      {user.inSignedIn ? (
                        <button className="btn btn-danger" onClick={handleSignOut}>
                          Sign Out
                        </button>
                      ) : (
                        <button className="btn btn-success" onClick={handleSignIn}>
                          Google Sign In
                        </button>
                      )}
                    </div>
                    <br />
                    <div>
                      <button onClick={handleFBLogin}>Facebook Sign In</button>
                    </div>
                  </div>

                  <div>
                    {/* error masseges here */}
                    <p style={{ color: "red" }}>{user.error}</p>

                    {/* success masseges here */}
                    {user.success && <p style={{ color: "green" }}>User {newUser ? "Created" : "Logged In"} Successfully</p>}
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
