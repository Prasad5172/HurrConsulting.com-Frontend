import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SigninAndSignup.css"
// import blackLogo from "../black-logo.jpg"
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {toastSuccess,toastFailed }  from "../Util/ToastFunctions"


const SignupPage = () => {
  

  const navigate = useNavigate();
  const [formdata, setformData] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  });
  const [showOtpPage, setShowOtpPage] = useState(false);

 


  const InputEvent = (event) => {
    // console.log(formdata)
    const { name, value } = event.target;
    setformData((preval) => ({
      ...preval,
      [name]: value,
    }))
  }


  const handleSubmit = async (event) => {
    const btn = document.getElementById("sign-up-btn")
    btn.classList.add("btn-click")
    setTimeout(() => {
      btn.classList.remove("btn-click")
    }, 300);
    event.preventDefault();
    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URL+`/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({password:formdata.password,email:formdata.email}),
      });

      const response = await res.json();
      console.log(response)
      if (res.ok) {
        setShowOtpPage(true)
        toastSuccess(response.message);
      } else {
        signupBtnFailedAnimation();
        toastFailed(response.message)
      }
    } catch (error) {
      console.log(error);
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
  }



  const login = useGoogleLogin({
    onSuccess: async response => {
      console.log(response);
      console.log(response.access_token);
      console.log(process.env.REACT_APP_BACKEND_URL);
      try {
        const res1 = await fetch( process.env.REACT_APP_BACKEND_URL + "/auth/signup", {
          method: "POST",
          headers: {
            "Authorization":`Bearer ${response.access_token}`,
            "Content-Type": "application/json",
          }
        })
        const condition = await res1.json();
        console.log(condition)
        if (res1.ok) {
          toastSuccess(condition.message)
        } else {
          signupBtnFailedAnimation()
          toastFailed(condition.message)
        }
      } catch (err) {
        console.log(err);
      }
    }
  });
  const [otpData, setOtpData] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
  });
  const inputRefs = useRef([]);
  const handleChange = (e, inputIndex) => {
    const { name, value } = e.target;
    // Ensure the value is a single digit
    if (/^\d$/.test(value)) {
      // Update the input value in the state
      setOtpData((prevOtpData) => ({
        ...prevOtpData,
        [name]: value,
      }));

      // Move focus to the next input field
      if (inputIndex < inputRefs.current.length - 1) {
        inputRefs.current[inputIndex + 1].focus();
      }
    }
  };
  const getCombinedOTP = () => {
    const { one, two, three, four, five, six } = otpData;
    return (one + two + three + four + five + six);
  };

  const handleVerifyOtp = async () => {
    const btn = document.getElementById("verify-otp-btn")
    btn.classList.add("btn-click")
    setTimeout(() => {
      btn.classList.remove("btn-click")
    }, 300);
    var otp = getCombinedOTP()
    if(!otp){
      otp = otpData.join("")
    }
    console.log(otp)
    const res = await fetch(`http://localhost:8000/auth/verifyOtp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formdata, "otp": otp })
    })
    const data = await res.json();
    if (res.ok) {
      setformData({
        email: "",
        password: "",
        confirmpassword: ""
      })
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
    setOtpData({
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
    })
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
    
  }

  const firstInputRef = useRef(null);

  useEffect(() => {
    // Auto-focus the first input element when the component mounts
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [showOtpPage]);

  const handleResendOTP = async (event) => {
    event.preventDefault()
    try {
      
      const res = await fetch(process.env.REACT_APP_BACKEND_URL+"/auth/sendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const response = await res.json();
      console.log(response)
      if (res.ok) {
        setShowOtpPage(true)
        toastSuccess(`Otp send to ${formdata.email}`)
      } else {
        signupBtnFailedAnimation();
        toastFailed("failed to send otp")
      }

      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
      setOtpData({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
      })
    } catch (error) {
      console.log(error);
    }
  }
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePaste = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const pastedText = event.clipboardData.getData('text/plain').trim();

    const input = event.target;
    const inputType = input.type; // Store the original input type
    input.type = 'text'; // Temporarily change input type to "text"
    console.log(name);
    var newValue = value.substring(0, input.selectionStart) + pastedText
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
    const changeEvent = new Event('input', { bubbles: true });
    input.dispatchEvent(changeEvent);
  };
  const handlePasteOnInputRef = (event, index) => {
    const pastedText = event.clipboardData.getData('text/plain').trim();
    if (pastedText.length === 6) {
      const arr = pastedText.split('')
      console.log(arr)
      setOtpData(pastedText.split(''));
      if (inputRefs.current && inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  }

  return (
    <>
      <div className="outer-box mt-[100px] mb-5" id="signup-page">
      
        
        

        <div className="inner-box mx-auto my-auto">
          {
            showOtpPage ?
              <>
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-md-4 text-center">
                      <div className="row">
                        <div className="col-sm-12 mt-5 bgWhite">
                          <div className="title centering">
                            Verify OTP
                          </div>
                          <h4 style={{ color: "#000000", paddingBottom: "20px" }} className="centering">Enter the OTP send to {formdata.email} </h4>
                          <form action="" className="otp-holders centering flex">
                            {Object.entries(otpData).map(([name, value], index) => (
                              <input
                                className="otp"
                                type="text"  // Use text type for accepting single digits
                                name={name}
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                maxLength="1"
                                key={name}
                                ref={index === 0 ? firstInputRef : (input) => (inputRefs.current[index] = input)}
                                onPaste={(e) => handlePasteOnInputRef(e, index)}
                              />
                            ))}
                          </form>
                          <hr className="horizontalLine line-in-verifyOtp" />
                          <button type="submit" id="verify-otp-btn" className='create-account' onClick={handleVerifyOtp}>Verify</button>
                          <footer className="signup-footer footer-in-singup">
                            <p>Already Registered? <NavLink to="/signin" className="marginDown">Click here to login</NavLink></p>
                            <p>Didn't receive OTP? <a href="#" onClick={handleResendOTP} className="marginDown">Resend OTP</a></p>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :
              <>
                <header className="signup-header">
                  <h1>SignUp</h1>
                </header>
                <main className="signup-body">
                  <form onSubmit={handleSubmit} className="form">
                    
                    <p>
                      <label htmlFor="email" className="field">Enter Your Email</label>
                      <input
                        type="email"
                        className="email"
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
                      <label htmlFor="fname" className="field">Password</label>
                      <div>
                        <input
                          type={`${showPassword1 ? "text" : "password"}`}
                          className="fname"
                          name="password"
                          value={formdata.password}
                          onChange={InputEvent}
                          // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,}$"
                          title=" Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one special symbol (!@#$%^&*), and one digit."
                          required
                          onPaste={handlePaste}
                        />
                        {
                          showPassword1 ? <FontAwesomeIcon icon={faEye}  onClick={() => setShowPassword1(!showPassword1)}/>: <FontAwesomeIcon icon={faEyeSlash}  onClick={() => setShowPassword1(!showPassword1)}/>
                        }
                      </div>
                    </p>
                    <p>
                      <label htmlFor="fname" className="field">Check Password</label>
                      <div>
                        <input
                          type={`${showPassword2 ? "text" : "password"}`}
                          className="fname"
                          name="confirmpassword"
                          value={formdata.confirmpassword}
                          onChange={InputEvent}
                          required
                          onPaste={handlePaste}
                        />
                        {
                          showPassword2 ? <FontAwesomeIcon icon={faEye}  onClick={() => setShowPassword2(!showPassword2)}/>: <FontAwesomeIcon icon={faEyeSlash}  onClick={() => setShowPassword2(!showPassword2)}/>
                        }
                      </div>
                      {formdata.password !== formdata.confirmpassword && (
                        <span className="password-mismatch">*Passwords do not match</span>
                      )}
                    </p>
                    <p className="centering cursor-pointer">
                      <input type="submit" id="sign-up-btn" value="Sign up" className="create-account" />
                    </p>
                  </form>
                </main>
                <div className="flex justify-center">
                  <button onClick={login} className="signup-with-google-btn flex justify-between items-center">

                    <FontAwesomeIcon icon={faGoogle} />
                    <span className="pl-3">Sign up with google</span>
                  </button>
                </div>
                <footer className="signup-footer footer-in-singup">
                  <p>Alerady Registred? <NavLink to="/signin">Click here to login</NavLink></p>
                </footer>
              </>
          }
        </div>
      </div>
    </>
  )
}
export default SignupPage;