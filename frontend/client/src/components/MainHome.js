import React from "react";
import MainNav from "./MainNav";
import Hom1 from "./assets/Hom1.jpg";
import Hom2 from "./assets/Hom2.jpg";
import Hom3 from "./assets/Hom3.jpg";
import Footer from "./Footer";
import "../App.css";
const MainHome = () => {
  return (
    <div>
      <MainNav />
      <div style={{marginTop:'3%'}}>
        <h1 style={{ textAlign: "center" }} className="text-primary">
          How does ProRefer work?
        </h1>
      </div>
      <div class="container text-center text-light">
        <div class="row g-2">
          <div class="col-12 col-md-6 order-md-first order-2">
            <div
              class="p-3 home-div"
              style={{ height: "52vh", textAlign: "center" }}
            >
              <h3>The basics for a new user</h3>
              <p>
                As a new user, you can get started with ProRefer by submitting
                referral requests. Once submitted, our employees will review the
                resumes and either accept or reject the referral requests. You
                can track the status of your requests in the referral history
                section of your account!
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 order-md-2 order-first">
            <div class="p-3">
              <img src={Hom1} alt="1-ProRefer" width="62.4%" height="48%" />
              {/* 520:406 */}
            </div>
          </div>
          <div class="col-12 col-md-6 order-md-3 order-3">
            <div class="p-3">
              <img src={Hom2} alt="1-ProRefer" width="54%" height="48%" />
              {/* 530:471 */}
            </div>
          </div>
          <div class="col-12 col-md-6 order-md-4 order-4">
            <div
              class="p-3 home-div"
              style={{ height: "52vh", textAlign: "center" }}
            >
              <h3>ProRefer and the referral process</h3>
              <p>
                ProRefer is the platform that connects referral seekers with
                employees. Our referral process is efficient, transparent, and
                reliable. It's a place for users to find the right job
                opportunities through employee referrals.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 order-md-5 order-last">
            <div
              class="p-3 home-div"
              style={{ height: "52vh", textAlign: "center" }}
            >
              <h3>Revolutionize your job search</h3>
              <p>
                ProRefer enables organizations to streamline their referral
                process, making it easier for employees to refer candidates and
                for referral seekers to find job opportunities. Join ProRefer
                today and revolutionize your job search!
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 order-md-last order-5">
            <div class="p-3">
              <img src={Hom3} alt="1-ProRefer" width="59%" height="48%" />
              {/* 390:317 */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ height: "25vh", width: "100%" }}>
          <div className="col-4 home-numbers">
            <h2 className="text-primary">10000+</h2>
            <p className="text-light">Referrals</p>
          </div>
          <div className="col-4 home-numbers">
            <h2 className="text-primary">500+</h2>
            <p className="text-light">Companies</p>
          </div>
          <div className="col-4 home-numbers">
            <h2 className="text-primary">5000+</h2>
            <p className="text-light">Employees</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainHome;
