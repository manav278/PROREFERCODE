import React from "react";
import "../../App.css";
import CustomNavbar from "./Navbar";
export default function Home() {
  return (
    <div>
      {/* ----------------------------------------- */}
      <div className="container-fluid dash">
        {/* ----------------------------------------- */}

        <div class="container-fluid px-4 text-center">
          <div class="row gx-2">
            <div class="col-12">
              <div class="p-3 text-white">
                <h1>Title/Tagline of ProRefer</h1>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------- */}

        <div class="container-fluid px-4 text-center" style={{height:'auto'}}>
          <div class="row gx-2" >
            {/* *********************************** */}
            {/* col-lg-4 col-md-5 col-sm-6 */}
            <div class="col-md-4 col-sm-12">
              <div class="p-3 bg-secondary dashinner2 text-white" style={{height:'96%'}}>
                <button
                  style={{ width: "80%" }}
                  type="button"
                  class="btn btn-primary border-light"
                >
                  Edit Profile
                </button>
                <div style={{display:"grid", placeItems:"center"}}>
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
                      <p>Manav Jayesh Patel</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Location</p>
                    </td>
                    <td>
                      <p>Vadodara, Gujarat</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Total Referrals Requested</p>
                    </td>
                    <td>
                      <p>100</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Total Referrals Received</p>
                    </td>
                    <td>
                      <p>50</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Monthly Requests Received</p>
                    </td>
                    <td>
                      <p>4</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Monthly Requests Sent</p>
                    </td>
                    <td>
                      <p>4</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Last Referral Date</p>
                    </td>
                    <td>
                      <p>03/01/2024</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Warning</p>
                    </td>
                    <td>
                      <p>3</p>
                    </td>
                  </tr>
                </table>
                </div>
              </div>
            </div>

            {/* *********************************** */}
            {/* col-lg-8 col-md-7 col-sm-6 */}
            <div class="col-md-8 col-sm-12">
              <div class="p-3 bg-secondary dashinner2" style={{height:'96%'}}>
                <CustomNavbar />
              </div>
            </div>

            {/* *********************************** */}
          </div>
        </div>
        {/* ----------------------------------------- */}
      </div>
      {/* ----------------------------------------- */}
    </div>
  );
}
