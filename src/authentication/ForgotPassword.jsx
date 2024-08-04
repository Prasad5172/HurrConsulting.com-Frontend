import React, { useEffect, useContext, useState, useRef } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
// import { SigninContext } from '../context/SigninContext'
// import blackLogo from "../black-logo.jpg"
import "./SigninAndSignup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import { toastFailed, toastSuccess } from "../Util/ToastFunctions";
import OtpInput from "react-otp-input";
import { AuthContext } from "../context/AuthContext";

function ForgotPassword() {
  const [tokenToResetPassword, setTokenToResetPassword] = useState("");
  const {isAuthenticated,setIsLoading} = useContext(AuthContext);
  const navigate = useNavigate();
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
    event.preventDefault();
    const btn = document.getElementById("verify-otp-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 200);
    setIsLoading(true)
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
      console.log(res.ok)
      if (res.ok) {
        setShowOtpPage(true);
        toastSuccess(response.message);
      } else {
        btnFailedAnimation("verify-otp-btn");
        toastFailed(response.message);
      }
    } catch (error) {
      toastFailed(error.message);
      btnFailedAnimation("verify-otp-btn");

    }finally{
      setIsLoading(false)
    }
  };

  const btnFailedAnimation = (id) => {
    const failed = document.getElementById(id);
    setTimeout(() => {
      failed?.classList.add("shake-button");
    }, 500);
    setTimeout(() => {
      failed?.classList.remove("shake-button");
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    const btn = document.getElementById("verify-otp-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 300);
    setIsLoading(true)
    console.log(otp);
    if (!otp) {
      setIsLoading(false)
      toastFailed("Enter Otp to proceed");
      btnFailedAnimation("verify-otp-btn");
      return 
    }
    try {
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
      console.log(data)
      if (res.ok) {
        setIsOtpVerified(true);
        setTokenToResetPassword(data.data.token)
        toastSuccess(data.message);
      } else {
        toastFailed(data.message);
        btnFailedAnimation("verify-otp-btn");
      }
    } catch (error) {
      console.log(error);
      toastFailed(error.message);
      btnFailedAnimation("verify-otp-btn")
    }
    setOtp("");
    setIsLoading(false)
  };


  const handleResendOTP = async (event) => {
    event.preventDefault();
    setIsLoading(true)
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
        btnFailedAnimation("verify-otp-btn");
        toastFailed(response.message);
      }
      
    } catch (error) {
      console.log(error);
      toastFailed(error.message)
      btnFailedAnimation("verify-otp-btn")
    }
    setOtp("");
      setIsLoading(false)
  };
  const handleResetPassword = async (event) => {
    event.preventDefault();
    const btn = document.getElementById("reset-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 300);
    setIsLoading(true);
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
      if (data == "succesful") {
        setIsOtpVerified(false);
        setShowOtpPage(false);
        toastSuccess("Password Reset Succesful")
        navigate("/signin");
        toastSuccess(data.message);
      }else{
        toastFailed("Password Reset failed")
        btnFailedAnimation("reset-btn");
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      btnFailedAnimation("reset-btn");
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
          <div className="outer-box 2xl:mt-[72px] xl:mt-[72px] lg:mt-[72px] h-screen flex justify-center items-center" >
            <div className="inner-box mx-auto my-auto">
              {showOtpPage ? (
                isOtpVerified ? (
                  <>
                    <header>
                      <h1 className="lg:text-3xl text-black  text-[25px] text-center pt-3">Reset Password</h1>
                    </header>
                    <main className="signup-body mt-10">
                      <form onSubmit={handleResetPassword} className="form">
                        <p className="my-2.5">
                          <label htmlFor="fname" className="text-black block text-[19px] font-bold ">
                            New Password
                          </label>
                          <div>
                            <input
                              type={`${showPassword1 ? "text" : "password"}`}
                              className="w-11/12 rounded-md p-2.5 border-2 border-solid border-slate-400 text-[18px] text-black"
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
                          <label htmlFor="fname" className="text-black block text-[19px] font-bold ">
                            Check Password
                          </label>
                          <div>
                            <input
                              type={`${showPassword2 ? "text" : "password"}`}
                              className="w-11/12 rounded-md p-2.5 border-2 border-solid border-slate-400 text-[18px] text-black"
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
                            className="w-11/12  p-2 border-2 border-solid border-slate-400 text-[19px] text-black create-account"
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
                              <div className="font-bold mt-0 text-[#aaaaaa] mb-3 text-[25px] text-center">Verify OTP</div>
                              <h4 className="text-center text-[#000000] pb-8 text-[18px]">
                                Enter the OTP send to {formdata.email}{" "}
                              </h4>
                              <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                containerStyle={{justifyContent:"center"}}
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
                              <hr className="  mt-5 mb-5" />
                              <button
                                type="submit"
                                id="verify-otp-btn"
                                className="create-account text-[18px]"
                                onClick={handleVerifyOtp}
                              >
                                Verify
                              </button>
                              <footer className="signup-footer footer-in-singup">
                                <p className="text-[18px]">
                                  Already Registered?{" "}
                                  <NavLink to="/signin" className="marginDown">
                                    Click here to login
                                  </NavLink>
                                </p>
                                <p className="text-[18px]">
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
                    <h1 style={{ marginBottom: "10px" }} className="font-semibold">Forgot Password</h1>
                    <h6 className=" text-[18px] mb-6" >
                      Enter your registered email to reset your password.
                    </h6>
                    <div className="form-group">
                      <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="fname" className="text-black text-lg mb-2">
                          Enter Your Email
                        </label>
                        <input
                          type="email"
                          className="fname text-[18px] mb-6"
                          name="email"
                          value={formdata.email}
                          onChange={InputEvent}
                          title="Enter a valid email address"
                          required
                        />
                        <p className="flex justify-center">
                          <input
                            type="submit"
                            id="verify-otp-btn"
                            value="Reset Password"
                            className="create-account "
                          />
                        </p>
                      </form>
                    </div>
                    <div className="footer">
                      <p className="text-[18px] mb-2 mt-2">
                        New here? <NavLink to="/signup">Sign Up.</NavLink>
                      </p>
                      <p className="text-[18px]">
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
