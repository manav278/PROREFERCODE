import React, { useEffect,useState } from "react";
import axios from "axios";
import "../../App.css";
import CustomNavbar from "./Navbar";
import MainNav from "../MainNav";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { Navigate } from "react-router-dom";
export default function Home() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3003/api/dashboard");
      // console.log(response);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      <MainNav />
      {/* ----------------------------------------- */}
      <div className="container-fluid dash">
        {/* ----------------------------------------- */}

        <div class="container px-4 text-center">
          <div class="row gx-2">
            <div class="col-12">
              <div class="p-4 text-white">
                <h2>Referral Revolution: Shaping Tomorrow's Workforce Today</h2>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------- */}
        <div
          class="container-fluid px-4 text-center"
          style={{ height: "auto" }}
        >
          <div class="row gx-4" style={{ marginBottom: "4%" }}>
            {/* *********************************** */}
            {/* col-lg-4 col-md-5 col-sm-6 */}
            <div class="col-md-4 col-12">
              <div
                class="p-3 bg-secondary dashinner2 text-white"
                style={{
                  height: "96%",
                  border: "5px solid #6C757D",
                  borderRadius: "8px",
                }}
              >
                <Link to="/form">
                  <button
                    style={{ width: "80%" }}
                    type="button"
                    class="btn btn-primary border-light"
                  >
                    Edit Profile
                  </button>
                </Link>

                <div style={{ display: "grid", placeItems: "center" }}>
                  <table className="table1">
                    <tr>
                      <td>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Name</p>
                      </td>
                      <td>
                        <p>{userData.First_Name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Location</p>
                      </td>
                      <td>
                        <p>{userData.COMPANY_LOCATION}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Total Referrals Requested</p>
                      </td>
                      <td>
                        <p>{userData.Total_Referrals_Requested}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Total Referrals Received</p>
                      </td>
                      <td>
                        <p>{userData.Referrals_Reviewed_ThisMonth}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Monthly Requests Received</p>
                      </td>
                      <td>
                        <p>{userData.Referrals_Reviewed_ThisMonth}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Monthly Requests Sent</p>
                      </td>
                      <td>
                        <p>{userData.Referrals_Requested_ThisMonth}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Last Referral Date</p>
                      </td>
                      <td>
                        <p>{userData.Last_Referral_Date}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Warning</p>
                      </td>
                      <td>
                        <p>{userData.Warning}</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            {/* *********************************** */}
            {/* col-lg-8 col-md-7 col-sm-6 */}
            <div class="col-md-8 col-12">
              <div
                class="p-3 bg-secondary dashinner2"
                style={{
                  height: "100%",
                  border: "5px solid #6C757D",
                  borderRadius: "8px",
                }}
              >
                <CustomNavbar />
              </div>
            </div>

            {/* *********************************** */}
          </div>
        </div>
        {/* ----------------------------------------- */}
      </div>
      <Footer></Footer>
      {/* ----------------------------------------- */}
    </div>
  );
}
