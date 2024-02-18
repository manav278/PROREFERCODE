import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import MainNav from "./MainNav";
const EditProfileForm = () => {
const [theme, setTheme] = useState(null);

  const resetTheme = () => {
    setTheme(null);
  };
  return (
    <div>
      <MainNav />
      <div style={{ textAlign: "center", color: "whitesmoke" }}>
        <h3>Edit Profile</h3>
      </div>
      <div className="container text-light">
        <div className="row">
          <div className="col-5 referral-form-left">
          <h4 style={{marginBottom:"-10%"}}>Applicant Credentials</h4>
            <form>
              <div>
                <label for="phone" class="form-label">
                  Mobile Number
                </label>
                <input type="tel" class="form-control" id="phone" />
              </div>
              <div>
                <label for="personalEmail" class="form-label">
                  Personal Email
                </label>
                <input type="email" class="form-control" id="personalEmail" />
              </div>
            </form>
          </div>
          <div className="col-2"></div>
          <div className="col-5 referral-form-right">
            <div className="row">
              <div className="col-6">
                <label for="workEmail" class="form-label">
                  Work Email
                </label>
                <input type="email" class="form-control" id="workEmail" />
              </div>
            <div className="col-6">
            <label for="company" class="form-label">
              Company
            </label>
            <div className="mb-2">
              <Dropdown as={ButtonGroup} size="lg">
                <Button
                  className="text-capitalize"
                  variant={theme ? theme : "secondary"}
                >
                  {theme ? theme : "Default"}
                </Button>
                <Dropdown.Toggle
                  split
                  variant={theme ? theme : "secondary"}
                  id="dropdown-split-basic"
                />
                <Dropdown.Menu>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => setTheme("primary")}
                  >
                    Primary
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={() => setTheme("danger")}
                  >
                    Danger
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={() => setTheme("success")}
                  >
                    Success
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4" onClick={resetTheme}>
                    Default Theme
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            </div>
            <label for="position" class="form-label">
              Position
            </label>
            <input type="text" class="form-control" id="position" />

            <label for="Location" class="form-label">
              Location
            </label>
            <input type="email" class="form-control" id="Location" />
            {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
