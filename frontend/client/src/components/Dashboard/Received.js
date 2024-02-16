import React from "react";
import "../../App.css";
const Received = ({ currentRequest, pastRequest }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="scrollable-list">
            <ul className="list-group">
              {/* ---------------currentRequest Data------------ */}
              <h3
                style={{
                  color: "peachpuff",
                  marginBottom: "1%",
                }}
              >
                Current Requests
              </h3>

              {/* ---------------------------------------------- */}

              {currentRequest.length == 0 ? (
                <p className="text-light">No Current Requests Now</p>
              ) : (
                currentRequest.map((ob, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${
                      index % 2 === 0
                        ? "bg-dark-blue text-light"
                        : "bg-light-blue text-light"
                    }`}
                  >
                    <div class="container text-center">
                      <div className="row justify-content-evenly">
                        {/* ---------------------------------------------- */}

                        <div className="col-12 col-sm-3 col-md-3">
                          <div style={{ marginBottom: "6%" }}>
                            <b style={{ color: "yellowgreen" }}>
                              Referral ID:{" "}
                            </b>
                            {ob.name}
                          </div>
                          <div>
                            <b style={{ color: "yellowgreen" }}>
                              Request Date:{" "}
                            </b>
                            {ob.date}
                          </div>
                        </div>

                        {/* ---------------------------------------------- */}

                        <div className="col-12 col-sm-3 col-md-3">
                          <div style={{ marginBottom: "4%" }}>
                            <button
                              className="bg-warning text-dark"
                              style={{ borderRadius: "10px", border: "none" }}
                            >
                              Job-URL
                            </button>
                          </div>
                          <div>{ob.pos}</div>
                        </div>

                        {/* ---------------------------------------------- */}

                        <div className="col-6 col-sm-3 col-md-3">
                          <div style={{ marginBottom: "4.8%" }}>
                            <button
                              className="bg-info text-dark"
                              style={{ borderRadius: "10px", border: "none" }}
                            >
                              Resume
                            </button>
                          </div>
                          <div>{ob.company}</div>
                        </div>

                        {/* ---------------------------------------------- */}

                        <div className="col-6 col-sm-3 col-md-3">
                          <div style={{ marginBottom: "4%" }}>
                            <button
                              className="bg-success text-light"
                              style={{ borderRadius: "10px", border: "none" }}
                            >
                              Accept
                            </button>
                          </div>
                          <div>
                            <button
                              className="bg-danger text-light"
                              style={{ borderRadius: "10px", border: "none" }}
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}

              {/* --------------pastRequest Data-------------- */}
              <h3
                style={{
                  color: "peachpuff",
                  marginBottom: "1%",
                  marginTop: "1%",
                }}
              >
                Historical Requests
              </h3>
              {pastRequest.length == 0 ? (
                <p className="text-light">No Historical Requests Yet</p>
              ) : (
                pastRequest.map((ob, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${
                      index % 2 === 0
                        ? "bg-dark-blue text-light"
                        : "bg-light-blue text-light"
                    }`}
                  >
                    <div className="container">
                      <div className="row">
                        {/* ---------------------------------------------- */}

                        <div className="col-4">
                          <div style={{ margin: "2%" }}>
                            <b style={{ color: "yellowgreen" }}>
                              Referral ID:{" "}
                            </b>
                            {ob.name}
                          </div>
                          <div>
                            <b style={{ color: "yellowgreen" }}>
                              Request Date:{" "}
                            </b>
                            {ob.date}
                          </div>
                        </div>

                        {/* ---------------------------------------------- */}

                        <div className="col-4">
                          <div style={{ margin: "2%" }}>{ob.company}</div>
                          <div>{ob.pos}</div>
                        </div>

                        {/* ---------------------------------------------- */}

                        <div className="col-4">
                          <button
                            className={`text-light ${
                              ob.result === "Not Referred"
                                ? "bg-warning text-dark"
                                : ob.result === "Referred"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                            style={{
                              borderRadius: "10px",
                              border: "none",
                              margin: "6%",
                            }}
                          >
                            {ob.result}
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Received;

// {
//   /* <div className="col">
//           <h4>Companies</h4>
//           <div className="scrollable-list">
//             <ul className="list-group">
//               {companies.map((company, index) => (
//                 <li key={index} className="list-group-item">
//                   {company}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div> */
// }

// {
//   /* <table style={{ width: "100%" }} className="table1">
//                     <tr>
//                       <td>
//                         <b>Referral ID:</b> {ob.name}
//                       </td>
//                       <td>
//                         <button className="bg-warning text-dark">
//                           Job Portal URL
//                         </button>
//                       </td>
//                       <td>
//                         <button className="bg-info text-dark">Resume</button>
//                       </td>
//                       <td>
//                         <button className="bg-success text-light">
//                           Accept
//                         </button>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <b>Request Date:</b> 12/02/2024
//                       </td>
//                       <td>Full Stack Developer</td>
//                       <td style={{ textAlign: "left" }}>Amazon</td>
//                       <td>
//                         <button className="bg-danger text-light">Reject</button>
//                       </td>
//                     </tr>
//                   </table> */
// }

// {
//   /* <table style={{ width: "100%" }} className="table1">
//                     <tr>
//                       <td>
//                         <b>Referral ID:</b> {ob.name}
//                       </td>
//                       <td style={{ textAlign: "left" }}>Amazon</td>
//                       <td rowSpan={2}>
//                         <button style={{width:"90px",height:"40px"}}>{ob.result}</button>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <b>Request Date:</b> 12/02/2024
//                       </td>
//                       <td>Full Stack Developer</td>
//                     </tr>
//                   </table> */
// }
