import React from "react";
import MainNav from "./MainNav";
import feedback from "./assets/feedback-form.png";
import Footer from "./Footer";

export default function Contact() {
  return (
    // style={{display:'grid', alignContent:'center', justifyContent:'center'}}
    <>
      <MainNav></MainNav>

      <div className="container text-center">
        <div className="row text-light">
          <div className="col-12">
            <h4>
              You can directly contact us at{" "}
              <span className="text-primary">prorefer.team@gmail.com</span> or
              in case of any feedbacks, fill the below form
            </h4>
          </div>
        </div>
      </div>
      <u className="text-light">
        <h2
          className="text-light"
          style={{ textAlign: "center", marginTop: "3%" }}
        >
          Feedback Form
        </h2>
      </u>

      <div className="container">
        <div className="row text-light">
          <div
            className="col-12"
            style={{
              height: "75vh",
              paddingLeft: "20%",
              paddingRight: "20%",
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
                Email
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
    </>
  );
}
