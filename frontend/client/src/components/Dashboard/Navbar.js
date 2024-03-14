import React, { useState } from "react";
import Db from "./Db";
import Received from "./Received";
import Sent from "./Sent";
import Company from "./Company";
const CustomNavbar = () => {
  const [mode, setMode] = useState("Dashboard");

  const handleDashboardClick = () => {
    setMode("Dashboard");
  };
  const handleReceivedClick = () => {
    setMode("Received");
  };
  const handleSentClick = () => {
    setMode("Sent");
  };
  const handleCompanyClick = () => {
    setMode("Company");
  };

  const currentRequest=[
    {
      name:"Manav",
      company:"Amazon",
      age:"12",
      city:"baroda",
      date:"15/02/2024",
      url:"www.google.com",
      pos:"Full Stack Developer",
    },
    {
      name:"Manav",
      company:"Amazon",
      age:"12",
      city:"baroda",
      date:"15/02/2024",
      url:"www.google.com",
      pos:"Full Stack Developer",
    },
    {
      name:"Manav",
      company:"Amazon",
      age:"12",
      city:"baroda",
      date:"15/02/2024",
      url:"www.google.com",
      pos:"Full Stack Developer",
    },
    {
      name:"Manav",
      company:"Amazon",
      age:"12",
      city:"baroda",
      date:"15/02/2024",
      url:"www.google.com",
      pos:"Full Stack Developer",
    },
    {
      name:"Manav",
      company:"Microsoft Corporation",
      age:"12",
      city:"baroda",
      date:"15/02/2024",
      url:"www.google.com",
      pos:"Full Stack Developer",
    },
    {
      name:"Manav",
      company:"Amazon",
      age:"12",
      city:"baroda",
      date:"15/02/2024",
      url:"www.google.com",
      pos:"Full Stack Developer",
    }
  ]
  const pastRequest=[
    {
      name:"Aagam",
      company:"Amazon",
      age:"12",
      city:"baroda",
      result:"Not Replied",
      pos:"Java Developer",
      date:"15/02/2024",
    },
    {
      name:"Aagam",
      company:"Amazon",
      age:"12",
      city:"baroda",
      result:"Not Replied",
      pos:"Java Developer",
      date:"15/02/2024",
    },
    {
      name:"Aagam",
      company:"Amazon",
      age:"12",
      city:"baroda",
      result:"Not Replied",
      pos:"Java Developer",
      date:"15/02/2024",
    },
    {
      name:"Aagam",
      company:"Amazon",
      age:"12",
      city:"baroda",
      result:"Not Replied",
      pos:"React Developer",
      date:"15/02/2024",
    },
    {
      name:"Aagam",
      company:"Amazon",
      age:"12",
      city:"baroda",
      result:"Not Referred",
      pos:"DataScientist",
      date:"15/02/2024",
    },
    {
      name:"Aagam",
      company:"Amazon",
      age:"12",
      city:"baroda",
      result:"Referred",
      pos:"Machine Learning Engineer",
      date:"15/04/2024",
    }
  ]
  // const pastRequest=[]

  return (
    <div className="navbuttons" style={{height:'80%'}}>
      <div className="navbut">
        {mode === "Dashboard" ? (
          <button
            style={{ backgroundColor: "white", color: "#3b71ca" }}
            onClick={handleDashboardClick}
          >
            Dashboard
          </button>
        ) : (
          <button onClick={handleDashboardClick}>Dashboard</button>
        )}
        {mode === "Received" ? (
          <button
            style={{ backgroundColor: "white", color: "#3b71ca" }}
            onClick={handleReceivedClick}
          >
            Received
          </button>
        ) : (
          <button onClick={handleReceivedClick}>Received</button>
        )}
        {mode === "Sent" ? (
          <button
            style={{ backgroundColor: "white", color: "#3b71ca" }}
            onClick={handleSentClick}
          >
            Sent
          </button>
        ) : (
          <button onClick={handleSentClick}>Sent</button>
        )}
        {mode === "Company" ? (
          <button
            style={{ backgroundColor: "white", color: "#3b71ca" }}
            onClick={handleCompanyClick}
          >
            Company
          </button>
        ) : (
          <button onClick={handleCompanyClick}>Company</button>
        )}
      </div>
      <hr style={{ color: "white" }} />
      {mode === "Dashboard" && <Db />}
      {mode === "Received" && <Received currentRequest={currentRequest} pastRequest={pastRequest}/>}
      {mode === "Sent" && <Sent currentRequest={currentRequest}/>}
      {mode === "Company" && <Company />}
    </div>
  );
};

export default CustomNavbar;
