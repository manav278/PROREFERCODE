import express from "express";
import Company from "../Model/companydata.js";
import users from "../Model/proreferuser.js";
import { getUserId } from "./Loginroutes.js";
const router = express.Router();
let global_position;
let global_selectedCompany;
let global_country;
let global_url;

router.get("/process-request", async (req, res) => {
  console.log("In process request");
  console.log(global_country);
});

router.post("/requestref", async (req, res) => {
  const { position, selectedCompany, country, url } = req.body;
  if (
    position != null &&
    selectedCompany != null &&
    country != null &&
    url != null
  ) {
    try {
      global_position = position;
      global_selectedCompany = selectedCompany;
      global_country = country;
      global_url = url;
      const user = await users.findOne({ User_ID: getUserId() });
      const a = user.Referrals_Requested_ThisMonth;
      if (a >= 3) {
        res
          .status(200)
          .json({ message: "Referrals Requested This Month Limit Exceeded" });
      } else {
        try {
          const y = getUserId();
          const updateUser = await users.findOneAndUpdate(
            { User_ID: y },
            {
              $inc: {
                Referrals_Requested_ThisMonth:
                  user.Referrals_Requested_ThisMonth,
              },
            },
            { new: true }
          );
        } catch (error) {
          console.log(
            "Error while updating ReferralsRequestedThisMonth: ",
            error
          );
          res.status(200).json({ message: "Error processing request" });
        }

        res.status(200).json({ message: "Request received successfully" });
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(200).json({ message: "Server Error" });
    }
  } else {
    res.status(200).json({
      message: "Please fill the values properly.Some values are Null",
    });
  }
});

export default router;
