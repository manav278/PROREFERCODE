import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import login from "./assets/Login.jpg";
import MainNav from "./MainNav";
import Footer from "./Footer";
const CompanyDetailsForm = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  updateFormData,
}) => {
  const [companyList, setCompanyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const apiCall = async () => {
    try {
      await axios.get("http://localhost:3003/api/getCompany").then((res) => {
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
  // -------------------------------------
  const handleSelect = (event) => {
    setSelectedCompany(event.target.value);
  };
  // -------------------------------------
  useEffect(() => {
    updateFormData({ ...formData, selectedcompany: selectedCompany });
    console.log(selectedCompany);
  }, [selectedCompany]);
  return (
    <div>
      <MainNav></MainNav>
      <div className="container my-5">
        <div className="row">
          <div
            className="col-md-6"
            style={{
              padding: "0%",
              backgroundColor: "white",
              display: "grid",
              placeContent: "center",
            }}
          >
            <img src={login} className="img-fluid" alt="Img"></img>
          </div>
          <div
            className="col-md-6 my-md-0 my-3 text-dark bg-login-container"
            style={{ padding: "8%" }}
          >
            <div className="row">
              <div className="col-12">
                <h1>Join us today!</h1>
                <div>
                  <p>Sign up now to become a member.</p>
                  <h3>Company Details</h3>
                  <div
                    class="alert alert-danger my-3"
                    role="alert"
                    style={{ fontSize: "small", padding: "8px" }}
                  >
                    Enter below credentials only if you are an existing employee
                    at a company
                  </div>
                </div>
              </div>
              <div className="col-12">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      for="workemail"
                      style={{ marginTop: "0.5%" }}
                      className="form-label font-family-label"
                    >
                      Work Email
                    </label>
                    <input
                      className="form-control text-light bg-dark createcampaign-placeholder"
                      type="email"
                      placeholder="Work Email"
                      id="workemail"
                      name="workemail"
                      value={formData.workemail}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div style={{ marginTop: "2%" }}>
                    <label for="referral_position" className="form-label">
                      Company Name
                    </label>
                    {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <div className="mb-3">
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
                            <option value="">Other</option>
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
                  {selectedCompany === null || selectedCompany === "" ? (
                    <div className="mb-3">
                      <label
                        for="companyname"
                        style={{ marginTop: "2%" }}
                        className="form-label font-family-label"
                      >
                        Company Name
                      </label>
                      <input
                        className="form-control text-light bg-dark createcampaign-placeholder"
                        type="text"
                        placeholder="Company Name"
                        id="companyname"
                        name="companyname"
                        value={formData.companyname}
                        onChange={handleChange}
                      ></input>
                    </div>
                  ) : null}
                  <div className="mb-3">
                    <label
                      for="position"
                      style={{ marginTop: "0.5%" }}
                      className="form-label font-family-label"
                    >
                      Company Position
                    </label>
                    <input
                      className="form-control text-light bg-dark createcampaign-placeholder"
                      type="text"
                      placeholder="Company Position"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label
                      for="location"
                      style={{ marginTop: "0.5%" }}
                      className="form-label font-family-label"
                    >
                      Company Location
                      <span style={{ fontWeight: "lighter" }}>(Country)</span>
                    </label>
                    <input
                      className="form-control text-light bg-dark createcampaign-placeholder"
                      type="text"
                      placeholder="Country Name"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div>
                    <button
                      className="btn-createcampaign-form bg-success mx-2"
                      style={{
                        borderRadius: "5px",
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: "1%",
                        paddingBottom: "1%",
                        marginBottom: "2%",
                        marginTop: "2%",
                      }}
                      type="button"
                      onClick={prevStep}
                    >
                      Back
                    </button>
                    <button
                      className="btn-createcampaign-form bg-success"
                      style={{
                        borderRadius: "5px",
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: "1%",
                        paddingBottom: "1%",
                        marginBottom: "2%",
                        marginTop: "2%",
                      }}
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CompanyDetailsForm;
