import React from "react";
import "../../App.css";
const Received = ({obj}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="scrollable-list">
            <ul className="list-group">
              {obj.map((ob, index) => (
                <li key={index} className={`list-group-item ${index % 2 === 0 ? 'bg-dark-blue text-light' : 'bg-light-blue text-light'}`}>
                  <p>Employee's Name who Requested Referal : {ob.name}</p>
                  <p>Employee's Company Name : {ob.company}</p>
                  <p>Employee's age : {ob.age}</p>
                  <p>Employee's city : {ob.city}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Received;

{
  /* <div className="col">
          <h4>Companies</h4>
          <div className="scrollable-list">
            <ul className="list-group">
              {companies.map((company, index) => (
                <li key={index} className="list-group-item">
                  {company}
                </li>
              ))}
            </ul>
          </div>
        </div> */
}
