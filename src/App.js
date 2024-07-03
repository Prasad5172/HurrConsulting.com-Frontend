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


const App = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [isAuthenticated,setAuthenticated] = useState(false);
  const [isPasswordResetSuccesful,setIsPasswordResetSuccesful] = useState(true);
  return (
      <div className="overflow-x-hidden h-screen">
        <header>
          <Navbar/>
        </header>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/signup' element={!isAuthenticated ? <SignupPage isLoading={isLoading} /> : <ErrorPage />} />
          <Route exact path='/signin' element={!isAuthenticated ? <SigninPage isLoading={isLoading} setAuthenticated={setAuthenticated} isAuthenticated={isAuthenticated} /> : <ErrorPage />} />
          <Route exact path='/forgotpassword' element={!isAuthenticated ? <ForgotPassword isLoading={isLoading} setIsPasswordResetSuccesful={setIsPasswordResetSuccesful} /> : <ErrorPage />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
        <ToastContainer position="top-right" />
      </div>
  );
};

export default App;
