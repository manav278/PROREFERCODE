import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReferralForm from "./components/ReferralForm";
import "./App.css";
import Home from "./components/Dashboard/Home";
import MainHome from "./components/MainHome";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    // <div>
    // <MainNav></MainNav>
    //   <Home></Home>
    //   <ReferralForm></ReferralForm>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainHome />} />
        <Route path="/form" element={<ReferralForm />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
