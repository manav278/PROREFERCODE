import React, { useState, useEffect } from "react";
import axios from "axios";

const Company = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [storedData, setStoredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (event) => {
    if(document.getElementById('search').value!==""){
    setSearchTerm(document.getElementById('search').value);
    setCompanyList(storedData.filter(item => item.company.toLowerCase().includes(searchTerm.toLowerCase())));
    }else{
      setCompanyList(storedData);
    }
  };

  const apiCall = async () => {
    try {
      await axios.get("http://localhost:3003/api/getCompany").then((res) => {
        setCompanyList(res.data);
        setStoredData(res.data);
        setLoading(false);
        if (res.data.message === "Server Error") alert("Server Error");
      });
    } catch (e) {
      console.log("Error occured: ", e);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
    <input className="p-2 my-2" style={{color:'black', border:'none', borderRadius:'5px'}} type="text" id="search" placeholder="Search company" onChange={handleSearchChange}/>
    <div className="container">
      <div className="row">
      { loading ? (<p>Loading</p>) : (<div
          className="scrollable-list"
          style={{ maxHeight: "40vh", overflowY: "scroll" }}
        >
          <ul className="list-group">
            {companyList
              ? companyList.map((value, ind) => (
                  <li
                    className="list-group-item text-light my-1"
                    style={{ backgroundColor: "#172b3d" }}
                  >
                    {value.company}
                  </li>
                ))
              : "None"}
          </ul>
        </div>)
        
      }
      </div>
    </div>
    </div>
  );
};

export default Company;
