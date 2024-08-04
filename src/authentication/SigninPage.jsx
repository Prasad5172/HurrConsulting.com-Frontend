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
import { HashLoader } from "react-spinners";


const SinginPage = () => {
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
  
    setIsLoading(true);
    try {
      const res = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });
  
      if (!res.ok) {
        // If response is not OK, handle it as a failure
        const data = await res.json();
        signinBtnFailedAnimation();
        toastFailed(data.message);
        return; // Early exit to prevent setting loading state to false
      }
  
      const data = await res.json();
      storeInLocalStorage(data);
      setAuthenticated(true);
      setUserName(data.name);
      navigate("/");
      toastSuccess(data.message);
      setAdmin(data.is_admin);
  
      // Reset the form input fields
      setSignInData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      signinBtnFailedAnimation();
      toastFailed("Failed to connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  

  const signinBtnFailedAnimation = () => {
    const failed = document.getElementById("sign-in-btn");
    setTimeout(() => {
      failed?.classList.add("shake-button");
    }, 500);
    setTimeout(() => {
      failed?.classList.remove("shake-button");
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
      { !isAuthenticated && (
        <>
          <div className="outer-box 2xl:mt-[72px] xl:mt-[72px] lg:mt-[72px]  h-screen flex justify-center items-center" id="signin-page">
            <div className="inner-box mx-auto ">
              <header className="signup-header">
                <h1>Signin</h1>
                <p className="text-[18px]">It just take 30 seconds</p>
              </header>
              <main className="signup-body">
                <form onSubmit={handleSubmit} className="form">
                  <p className="items-center">
                    <label htmlFor="email" className="text-black font-semibold text-[20px] block ">
                      Enter Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="email w-11/12 rounded-md"
                      name="email"
                      value={signInData.email}
                      onChange={inputEvent}
                      required
                      onPaste={handlePaste}
                    />
                  </p>
                  <p>
                    <label htmlFor="password" className="field text-[20px] font-bold">
                      Password
                    </label>
                    <div>
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        id="password"
                        className="password w-11/12 rounded-md"
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
                  <p className="pr-6 mt-4 mb-1 text-[#0091ff] no-underline text-[20px] flex justify-end hover:underline ">
                    <NavLink to="/forgotpassword">Forgotpassword?</NavLink>
                  </p>
                  <p className="">
                    <input
                      type="submit"
                      id="sign-in-btn"
                      value="Sign in"
                      className="create-account button text-[18px]"
                    />
                  </p>
                </form>
              </main>
              <div className="mt-2 w-full flex justify-center">
                <GoogleLogin
                  width={"100%"}
                  onSuccess={async (credentialResponse) => {
                    const { credential } = credentialResponse;
                    console.log(credential);
                    var payload = credential
                      ? decodeJwt(credential)
                      : undefined;
                    console.log(payload);
                      const res = await fetch(
                        process.env.REACT_APP_BACKEND_URL + `/auth/signin`,
                        {
                          method: "POST",
                          headers: {
                            Authorization: `Bearer ${credential}`,
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
                        setAdmin(data.is_admin);
                        window.localStorage.setItem("token", data.data.token);
                        toastSuccess(data.message);
                      } else {
                        signinBtnFailedAnimation();
                        toastFailed(data.message);
                      }
                  }}
                  onError={(error) => {
                    toastFailed(error);
                  }}
                />
              </div>

              <footer className="signup-footer flex justify-center">
                <p className="inline">
                  Not Register ?{" "}
                  <NavLink to="/signup" >Click here to register</NavLink>
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
