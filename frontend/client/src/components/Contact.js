import React, { useRef } from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";
import "../App.css";
import feedback from "./assets/Feedback-1.png";
import emailjs from "@emailjs/browser";
export default function Contact() {
  // service_id=service_owt5xga
  // template_id=template_utm62cj;
  // publicKey=k_w4S-5BYB0KmuOvO
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_owt5xga", "template_utm62cj", form.current, {
        publicKey: "k_w4S-5BYB0KmuOvO",
      })
      .then(
        () => {
          alert(
            "Successfully Feedbackmail sended to prorefer.team@gmail.com!!!"
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Please try again later.");
        }
      );
  };

  return (
    // style={{display:'grid', alignContent:'center', justifyContent:'center'}}
    <>
      <MainNav></MainNav>

      <div className="container text-center">
        <div className="row text-light">
          <div className="col-12">
            <h4 className="merriweather-regular">
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
          <form
            style={{ backgroundColor: "red", width: "50%" }}
            className="col-lg-6 col-12 bg-color-feedbackform"
          >
            <div className="mb-3" style={{ marginTop: "2%" }}>
              <label for="user_name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark feedback-placeholder"
                id="fullname"
                placeholder="Enter your name"
                name="user_name"
              />
            </div>
            <div className="mb-3" style={{ marginTop: "2%" }}>
              <label for="user_email" class="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control text-light bg-dark feedback-placeholder"
                id="email"
                placeholder="name@example.com"
                name="user_email"
              />
            </div>
            <div className="mb-3" style={{ marginTop: "2%" }}>
              <label for="message" className="form-label">
                Feedback
              </label>
              <textarea
                className="form-control text-light bg-dark feedback-placeholder"
                id="feedback"
                rows="3"
                placeholder="Enter your feedback"
                name="message"
              ></textarea>
            </div>
            <div style={{ marginTop: "5%", marginBottom: "5%" }}>
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

      <Footer></Footer>
    </>
  );
}
