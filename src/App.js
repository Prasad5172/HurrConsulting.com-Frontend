import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import SignupPage from "./authentication/SignupPage";
import SigninPage from "./authentication/SigninPage";
import ForgotPassword from "./authentication/ForgotPassword";
import ErrorPage from "./Error/ErrorPage";
import Home from "./HomePage/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './context/AuthContext';
import AppointmentPage from "./Apponiment/AppointmentPage";


const App = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [isAuthenticated,setAuthenticated] = useState(true);
  const [userName, setUserName] = useState("Prasad");
  const [displayProfile, setDisplayProfile] = useState(true);
  const [profile,setProfile] = useState("https://images.unsplash.com/photo-1620554600249-636b81e27699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291cmNlfGVufDB8fDB8fHww");
  const [isAdmin,setAdmin] = useState(false)
  return (
    <AuthContext.Provider value={{isAuthenticated,setAuthenticated,userName,setUserName,isAdmin,setAdmin,isLoading,setIsLoading,displayProfile,setDisplayProfile,profile,setProfile}}>
      <div className="overflow-x-hidden h-screen">
        <header>
          <Navbar/>
        </header>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/appointment' element={<AppointmentPage />}/>
          <Route exact path='/signup' element={!isAuthenticated ? <SignupPage isLoading={isLoading} /> : <ErrorPage />} />
          <Route exact path='/signin' element={!isAuthenticated ? <SigninPage isLoading={isLoading}  /> : <ErrorPage />} />
          <Route exact path='/forgotpassword' element={!isAuthenticated ? <ForgotPassword isLoading={isLoading}  /> : <ErrorPage />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
        <ToastContainer position="top-right" />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
