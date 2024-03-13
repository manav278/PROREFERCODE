import algo from "./algo.js";
import proreferusers from "../Model/proreferuser.js";
import currentrequest from "../Model/currentrequest.js";
import { getUserId } from "../Routes/Loginroutes.js";
import requestdate from "./date.js";
const request = async (position, company, requestedLocation, url) => {
  try {
    const result = await algo(requestedLocation, company);
    const intResult = Number(result);
    if (intResult === -1) {
      console.log("No employee found");
    } else {
      // --------------------------------------------

      const employee = await proreferusers.findOne({ User_ID: intResult });
      const employeeEmail = employee.Work_Email;
      const applicantId = await getUserId();
      const reqdate = await requestdate();

      //   --------------------------------------------

      let lengthOfSchema;
      currentrequest
        .countDocuments({})
        .then((count) => {
          lengthOfSchema = count + 1;
          const newCurrentRequest = new currentrequest({
            Referral_ID: lengthOfSchema,
            Employee_ID: employee.User_ID,
            Applicant_ID: applicantId,
            Company_ID: company,
            Request_Date: reqdate,
            Latest_Req_Date: reqdate,
            Result: "Not Replied",
            Position: position,
            Location: requestedLocation,
            Job_Portal_Url: url,
            Denial_Count: 0,
            No_Reply_Count: 0,
          });

          // Save the new user to the database
          newCurrentRequest
            .save()
            .then(() => {
              console.log("Current Request tuple saved successfully");
            })
            .catch((err) => {
              console.error("Error saving user:", err);
            });
        })
        .catch((err) => {
          console.log("Error in counting length of currentReq schema", err);
        });

      // --------------------------------------------
    }
  } catch (error) {
    console.log("Error fetching data in request.js", error);
  }
};

export default request;
