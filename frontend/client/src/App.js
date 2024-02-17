import { BrowserRouter,Routes, Route } from "react-router-dom";
import ReferralForm from "./components/ReferralForm";
import "./App.css";
import Home from "./components/Dashboard/Home";
import MainHome from "./components/MainHome";

function App() {
  return (
    // <div>
    // <MainNav></MainNav>
    //   <Home></Home>
    //   <ReferralForm></ReferralForm>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainHome/>}/>
        <Route path="/form" element=<ReferralForm/> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
