import React from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";
import "../App.css";
import feedback from "./assets/Feedback-1.png";
export default function Contact() {
  return (
    // style={{display:'grid', alignContent:'center', justifyContent:'center'}}
    <>
      <MainNav></MainNav>

      <div className="container text-center">
        <div className="row text-light">
          <div className="col-12">
            <h4 style={{fontFamily:"cursive"}}>
              You can directly contact us at{" "}
              <span className="text-primary">prorefer.team@gmail.com</span> or
              in case of any feedbacks, fill the below form
            </h4>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row text-dark">
          <div
            className="col-lg-6 col-12"
            style={{ display: "grid", placeContent: "center" }}
          >
            <img
              src={feedback}
              alt="Feedback"
              width="109.2%"
              height="77.16%"
            ></img>
            {/* 910:643 */}
          </div>
          <div
            className="col-lg-6 col-12 bg-color-feedbackform"
            style={{ borderRadius: "8px" ,height:"30%"}}
          >
            <div class="mb-3" style={{ marginTop: "2%" }}>
              <label for="fullname" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control text-light bg-dark feedback-placeholder"
                id="fullname"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-3" style={{ marginTop: "2%" }}>
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control text-light bg-dark feedback-placeholder"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3" style={{ marginTop: "2%" }}>
              <label for="feedback" class="form-label">
                Feedback
              </label>
              <textarea
                class="form-control text-light bg-dark feedback-placeholder"
                id="feedback"
                rows="3"
                placeholder="Enter your feedback"
              ></textarea>
            </div>
            <div style={{ marginTop: "5%", marginBottom: "5%" }}>
              <button
                className="btn-feedback-form"
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
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
