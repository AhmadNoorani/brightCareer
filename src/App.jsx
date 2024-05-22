import React, { useLayoutEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home.jsx';
import AboutUs from './components/About/AboutUs';
import OnlineReg from './components/OnlineReg/OnlineReg';
import JobSeeker from './components/JobSeeker/JobSeeker';
import ContactUs from './components/Contact/ContactUs';
import IndustryWeServe from './components/IndustryServe/IndustryWeServe';
import Notice from './components/JobSeeker/Notice';
import Training from './components/JobSeeker/Training';
import UploadCv from './components/JobSeeker/UploadCv';
import CurrentJob from './components/JobSeeker/CurrentJob';
import Login from "./components/Signup/Login";
import Register from "./components/Signup/Register";
import ErrorPage from './components/ErrorPage';



const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/job-seeker" element={<JobSeeker />} />
            <Route path="/job-seeker/current-jobs" element={<CurrentJob />} />
            <Route path="/job-seeker/upload-cv" element={<UploadCv />} />
            <Route path="/job-seeker/notice" element={<Notice />} />
            <Route path="/job-seeker/training" element={<Training  />} />
            <Route path="/online-registration" element={<OnlineReg />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/industries-we-serve" element={<IndustryWeServe />} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

