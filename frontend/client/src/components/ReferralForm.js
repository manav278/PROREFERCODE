import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

const ReferralForm = () => {
  const [theme, setTheme] = useState(null);

  const resetTheme = () => {
    setTheme(null);
  };
  return (
    <div>
      <div className="container text-light">
        <div className="row">
          <div className="col-5">
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
          <div className="col-5">
            <div>
              <label for="workEmail" class="form-label">
                Work Email
              </label>
              <input type="email" class="form-control" id="workEmail" />
            </div>

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
            {/* <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}

            <label for="position" class="form-label">
              Position
            </label>
            <input type="text" class="form-control" id="position" />

            <label for="Location" class="form-label">
              Location
            </label>
            <input type="email" class="form-control" id="Location" />
          </div>
        </div>
        {/* <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default ReferralForm;
