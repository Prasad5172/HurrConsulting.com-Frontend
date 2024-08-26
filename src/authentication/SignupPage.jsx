import React, { useState, useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SigninAndSignup.css";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toastSuccess, toastFailed } from "../Util/ToastFunctions";
import { storeInLocalStorage } from "../Util/LocalStorage";
import OtpInput from "react-otp-input";
import { AuthContext } from "../context/AuthContext";
import { HashLoader } from "react-spinners";


const SignupPage = () => {
  const {
    setUserName,
    setDisplayProfile,
    setAuthenticated,
    setProfile,
    setAdmin,
    isAuthenticated,
    isLoading,
    setIsLoading
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const [formdata, setformData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [showOtpPage, setShowOtpPage] = useState(false);
  const [otp, setOtp] = useState("");

  const InputEvent = (event) => {
    // console.log(formdata)
    const { name, value } = event.target;
    setformData((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    const btn = document.getElementById("sign-up-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 300);
    event.preventDefault();
    setIsLoading(true)
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: formdata.password,
            email: formdata.email,
          }),
        }
      );

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setShowOtpPage(true);
        toastSuccess(data.message);
      } else {
        signupBtnFailedAnimation();
        toastFailed(data.message);
      }
    } catch (error) {
      console.log(error);
      signupBtnFailedAnimation();
      toastFailed(error.message);
    }
    setIsLoading(false)
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
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log(response);
      setIsLoading(true)
      try {
        const res = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/auth/signup",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${response.access_token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setAuthenticated(true);
          setAdmin(data.is_admin);
          setUserName(data.name);
          navigate("/");
          storeInLocalStorage(data);
          toastSuccess(data.message);
        } else {
          signupBtnFailedAnimation();
          toastFailed(data.message);
        }
      } catch (err) {
        console.log(err);
        signupBtnFailedAnimation();
        toastFailed(err.message);
      }
      setIsLoading(false)
    },
  });

  const handleVerifyOtp = async () => {
    const btn = document.getElementById("verify-otp-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 300);
    setIsLoading(true)
    if (!otp) {
      setIsLoading(false)
      return toastFailed("Enter Otp to proceed");
    }
    console.log(otp);
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
      if (res.ok) {
        storeInLocalStorage(data);
        setAuthenticated(true);
        navigate("/");
        setAdmin(data.is_admin);
        setformData({
          email: "",
          password: "",
          confirmpassword: "",
        });
        setShowOtpPage(false);
        toastSuccess(data.message);
      } else {
        toastFailed(data.message);
        const failed = document.getElementById("verify-otp-btn");
        failed.classList.add("shake-button");
        setTimeout(() => {
          failed.classList.remove("shake-button");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      signupBtnFailedAnimation();
      toastFailed(error.message);
    }
    setOtp("");
    setIsLoading(false)
  };

  const handleResendOTP = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/auth/sendOtp",
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
        toastSuccess(`Otp send to ${formdata.email}`);
      } else {
        signupBtnFailedAnimation();
        toastFailed("failed to send otp");
      }
      setOtp("");
    } catch (error) {
      console.log(error);
      signupBtnFailedAnimation();
      toastFailed(error.message);
    }
    setIsLoading(false)
  };
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePaste = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const pastedText = event.clipboardData.getData("text/plain").trim();

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
        <div className="outer-box pt-[80px] dark:bg-[#292929]  h-screen flex justify-center items-center" id="signup-page">
          <div className="inner-box mx-auto my-auto">
            {showOtpPage ? (
              <>
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-md-4 text-center">
                      <div className="row">
                        <div className="col-sm-12 mt-5 bgWhite otp-section">
                        <div className="font-bold mt-0 text-[#aaaaaa] mb-3 text-[25px] text-center">Verify OTP</div>
                          <h4 className="text-center text-[#000000] pb-8 text-[18px] dark:text-[#e0e0e0]">
                            Enter the OTP send to {formdata.email}{" "}
                          </h4>

                          <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            containerStyle={{ justifyContent: "center" }}
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
                            <p className="inline text-[18px] dark:text-[#e0e0e0]">
                              Already Registered?{" "}
                              <NavLink to="/signin" className="marginDown hover:underline">
                                Click here to login
                              </NavLink>
                            </p>
                            <p className="text-[18px] dark:text-[#e0e0e0]">
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
            ) : (
              <>
                <header className="signup-header">
                  <h1 className="dark:text-white">SignUp</h1>
                  <p className="text-[18px] dark:text-[#e0e0e0]">It just take 30 seconds</p>
                </header>
                <main className="signup-body">
                  <form onSubmit={handleSubmit} className="form">
                    <p>
                      <label htmlFor="email" className="text-black text-[20px] font-bold dark:text-[#e0e0e0]">
                        Enter Your Email
                      </label>
                      <input
                        type="email"
                        className="email p-2 block w-11/12 rounded-md"
                        id="email"
                        name="email"
                        value={formdata.email}
                        onChange={InputEvent}
                        title="Enter a valid email address"
                        required
                        onPaste={handlePaste}
                      />
                    </p>
                    <p>
                      <label htmlFor="password" className=" text-[20px] font-bold dark:text-[#e0e0e0]">
                        Password
                      </label>
                      <div className="flex items-center">
                        <input
                          type={`${showPassword1 ? "text" : "password"}`}
                          className="p-2 block w-11/12 rounded-md"
                          name="password"
                          id="password"
                          value={formdata.password}
                          onChange={InputEvent}
                          // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,}$"
                          title=" Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one special symbol (!@#$%^&*), and one digit."
                          required
                          onPaste={handlePaste}
                        />
                        {showPassword1 ? (
                          <FontAwesomeIcon
                            icon={faEye}
                            className="hover:cursor-pointer dark:text-white"
                            onClick={() => setShowPassword1(!showPassword1)}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faEyeSlash}
                            className="hover:cursor-pointer dark:text-white"
                            onClick={() => setShowPassword1(!showPassword1)}
                          />
                        )}
                      </div>
                    </p>
                    <p>
                      <label htmlFor="check-password" className="text-[20px] font-bold dark:text-[#e0e0e0]">
                        Check Password
                      </label>
                      <div className="flex  items-center">
                        <input
                          type={`${showPassword2 ? "text" : "password"}`}
                          className="p-2 block w-11/12 rounded-md"
                          name="confirmpassword"
                          id="check-password"
                          value={formdata.confirmpassword}
                          onChange={InputEvent}
                          required
                          onPaste={handlePaste}
                        />
                        {showPassword2 ? (
                          <FontAwesomeIcon
                            icon={faEye}
                            className="hover:cursor-pointer dark:text-white"
                            onClick={() => setShowPassword2(!showPassword2)}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faEyeSlash}
                            className="hover:cursor-pointer dark:text-white"
                            onClick={() => setShowPassword2(!showPassword2)}
                          />
                        )}
                      </div>
                      {formdata.password !== formdata.confirmpassword && (
                        <span className="password-mismatch">
                          *Passwords do not match
                        </span>
                      )}
                    </p>
                    <p className="centering cursor-pointer">
                      <input
                        type="submit"
                        id="sign-up-btn"
                        value="Sign up"
                        className="create-account text-[18px]"
                      />
                    </p>
                  </form>
                </main>
                <div className="flex justify-center">
                  <button
                    onClick={login}
                    className="signup-with-google-btn flex justify-between items-center"
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                    <span className="pl-3">Sign up with google</span>
                  </button>
                </div>
                <footer className="signup-footer footer-in-singup flex justify-center text-[18px]">
                  <p className="inline dark:text-[#e0e0e0]">
                    Alerady Registred?{" "}
                    <NavLink to="/signin">Click here to login</NavLink>
                  </p>
                </footer>
              </>
            )}
          </div>
        </div>
    </>
  );
};
export default SignupPage;
