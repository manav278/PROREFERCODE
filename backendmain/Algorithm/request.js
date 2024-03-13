import algo from "./algo.js";
import proreferusers from "../Model/proreferuser.js";
import currentrequest from "../Model/currentrequest.js";
import { getUserId } from "../Routes/Loginroutes.js";
import requestdate from "./date.js";
import {
  firstSuccessfulToApplicant,
  firstSuccessfulToEmployee,
  firstFailToApplicant,
} from "./nodemailer.js";

const request = async (position, company, requestedLocation, url) => {
  try {
    const result = await algo(requestedLocation, company);
    const intResult = Number(result);
    if (intResult === -1) {
      try {
        const applicantId = await getUserId();
        console.log("The applicantid is : ", applicantId);
        const applicantToSend = await proreferusers.findOne({
          User_ID: applicantId,
        });
        proreferusers
          .findOneAndUpdate(
            { User_ID: applicantId },
            {
              $inc: {
                Referrals_Requested_ThisMonth: -1,
                Total_Referrals_Requested: -1,
              },
            },
            { new: true }
          )
          .then((updatedUser) => {
            if (!updatedUser) {
              console.error(`No user found with User_ID: ${applicantId}`);
              return;
            }
            console.log("Updated user:", updatedUser);
          })
          .catch((error) => {
            console.error("Error updating user:", error);
          });
        let applicantEmail = applicantToSend.Personal_Email;
        firstFailToApplicant(applicantEmail);
      } catch (error) {
        console.log("Error while employee not found for 1st request: ", error);
      }
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
        .then(async (count) => {
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
              // console.log("Current Request tuple saved successfully");
            })
            .catch((err) => {
              console.error("Error saving user:", err);
            });

          const applicantToSend = await proreferusers.findOne({
            User_ID: applicantId,
          });
          let applicantEmail = applicantToSend.Personal_Email;
          // console.log(applicantEmail);
          // console.log(employeeEmail);
          firstSuccessfulToApplicant(applicantEmail);
          firstSuccessfulToEmployee(employeeEmail);
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
