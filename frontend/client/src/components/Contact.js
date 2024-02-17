import React from "react";
import MainNav from "./MainNav";
import feedback from "./assets/feedback-form.png";
import Footer from "./Footer";

export default function Contact() {
  return (
    // style={{display:'grid', alignContent:'center', justifyContent:'center'}}
    <div>
      <MainNav></MainNav>
      <div className="container">
        <div className="row text-light">
          <div
            className="col-12"
            style={{
              height: "60vh",
              borderRadius: "20px",
              paddingLeft: "15%",
              paddingRight: "15%",
              paddingTop: "5%",
            }}
          >
            <div class="mb-3">
              <label for="fullname" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Enter Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="feedback" class="form-label">
                Feedback
              </label>
              <textarea
                class="form-control"
                id="feedback"
                rows="3"
                placeholder="Enter your feedback"
              ></textarea>
            </div>
            <div>
              <button
                className="bg-light"
                style={{ border: "2px solid black", borderRadius: "5px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
