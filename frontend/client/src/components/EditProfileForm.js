import React from "react";
import { useState } from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";
const EditProfileForm = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleDismiss = () => {
    setShowAlert(false);
  };

  const companyList = [
    { company: "Amazon" },
    { company: "Microsoft" },
    { company: "Google" },
    { company: "Netflix" },
    { company: "Meta" },
  ];
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelect = (event) => {
    setSelectedCompany(event.target.value);
  };
  return (
    <div>
      <MainNav />
      {showAlert && (
      <div class="alert alert-danger alert-dismissible fade show my-1" role="alert" style={{borderRadius:'0'}}>
          <div>
            <p style={{fontSize:'85%'}}>
              Please provide your employee credentials only if you are currently
              employed at a company. If you do provide them, you'll receive
              referral requests tailored to your profile.
            </p>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={handleDismiss}
            ></button>
          </div>
      </div>
      )}
      <div style={{ textAlign: "center", color: "#0275d8", marginTop: "3%", marginBottom:'3%'}}>
        <h3>Edit Profile</h3>
      </div>
      <div className="container text-light px-4" style={{ marginTop: "3%", marginBottom:'3%'}}>
        <div className="row gx-5s">
          <div className="col-md-6 col-12 align-items-center">
            <div className="col-10 text-center" style={{ marginBottom: "3%" }}>
              <h4 className="merriweather-regular">Applicant Credentials</h4>
            </div>

            {/* ----------------------------- */}
            <div
              className="col-10 bg-warning p-4 bg-color-feedbackform text-dark"
              style={{ borderRadius: "8px" }}
            >
              <form>
                <div className="my-2">
                  <label for="phone" class="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    class="form-control text-light bg-dark feedback-placeholder"
                    id="phone"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="my-2">
                  <label for="personalEmail" class="form-label">
                    Personal Email
                  </label>
                  <input
                    type="email"
                    class="form-control text-light bg-dark feedback-placeholder"
                    id="personalEmail"
                    placeholder="Enter Personal Email"
                  />
                </div>
                <div className="my-2">
                  <label for="location" class="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    class="form-control text-light bg-dark feedback-placeholder"
                    id="location"
                    placeholder="Enter Location"
                  />
                </div>
                <div className="my-4">
                  <button
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
          {/* <div className="col-2"></div> */}
          <div className="col-md-6 col-12">
            <div className="col-10 text-center" style={{ marginBottom: "3%" }}>
              <h4 className="merriweather-regular">Employee Credentials</h4>
            </div>

            {/* ----------------------------- */}

            <div
              className="col-10 bg-warning p-4 bg-color-feedbackform text-dark"
              style={{ borderRadius: "8px" }}
            >
              <form>
                <div className="my-2">
                  <label for="workEmail" class="form-label">
                    Work Email
                  </label>
                  <input
                    type="email"
                    class="form-control text-light bg-dark feedback-placeholder"
                    id="workEmail"
                    placeholder="Enter Work Email"
                  />
                </div>
                <div className="my-2">
                  <label for="workPosition" class="form-label">
                    Work Position
                  </label>
                  <input
                    type="text"
                    class="form-control text-light bg-dark feedback-placeholder"
                    id="workPosition"
                    placeholder="Enter Work Position"
                  />
                </div>
                <div className="my-4">
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
                      {companyList.map((value, ind) => (
                        <option value={ind}>{value.company}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="my-4">
                  <button
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditProfileForm;
