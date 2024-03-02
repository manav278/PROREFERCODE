import React from "react";
import MainNav from "./MainNav";
import Aboutus from "./assets/Aboutus.jpg";
import Footer from "./Footer";
export default function About() {
  return (
    <div>
      <MainNav></MainNav>
      <div class="container text-light">
        <div class="row justify-content-around">
          <div class="col-4 bg-danger">
            <img src={Aboutus} alt="Aboutus" width="61.2%" height="91.8%"></img> 
            {/* 408*612 */}
          </div>
          <div
            className="col-4 text-dark"
            style={{
              padding: "2%",
              borderRadius: "10px",
            }}
          >
            <div className="row">
              <div
                className="col-12 bg-secondary text-light my-1 p-3"
                style={{ borderRadius: "8px" }}
              >
                <h4 className="text-center">Mission</h4>
                <p>
                  Our mission at ProRefer is to bridge the gap between job
                  seekers and potential employers by facilitating the referral
                  process. We believe that personal recommendations are a
                  powerful tool in finding the right job, and we strive to make
                  this process easier and more efficient for everyone involved.
                </p>
              </div>
              <div
                className="col-12 bg-secondary text-light my-1 p-3"
                style={{ borderRadius: "8px" }}
              >
                <h4 className="text-center">Company Story</h4>
                <p>
                  ProRefer was founded in 2020 by a group of professionals who
                  saw a need for a platform that could connect job seekers with
                  potential referrals. Since then, we have grown to become a
                  trusted resource for both job seekers and employers, helping
                  thousands of people find their dream jobs.
                </p>
              </div>
              <div
                className="col-12 bg-secondary text-light my-1 p-3"
                style={{ borderRadius: "8px" }}
              >
                <h4 className="text-center">Values</h4>
                <p>
                  At ProRefer, we are guided by a set of core values that shape
                  everything we do. These values include integrity,
                  transparency, and inclusivity, and they drive our commitment
                  to providing a fair and effective platform for job seekers and
                  employers alike.
                </p>
              </div>
              <div
                className="col-12 bg-secondary text-light my-1 p-3"
                style={{ borderRadius: "8px" }}
              >
                <h4 className="text-center">Benefits</h4>
                <p>
                  Joining ProRefer has many benefits. Job seekers can access
                  exclusive job listings and connect with potential employers,
                  while employees can earn rewards for referring qualified
                  candidates. Our platform streamlines the referral process,
                  making it easier than ever to find and fill open positions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
