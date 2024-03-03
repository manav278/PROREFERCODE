import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MainNav from "./MainNav";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onHandleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3003/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Login successfully");
          } else if (res.data === "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <MainNav></MainNav>
      <div className="container">
        <div className="row p-4 bg-warning">
          <div className="col-md-6 bg-danger">
            <h1>Image</h1>
          </div>
          <div
            className="col-md-6 text-dark p-4 bg-login-container"
            style={{ borderRadius: "2%" }}
          >
            <div className="row">
              <div className="col-12">
                <h1>Welcome back!</h1>
                <div>
                  <p>Log in to access your account.</p>
                </div>
              </div>
              <div className="col-12">
                <form action="POST">
                  <div className="mb-3">
                    <label
                      for="email"
                      style={{ marginTop: "2%" }}
                      className="form-label font-family-label"
                    >
                      Email
                    </label>
                    <input
                      className="form-control text-light bg-dark createcampaign-placeholder"
                      type="email"
                      onChange={onHandleChangeEmail}
                      placeholder="Email Address"
                      id="email"
                    ></input>
                  </div>

                  <div className="mb-3" style={{ marginTop: "1%" }}>
                    <label
                      for="password"
                      style={{ marginTop: "2%" }}
                      className="form-label font-family-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={onHandleChangePassword}
                      className="form-control text-light bg-dark createcampaign-placeholder"
                      placeholder="Password"
                      id="password"
                    ></input>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={submit}
                      className="btn-createcampaign-form bg-danger"
                      style={{
                        borderRadius: "5px",
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: "1%",
                        paddingBottom: "1%",
                        marginBottom: "2%",
                        marginTop: "2%",
                      }}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-12">
                <p>OR</p>
                <span>Don't have an account? </span>
                <Link to="/signup">Signup now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
