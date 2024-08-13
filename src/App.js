import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./authentication/SignupPage";
import SigninPage from "./authentication/SigninPage";
import ForgotPassword from "./authentication/ForgotPassword";
import ErrorPage from "./Error/ErrorPage";
import Home from "./Pages/HomePage/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./context/AuthContext";
import Service from "./Pages/Service/Service";
import Resource from "./Pages/Resource/Resource";
import Testimonials from "./Pages/Testimonials/Testimonials";
import ContactUsPage from "./Pages/ContactUs/ContactUsPage";
import About from "./Pages/AboutUs/About";
import Fotter from "./Components/Fotter/Fotter";
import AdminPage from "./Pages/Admin/AdminPage";
import { HashLoader } from "react-spinners";
import { toastFailed } from "./Util/ToastFunctions";
import "./App.css";
import AppointmentPage from "./Pages/Apponiment/AppointmentPage";
import Events from "./Pages/Admin/Events/Events";
import Users from "./Pages/Admin/Users/Users";
import RedirectPayment from "./Pages/PaymentRedirect/RedirectPayment";
import Request from "./Pages/Admin/Request/Request";
import Payments from "./Pages/Admin/Payments/Payments";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [displayProfile, setDisplayProfile] = useState(false);
  const [profile, setProfile] = useState(
    "https://images.unsplash.com/photo-1620554600249-636b81e27699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291cmNlfGVufDB8fDB8fHww"
  );
  const [isAdmin, setAdmin] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsLoading(true)
      if (token) {
        try {
          const res = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/auth/verifyToken`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();
          const user = data.data;
          // console.log(user);
          // console.log(data.code);
          if (data.code === 200) {
            setAuthenticated(true);
            setUserName(user.first_name);
            if (user.image_url) {
              setDisplayProfile(true);
            }
            setProfile(user.image_url);
            setAuthenticated(true);
            setAdmin(user.is_admin);
          }
        } catch (error) {
          console.log(error);
          toastFailed(error.message);
        }
      }
      setIsLoading(false);
    };
    
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        userName,
        setUserName,
        isAdmin,
        setAdmin,
        isLoading,
        setIsLoading,
        displayProfile,
        setDisplayProfile,
        profile,
        setProfile,
      }}
    >
      <div className="overflow-x-hidden h-screen">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resource" element={<Resource />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/contact" element={<ContactUsPage />} />
          <Route exact path="/appointment" element={<AppointmentPage />} />
          <Route exact path="/admin" element={isAdmin ? <AdminPage /> : <ErrorPage />}>
            <Route exact path="/admin" element={isAdmin ? <Events /> : <ErrorPage />}/>
            <Route exact path="users" element={isAdmin ? <Users /> : <ErrorPage />}/>
            <Route exact path="request" element={isAdmin ? <Request /> : <ErrorPage />}/>
            <Route exact path="payments" element={isAdmin ? <Payments /> : <ErrorPage />}/>
          </Route>
          <Route exact path="/redirect-to-checkout/:id" element={<RedirectPayment/>}/>
          <Route exact path="/signup" element={
              !isAuthenticated ? (
                <SignupPage />
              ) : (
                <ErrorPage />
              )
            }
          />
          <Route exact path="/signin" element={
              !isAuthenticated ? (
                <SigninPage  />
              ) : (
                <ErrorPage />
              )
            }
          />
          <Route
            exact
            path="/forgotpassword"
            element={
              !isAuthenticated ? (
                <ForgotPassword />
              ) : (
                <ErrorPage />
              )
            }
          />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Fotter />
        <ToastContainer position="top-right" />
        {isLoading && (
          <div className="loading-spinner fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
            <HashLoader size={50} color={"#123abc"} loading={true} />
          </div>
        )}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
