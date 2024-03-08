import express from "express";
import { getUserId } from "./Loginroutes.js";
import proreferuser from "../Model/proreferuser.js";
const router = express.Router();

router.post("/getEditProfileDetails", async (req, res) => {
  try {
    let ID = getUserId();
    let userProfile = await proreferuser.find({ User_ID: ID });
    res.status(200).json(userProfile[0]);
  } catch (error) {
    console.error("Error fetching user data from MongoDB : ", error);
    res.json({ message: "Internal server error from backend" });
  }
});

router.post("/updateApplicant", async (req, res) => {
  try {
    const { mobileNumber, personalEmail, location } = req.body;
    // console.log(mobileNumber, ' ', personalEmail, ' ', location);
    let ID = getUserId();
    await proreferuser.findOneAndUpdate(
      { User_ID: ID },
      {
        Mobile_Number: mobileNumber,
        Personal_Email: personalEmail,
        COMPANY_LOCATION: location,
      }
    );
    res.json({ message: "Update successful" });
  } catch (error) {
    console.log("Error fetching data from MongoDB: ", error);
    res.json({ message: "Internal server error from backend" });
  }
});

router.post("/updateEmployee", async (req, res) => {
  try {
    const { workEmail, position, selectedCompany } = req.body;
    // console.log(workEmail, position, selectedCompany);
    let ID = getUserId();
    await proreferuser.findOneAndUpdate(
      { User_ID: ID },
      { Work_Email: workEmail, Position: position, Company_ID: selectedCompany }
    );
    res.json({ message: "Update successful" });
  } catch (error) {
    console.log("Error fetching data from MongoDB: ", error);
    res.json({ message: "Internal server error from backend" });
  }
});

export default router;
