import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import Footer from "./Footer";
import axios from "axios";
import MyContext from "../MyContext";

const EditProfileForm = () => {
  const { handleLogout } = useContext(MyContext);
  const navigate = useNavigate();
  const [globalPersonalEmail, setGlobalPersonalEmail] = useState("");
  const [isPersonalEmailChanged, setIsPersonalEmailChanged] = useState(false);
  const [getotpButtonClicked, setGetOtpButtonClicked] = useState(false);
  const [companyList, setCompanyList] = useState([]);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(true);
  const [loading, setLoading] = useState(true);

  const [showAlert, setShowAlert] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const [mobileNumber, setMobileNumber] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [location, setLocation] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleDismiss = () => {
    setShowAlert(false);
  };

  const getDetails = async () => {
    try {
      await axios
        .post("http://localhost:3003/api/getEditProfileDetails")
        .then((res) => {
          // console.log(res.data);
          res.data.Mobile_Number && setMobileNumber(res.data.Mobile_Number);
          res.data.Personal_Email && setPersonalEmail(res.data.Personal_Email);
          res.data.Personal_Email &&
            setGlobalPersonalEmail(res.data.Personal_Email);
          res.data.COMPANY_LOCATION && setLocation(res.data.COMPANY_LOCATION);
          res.data.Work_Email && setWorkEmail(res.data.Work_Email);
          res.data.Position && setPosition(res.data.Position);
          res.data.Company_ID && setSelectedCompany(res.data.Company_ID);
        });
    } catch (e) {
      console.log("Error occured: ", e);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  const apiCall = async () => {
    try {
      await axios.get("http://localhost:3003/api/getCompany").then((res) => {
        // console.log(res.data);
        setCompanyList(res.data);
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

  const handleSelect = (event) => {
    // console.log(event.target.value);
    setSelectedCompany(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobileNumber(event.target.value);
  };

  useEffect(() => {
    if (globalPersonalEmail !== personalEmail) {
      setIsPersonalEmailChanged(true);
      setOtpVerified(false);
    } else setIsPersonalEmailChanged(false);
  }, [personalEmail, globalPersonalEmail]);

  const handlePersonalEmailChange = async (event) => {
    setPersonalEmail(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleWorkEmailChange = (event) => {
    setWorkEmail(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleGetOTP = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:3003/api/requestOtp", { personalEmail })
        .then((res) => {
          if (res.data.message === "Otp sent") {
            setGetOtpButtonClicked(true);
            alert("OTP sent successfully to your changed Email address");
          }
        });
    } catch (error) {
      console.log("Error requesting OTP: ", error);
    }
  };

  const handleSubmitOtp = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:3003/api/verifyOtp", { otp })
        .then((res) => {
          if (res.data.message === "Otp verified") {
            alert("OTP verified successfully");
            setGetOtpButtonClicked(false);
            // setIsPersonalEmailChanged(false);
            setOtpVerified(true);
          } else {
            alert("OTP incorrect! Try again");
          }
        });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleApplicantSubmit = async (e) => {
    try {
      e.preventDefault();
      if (otpVerified === false) {
        alert("Verify OTP first, as your email is changed");
        return;
      }
      if (mobileNumber && personalEmail && location) {
        await axios
          .post("http://localhost:3003/api/updateApplicant", {
            mobileNumber,
            personalEmail,
            location,
            isPersonalEmailChanged,
          })
          .then((res) => {
            if (res.data.message === "Update successful") {
              if (isPersonalEmailChanged) {
                alert(
                  "Applicant details successfully updated, please login again"
                );
                setIsPersonalEmailChanged(false);
                setOtpVerified(true);
                handleLogout();
                navigate("/login");
                // <Navigate to="/login" />
              } else {
                alert("Applicant details successfully updated");
              }
            } else if (
              res.data.message === "Internal server error from backend"
            )
              alert("Error updating details");
          });
      } else {
        alert("Fields cannot be empty");
      }
    } catch (error) {
      alert("Error updating details");
      console.log(error);
    }
  };

  const handleEmployeeSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        (selectedCompany && position && workEmail) ||
        (!selectedCompany && !position && !workEmail)
      ) {
        await axios
          .post("http://localhost:3003/api/updateEmployee", {
            workEmail,
            position,
            selectedCompany,
          })
          .then((res) => {
            if (res.data.message === "Update successful")
              alert("Employee details successfully updated");
            else if (res.data.message === "Internal server error from backend")
              alert("Error updating details");
          });
      } else {
        alert("Correct format : (I) Either all field empty or filled ");
      }
    } catch (error) {
      alert("Error updating details");
      console.log(error);
    }
  };

  return (
    <div>
      <MainNav />
      {showAlert && (
        <div
          class="alert alert-danger alert-dismissible fade show my-1"
          role="alert"
          style={{ borderRadius: "0" }}
        >
          <div>
            <p style={{ fontSize: "85%" }}>
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
      <div
        style={{
          textAlign: "center",
          color: "#0275d8",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <h3>Edit Profile</h3>
      </div>
      <div
        className="container text-light px-4"
        style={{ marginTop: "3%", marginBottom: "3%" }}
      >
        <div className="row gx-5s">
          <div
            className="col-md-6 col-12 align-items-center my-md-1 my-4 mx-md-0 mx-3"
            style={{ marginLeft: "7%" }}
          >
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
                    value={mobileNumber}
                    onChange={handleMobileChange}
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
                    value={personalEmail}
                    onChange={handlePersonalEmailChange}
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
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Enter Location"
                  />
                </div>
                {isPersonalEmailChanged && !getotpButtonClicked && (
                  <div className="my-4">
                    <button
                      className="btn-primary text-light bg-success"
                      style={{
                        borderRadius: "5px",
                        paddingLeft: "3%",
                        paddingRight: "3%",
                        paddingTop: "2%",
                        paddingBottom: "2%",
                      }}
                      onClick={handleGetOTP}
                    >
                      Get OTP
                    </button>
                  </div>
                )}
                {/* --------------------------------------------------------------------- */}
                {isPersonalEmailChanged && getotpButtonClicked && (
                  <div className="my-4">
                    <div className="row">
                      <input
                        className="col-5"
                        type="text"
                        class="form-control text-light bg-dark feedback-placeholder mx-3"
                        id="otp"
                        value={otp}
                        onChange={handleOtpChange}
                        placeholder="Enter OTP"
                        style={{ width: "50%" }}
                      />
                      <button
                        className="col-5 btn-primary text-light bg-success"
                        style={{
                          borderRadius: "5px",
                          paddingLeft: "3%",
                          paddingRight: "3%",
                          paddingTop: "2%",
                          paddingBottom: "2%",
                        }}
                        onClick={handleSubmitOtp}
                      >
                        Verify OTP
                      </button>
                    </div>
                  </div>
                )}
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
                    onClick={handleApplicantSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="col-2"></div> */}
          <div className="col-md-6 col-12 my-md-1 my-4 mx-md-0 mx-3">
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
                    value={workEmail}
                    onChange={handleWorkEmailChange}
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
                    value={position}
                    onChange={handlePositionChange}
                    placeholder="Enter Work Position"
                  />
                </div>
                {loading ? (
                  <p>Loading...</p>
                ) : (
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
                    onClick={handleEmployeeSubmit}
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
