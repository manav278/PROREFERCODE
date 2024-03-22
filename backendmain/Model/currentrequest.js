import mongoose from "mongoose";

const currentRequestsSchema = new mongoose.Schema({
  Referral_ID: {
    type: Number,
    require: true,
    unique: true,
  },
  History: [{
    Employee_ID: Number,
    Result_Date: Number,
    Result: Number,
  }],
  Applicant_ID: {
    type: Number,
    require: true,
  },
  Company_ID: {
    type: Number,
    require: true,
  },
  Company_Name: String,
  Request_Date: Number,
  Latest_Req_Date: Number,
  Result: String,
  Position: String,
  Location: String,
  Job_Portal_Url: String,
  Denial_Count: Number,
  No_Reply_Count: Number,
  Employee_LRD: Number //Employee last referral date
  // Previous_Employees
});

const currReqModel = mongoose.model("current-request", currentRequestsSchema);
export default currReqModel;
