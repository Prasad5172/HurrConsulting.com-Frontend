import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SigninAndSignup.css";
import { GoogleLogin } from "@react-oauth/google";
import { decodeJwt } from "jose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toastFailed, toastSuccess } from "../Util/ToastFunctions";
import { storeInLocalStorage } from "../Util/LocalStorage";
import { AuthContext } from "../context/AuthContext";


const SinginPage = (props) => {

  const {setUserName,setDisplayProfile,setAuthenticated,setProfile,setAdmin,isAuthenticated} = useContext(AuthContext);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setSignInData((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const btn = document.getElementById("sign-in-btn");
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 300);
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInData),
        }
      );
      var data = await res.json();
      if (res.ok) {
        storeInLocalStorage(data);
        setAuthenticated(true);
        setUserName(data.name)
        navigate("/");
        toastSuccess(data.message);
        setAdmin(data.is_admin)
        // Reset the form input fields by setting signInData to its initial values
        setSignInData({
          email: "",
          password: "",
        });
      } else {
        signinBtnFailedAnimation();
        toastFailed(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signinBtnFailedAnimation = () => {
    const failed = document.getElementById("sign-in-btn");
    setTimeout(() => {
      failed.classList.add("shake-button");
    }, 500);
    setTimeout(() => {
      failed.classList.remove("shake-button");
    }, 1000);
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const pastedText = event.clipboardData.getData("text/plain");

    const input = event.target;
    const inputType = input.type; // Store the original input type
    input.type = "text"; // Temporarily change input type to "text"
    var newValue = value.substring(0, input.selectionStart) + pastedText;
    if (name !== "email") {
      newValue = newValue + value.substring(input.selectionEnd);
    }
    setSignInData((prevData) => ({
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
      {

      }
      {!isAuthenticated && (
        <>
          <div className="outer-box mt-[100px]" id="signin-page">
            <div className="inner-box mx-auto ">
              <header className="signup-header">
                <h1>Signin</h1>
                <p>It just take 30 seconds</p>
              </header>
              <main className="signup-body">
                <form onSubmit={handleSubmit} className="form">
                  <p>
                    <label htmlFor="email" className="field">
                      Enter Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="email"
                      name="email"
                      value={signInData.email}
                      onChange={inputEvent}
                      required
                      onPaste={handlePaste}
                    />
                  </p>
                  <p>
                    <label htmlFor="password" className="field">
                      Password
                    </label>
                    <div>
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        id="password"
                        className="password"
                        name="password"
                        value={signInData.password}
                        onChange={inputEvent}
                        required
                        onPaste={handlePaste}
                      />
                      {showPassword ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </div>
                  </p>
                  <p className="forgotpassword">
                    <NavLink to="/forgotpassword">Forgotpassword?</NavLink>
                  </p>
                  <p className="centering ">
                    <input
                      type="submit"
                      id="sign-in-btn"
                      value="Sign in"
                      className="create-account button"
                    />
                  </p>
                </form>
              </main>
              <div className="centering w-full flex justify-center">
                <GoogleLogin
                  width={"100% "}
                  onSuccess={async (credentialResponse) => {
                    const { credential } = credentialResponse;
                    console.log(credential);
                    var payload = credential
                      ? decodeJwt(credential)
                      : undefined;
                    console.log(payload);
                    if (payload) {
                      const res = await fetch(
                        process.env.REACT_APP_BACKEND_URL + `/auth/signin`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(payload),
                        }
                      );
                      const data = await res.json();
                      console.log(data);
                      if (res.ok) {
                        navigate("/");
                        setUserName(payload.given_name);
                        setDisplayProfile(true);
                        setAuthenticated(true);
                        setProfile(payload.picture);
                        setAdmin(data.is_admin)
                        window.localStorage.setItem("token", data.data.token);
                        toastSuccess(data.message);
                      } else {
                        signinBtnFailedAnimation();
                        toastFailed(data.message);
                      }
                    }
                  }}
                  onError={(error) => {
                    toastFailed(error);
                  }}
                />
              </div>

              <footer className="signup-footer">
                <p>
                  Not Register ?{" "}
                  <NavLink to="/signup">Click here to register</NavLink>
                </p>
              </footer>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SinginPage;
