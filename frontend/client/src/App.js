import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// import { BrowserRouter ,Route, Redirect, Switch } from 'react-router-dom';
import EditProfileForm from "./components/EditProfileForm";
import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Dashboard/Home";
import MainHome from "./components/MainHome";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import axios from "axios";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkLoginStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get("/api/verify");
        if (response.status === 200) {
          setLoggedIn(true);
        }
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainHome />} />
        <Route path="/form" element={<EditProfileForm />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={loggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn} />}
        />
        {/* <Route
          path="/dashboard"
          element={loggedIn ? <Home /> : <Navigate to="/login" />}
        /> */}
        <Route path="/dashboard" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
