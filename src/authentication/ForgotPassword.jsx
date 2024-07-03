import React, { useEffect, useContext, useState, useRef } from 'react'
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
// import { SigninContext } from '../context/SigninContext'
// import blackLogo from "../black-logo.jpg"
import "./SigninAndSignup.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {toastFailed,toastSuccess}  from "../Util/ToastFunctions"

function ForgotPassword(props) {

    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [tokenToResetPassword,setTokenToResetPassword] = useState("");


    const navigate = useNavigate()
    const location = useLocation()
    // const { userName, setUserName, displayProfile, setDisplayProfile, profile, setProfile, isAuthenticated, setAuthenticated, IsLoginSuccesful, setIsLoginSuccesful } = useContext(SigninContext)
    const [showOtpPage, setShowOtpPage] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false)
    const [formdata, setformData] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })
    const [otpData, setOtpData] = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
    });

    const InputEvent = (event) => {
        // console.log(formdata)
        const { name, value } = event.target;
        setformData((preval) => ({
            ...preval,
            [name]: value,
        }))
    }
    const handleSubmit = async (event) => {
        const btn = document.getElementById("verify-otp-btn")
        btn.classList.add("btn-click")
        setTimeout(() => {
            btn.classList.remove("btn-click")
        }, 300);
        event.preventDefault();
            try {
                const res = await fetch(process.env.REACT_APP_BACKEND_URL+`/auth/sendOtp`, {
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
                    toastSuccess(response.message);
                } else {
                    signupBtnFailedAnimation();
                    toastFailed(response.message);
                }
            } catch (error) {
                console.log(error);
                toastFailed(error)
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
        // console.log(otp)
        const res = await fetch(process.env.REACT_APP_BACKEND_URL+`/auth/verifyOtp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formdata, "otp": otp })
        })
        const data = await res.json();
        if (res.ok) {
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
        console.log(data);
        setTokenToResetPassword(data.data.token);
    }
    useEffect(() => {
        const currentUrl = location.pathname;
        if (!props.isAuthenticated) {
            const signin = document.getElementById("forgotpage-signin")
            if (currentUrl == "/forgotpassword") {
                signin.style.setProperty("top", 0 + "%")
            } else {
                signin?.style.setProperty("top", 200 + "%")
                setShowPassword1(false)
                setShowPassword2(false)
                setformData({
                    email: "",
                    password: "",
                    confirmpassword: ""
                })
            }
        }
    }, [location])

    

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
            const res = await fetch(process.env.REACT_APP_BACKEND_URL+`/auth/sendOtp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata)
            });

            const response = await res.json();
            console.log(response)
            if (res.ok) {
                setShowOtpPage(true)
                toastSuccess(response.message);
            } else {
                signupBtnFailedAnimation();
                toastFailed(response.message);
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
    const handleResetPassword = async (event) => {
        const btn = document.getElementById("reset-btn")
        btn.classList.add("btn-click")
        setTimeout(() => {
            btn.classList.remove("btn-click")
        }, 300);
        event.preventDefault()
        console.log("i am in handle reset password function")
        try {
            const res = await fetch(`http://localhost:8000/auth/resetpassword`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${tokenToResetPassword}`,
                },
                body: JSON.stringify(formdata),
            })
            // console.log(await res.json())
            const data = await res.json()
            console.log(data)
            if (res.ok) {
                setIsOtpVerified(false);
                setShowOtpPage(false);
                navigate("/signin")
                setTimeout(() => {
                    props.setIsPasswordResetSuccesful("")
                }, 5000);
                toastSuccess(data.message);
            }
        } catch (error) {
            console.log(error)
            toastFailed(error)
        }
    }
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    
    const handlePaste = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const pastedText = event.clipboardData.getData('text/plain');
    
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
    return (<>

        {
            !isAuthenticated && (
                <>
                    <div className="outer-box mt-[100px] mb-5" id="forgotpage-signin">
                    
                        
                       
                        <div className="inner-box mx-auto my-auto">
                            {
                                showOtpPage ?
                                    (
                                        isOtpVerified ?
                                            <>
                                                <header className="signup-header">
                                                    <h1>Reset Password</h1>
                                                </header>
                                                <main className="signup-body">
                                                    <form onSubmit={handleResetPassword} className="form">

                                                        <p>
                                                            <label for="fname" className="field">New Password</label>
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
                                                                    showPassword1 ? <FontAwesomeIcon icon={faEye}  onClick={() => setShowPassword1(!showPassword1)}/>: <FontAwesomeIcon icon={faEye}  onClick={() => setShowPassword1(!showPassword1)}/>
                                                                }
                                                            </div>
                                                        </p>
                                                        <p>
                                                            <label for="fname" className="field">Check Password</label>
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
                                                                    showPassword2 ? <FontAwesomeIcon icon={faEye}  onClick={() => setShowPassword2(!showPassword2)}/>: <FontAwesomeIcon icon={faEye}  onClick={() => setShowPassword2(!showPassword2)}/>
                                                                }
                                                            </div>
                                                            {formdata.password !== formdata.confirmpassword && (
                                                                <span className="password-mismatch">*Passwords do not match</span>
                                                            )}
                                                        </p>
                                                        <p className="centering">
                                                            <input type="submit" id="reset-btn" value="Reset Password" className="create-account" />
                                                        </p>
                                                    </form>
                                                </main>


                                            </>
                                            :
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

                                    )
                                    :
                                    <>
                                        <div className="row">
                                            <h1 style={{ marginBottom: "10px" }}>Forgot Password</h1>
                                            <h6 className="information-text">Enter your registered email to reset your password.</h6>
                                            <div className="form-group">
                                                <form className="form" onSubmit={handleSubmit}>
                                                    <label for="fname" className="field">Enter Your Email</label>
                                                    <input
                                                        type="email"
                                                        className="fname"
                                                        name="email"
                                                        value={formdata.email}
                                                        onChange={InputEvent}
                                                        title="Enter a valid email address"
                                                        required />
                                                    <p className='centering'>
                                                        <input type="submit" id="verify-otp-btn" value="Reset Password" className='create-account' />
                                                    </p>
                                                </form>
                                            </div>
                                            <div className="footer">
                                                <p>New here? <NavLink to="/signup">Sign Up.</NavLink></p>
                                                <p>Already have an account? <NavLink to="/signin">Sign In.</NavLink></p>
                                            </div>
                                        </div>

                                    </>
                            }


                        </div>
                    </div>

                </>
            )
        }


    </>
    )
}

export default ForgotPassword
