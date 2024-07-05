import React, { useEffect, useContext, useState, useRef } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
// import { SigninContext } from '../context/SigninContext'
// import blackLogo from "../black-logo.jpg"
import "./SigninAndSignup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toastFailed, toastSuccess } from "../Util/ToastFunctions";
import OtpInput from "react-otp-input";
import { AuthContext } from "../context/AuthContext";

function ForgotPassword(props) {
  const [tokenToResetPassword, setTokenToResetPassword] = useState("");
  const {setUserName,setDisplayProfile,setAuthenticated,setProfile,setAdmin,isAuthenticated} = useContext(AuthContext);


  const navigate = useNavigate();
  const location = useLocation();
  // const { userName, setUserName, displayProfile, setDisplayProfile, profile, setProfile, isAuthenticated, setAuthenticated, IsLoginSuccesful, setIsLoginSuccesful } = useContext(SigninContext)
  const [showOtpPage, setShowOtpPage] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [formdata, setformData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [otp, setOtp] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const InputEvent = (event) => {
    // console.log(formdata)
    const { name, value } = event.target;
    setformData((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    const btn = document.getElementById("verify-otp-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 300);
    event.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/auth/sendOtp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      const response = await res.json();
      console.log(response);
      if (res.ok) {
        setShowOtpPage(true);
        toastSuccess(response.message);
      } else {
        signupBtnFailedAnimation();
        toastFailed(response.message);
      }
    } catch (error) {
      console.log(error);
      toastFailed(error);
    }
  };

  const signupBtnFailedAnimation = () => {
    const failed = document.getElementById("sign-up-btn");
    setTimeout(() => {
      failed.classList.add("shake-button");
    }, 500);
    setTimeout(() => {
      failed.classList.remove("shake-button");
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    const btn = document.getElementById("verify-otp-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 300);
    console.log(otp);
    if (!otp) {
      return toastFailed("Enter Otp to proceed");
    }
    // console.log(otp)
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL + `/auth/verifyOtp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formdata, otp: otp }),
      }
    );
    const data = await res.json();
    if (res.ok) {
      navigate("/");
      props.setAuthenticated(true);
      window.localStorage.setItem("token", data.data.token);
      setIsOtpVerified(true);
      toastSuccess(data.message);
    } else {
      toastFailed(data.message);
      const failed = document.getElementById("verify-otp-btn");
      failed.classList.add("shake-button");
      setTimeout(() => {
        failed.classList.remove("shake-button");
      }, 1000);
    }
    setOtp("");
    console.log(data);
  };


  const handleResendOTP = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/auth/sendOtp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      const response = await res.json();
      console.log(response);
      if (res.ok) {
        setShowOtpPage(true);
        toastSuccess(response.message);
      } else {
        signupBtnFailedAnimation();
        toastFailed(response.message);
      }
      setOtp("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleResetPassword = async (event) => {
    const btn = document.getElementById("reset-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 300);
    event.preventDefault();
    console.log("i am in handle reset password function");
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/auth/resetpassword`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenToResetPassword}`,
          },
          body: JSON.stringify(formdata),
        }
      );
      // console.log(await res.json())
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setIsOtpVerified(false);
        setShowOtpPage(false);
        navigate("/signin");
        setTimeout(() => {
          props.setIsPasswordResetSuccesful("");
        }, 5000);
        toastSuccess(data.message);
      }
    } catch (error) {
      console.log(error);
      toastFailed(error);
    }
  };

  

  const handlePaste = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const pastedText = event.clipboardData.getData("text/plain");

    const input = event.target;
    const inputType = input.type; // Store the original input type
    input.type = "text"; // Temporarily change input type to "text"
    console.log(name);
    var newValue = value.substring(0, input.selectionStart) + pastedText;
    if (name !== "email") {
      newValue = newValue + value.substring(input.selectionEnd);
    }
    setformData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    // Change input type back to the original type
    input.type = inputType;

    // // Trigger the onChange event to update the state
    const changeEvent = new Event("input", { bubbles: true });
    input.dispatchEvent(changeEvent);
  };

  return (
    <>
      {!isAuthenticated && (
        <>
          <div className="outer-box mt-[100px] mb-5" >
            <div className="inner-box mx-auto my-auto">
              {showOtpPage ? (
                isOtpVerified ? (
                  <>
                    <header>
                      <h1 className="lg:text-3xl text-black  text-2xl">Reset Password</h1>
                    </header>
                    <main className="signup-body mt-10">
                      <form onSubmit={handleResetPassword} className="form">
                        <p className="my-2.5">
                          <label for="fname" className="text-black block text-2xl">
                            New Password
                          </label>
                          <div>
                            <input
                              type={`${showPassword1 ? "text" : "password"}`}
                              className="w-11/12 rounded-t p-2.5 border-2 border-solid border-slate-400 text-2xl text-black"
                              name="password"
                              value={formdata.password}
                              onChange={InputEvent}
                              // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,}$"
                              title=" Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one special symbol (!@#$%^&*), and one digit."
                              required
                              onPaste={handlePaste}
                            />
                            {showPassword1 ? (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                onClick={() => setShowPassword1(!showPassword1)}
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEye}
                                onClick={() => setShowPassword1(!showPassword1)}
                              />
                            )}
                          </div>
                        </p>
                        <p>
                          <label for="fname" className="text-black">
                            Check Password
                          </label>
                          <div>
                            <input
                              type={`${showPassword2 ? "text" : "password"}`}
                              className="w-11/12 rounded-t p-2.5 border-2 border-solid border-slate-400 text-2xl text-black"
                              name="confirmpassword"
                              value={formdata.confirmpassword}
                              onChange={InputEvent}
                              required
                              onPaste={handlePaste}
                            />
                            {showPassword2 ? (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                onClick={() => setShowPassword2(!showPassword2)}
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEye}
                                onClick={() => setShowPassword2(!showPassword2)}
                              />
                            )}
                          </div>
                          {formdata.password !== formdata.confirmpassword && (
                            <span className=" text-red-500 mt-5">
                              *Passwords do not match
                            </span>
                          )}
                        </p>
                        <p className="">
                          <input
                            type="submit"
                            id="reset-btn"
                            value="Reset Password"
                            className="w-11/12 rounded-t p-2.5 border-2 border-solid border-slate-400 text-2xl text-black create-account"
                          />
                        </p>
                      </form>
                    </main>
                  </>
                ) : (
                  <>
                    <div className="container">
                      <div className="row justify-content-md-center">
                        <div className="col-md-4 text-center">
                          <div className="row">
                            <div className="col-sm-12 mt-5 bgWhite otp-section">
                              <div className="title centering">Verify OTP</div>
                              <h4
                                style={{
                                  color: "#000000",
                                  paddingBottom: "20px",
                                }}
                                className="centering"
                              >
                                Enter the OTP send to {formdata.email}{" "}
                              </h4>
                              <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderInput={(props) => (
                                  <input
                                    {...props}
                                    style={{
                                      display: "inline-block",
                                      width: "50px",
                                      height: "50px",
                                      textAlign: "center",
                                      border: "1px solid black",
                                      borderRadius: "4px",
                                      marginRight: "5px", // Optional: To add some space between the inputs
                                    }}
                                  />
                                )}
                                placeholder="000000"
                                onPaste={handlePaste}
                              />
                              <hr className="horizontalLine line-in-verifyOtp mt-10 mb-5" />
                              <button
                                type="submit"
                                id="verify-otp-btn"
                                className="create-account"
                                onClick={handleVerifyOtp}
                              >
                                Verify
                              </button>
                              <footer className="signup-footer footer-in-singup">
                                <p>
                                  Already Registered?{" "}
                                  <NavLink to="/signin" className="marginDown">
                                    Click here to login
                                  </NavLink>
                                </p>
                                <p>
                                  Didn't receive OTP?{" "}
                                  <a
                                    href="#"
                                    onClick={handleResendOTP}
                                    className="marginDown"
                                  >
                                    Resend OTP
                                  </a>
                                </p>
                              </footer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              ) : (
                <>
                  <div className="row">
                    <h1 style={{ marginBottom: "10px" }}>Forgot Password</h1>
                    <h6 className="information-text">
                      Enter your registered email to reset your password.
                    </h6>
                    <div className="form-group">
                      <form className="form" onSubmit={handleSubmit}>
                        <label for="fname" className="text-black">
                          Enter Your Email
                        </label>
                        <input
                          type="email"
                          className="fname"
                          name="email"
                          value={formdata.email}
                          onChange={InputEvent}
                          title="Enter a valid email address"
                          required
                        />
                        <p className="centering">
                          <input
                            type="submit"
                            id="verify-otp-btn"
                            value="Reset Password"
                            className="create-account"
                          />
                        </p>
                      </form>
                    </div>
                    <div className="footer">
                      <p>
                        New here? <NavLink to="/signup">Sign Up.</NavLink>
                      </p>
                      <p>
                        Already have an account?{" "}
                        <NavLink to="/signin">Sign In.</NavLink>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ForgotPassword;
