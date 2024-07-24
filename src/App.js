import React,{useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes,Route } from "react-router-dom";
import SignupPage from "./authentication/SignupPage";
import SigninPage from "./authentication/SigninPage";
import ForgotPassword from "./authentication/ForgotPassword";
import ErrorPage from "./Error/ErrorPage";
import Home from "./Pages/HomePage/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './context/AuthContext';
import Service from "./Pages/Service/Service";
import Resource from "./Pages/Resource/Resource";
import Testimonials from "./Pages/Testimonials/Testimonials";
import ContactUsPage from "./Pages/ContactUs/ContactUsPage";
import About from "./Pages/AboutUs/About"
import Fotter from "./Components/Fotter/Fotter";
import AdminPage from "./Pages/Admin/AdminPage";

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
          <Route exact path='/' element={<><Home /></>}/>
          <Route exact path='/service' element={<Service />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/resource' element={<Resource />}/>
          <Route exact path='/testimonials' element={<Testimonials />}/>
          <Route exact path='/contact' element={<ContactUsPage />}/>
          <Route exact path='/admin' element={<AdminPage />}/>

          <Route exact path='/signup' element={!isAuthenticated ? <SignupPage isLoading={isLoading} /> : <ErrorPage />} />
          <Route exact path='/signin' element={!isAuthenticated ? <SigninPage isLoading={isLoading}  /> : <ErrorPage />} />
          <Route exact path='/forgotpassword' element={!isAuthenticated ? <ForgotPassword isLoading={isLoading}  /> : <ErrorPage />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
        <Fotter/>
        <ToastContainer position="top-right" />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
