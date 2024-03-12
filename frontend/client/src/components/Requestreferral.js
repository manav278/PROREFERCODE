import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNav from "./MainNav";
import Footer from "./Footer";
import "../App.css";
import referral from "./assets/referral.jpg";
export default function Requestreferral() {
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [url, setUrl] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const apiCall = async () => {
    try {
      await axios.get("http://localhost:3003/api/getCompany").then((res) => {
        console.log(res.data);
        if (res.data.message === "Server Error") {
          alert("Server Error");
        }
        setCompanyList(res.data);
        setLoading(false);
      });
    } catch (e) {
      console.log("Error occured: ", e);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  const handleSelect = (event) => {
    setSelectedCompany(event.target.value);
  };
  async function submit(e) {
    e.preventDefault();
    let response = null;
    if (selectedCompany == null) {
      alert("Please select company.");
    } else {
      try {
        response = await axios
          .post("http://localhost:3003/api/requestref", {
            position,
            selectedCompany,
            country,
            url,
          })
          .then((res) => {
            if (res.data.message === "Information taken successfully.") {
              alert("Information taken successfully.");
            }
            if (res.data.message === "Server Error") {
              alert("Please Try Again Later.");
            }
            if (
              res.data.message ===
              "Please fill the values properly.Some values are Null"
            ) {
              alert("Please fill the values properly.Values are Null");
            }
          });
      } catch (e) {
        console.log("Error Generated : ", e);
      }
    }
  }
  return (
    <>
      <MainNav></MainNav>
      <div className="container text-center">
        <div className="row text-light">
          <div className="col-12">
            <h1 className="text-primary" style={{marginTop:"2%"}}>Apply for Referral
            </h1>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row text-dark">
          <div className="col-lg-6 col-12">
            <img src={referral} alt="Feedback" className="img-fluid"></img>
          </div>
          <div className="col-lg-6 col-12">
            <form
              action="POST"
              style={{ borderRadius: "8px" }}
              className="px-3 py-3 bg-color-feedbackform"
            >
              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="position" className="form-label">
                  Referral Position
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="position"
                  placeholder="Enter Referral Position"
                  name="position"
                  onChange={(event) => setPosition(event.target.value)}
                />
              </div>
              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="referral_position" className="form-label">
                  Select Company for Referral
                </label>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="my-1">
                    <div>
                      <select
                        value={selectedCompany}
                        onChange={handleSelect}
                        className="bg-dark"
                        style={{
                          color: "#888",
                          fontWeight: "lighter",
                          borderRadius: "5px",
                          padding: "3px",
                        }}
                      >
                        <option value="">Company</option>
                        {companyList
                          ? companyList.map((value) => (
                              <option key={value.id} value={value.id}>
                                {value.company}
                              </option>
                            ))
                          : "None"}
                      </select>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="country" className="form-label">
                  Referral Country
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="country"
                  placeholder="Enter Referral Country"
                  name="country"
                  onChange={(event) => setCountry(event.target.value)}
                />
              </div>
              <div className="mb-3" style={{ marginTop: "2%" }}>
                <label for="url" className="form-label">
                  Job portal URL
                </label>
                <input
                  type="text"
                  className="form-control text-light bg-dark feedback-placeholder"
                  id="url"
                  placeholder="Enter Job portal URL"
                  name="url"
                  onChange={(event) => setUrl(event.target.value)}
                />
              </div>
              <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                <button
                  type="submit"
                  onClick={submit}
                  className="btn-feedback-form bg-success"
                  style={{
                    borderRadius: "5px",
                    paddingLeft: "3%",
                    paddingRight: "3%",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
