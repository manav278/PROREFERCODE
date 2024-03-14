import historyModel from "../Model/referralhistory.js";
import currReqModel from "../Model/currentrequest.js";
import proreferusers from "../Model/proreferuser.js";
import companyModel from "../Model/companydata.js";
import getDate from "../Algorithm/date.js";
import { acceptedToApplicant } from "../Algorithm/nodemailer.js";
import { initCounter, getNextSequenceValue } from "../Model/historyCounter.js";
import express from "express";

let applicantEmail;
const router = express.Router();
router.post("/init", async (req, res) => {
  try {
    initCounter("current");
    res.json({ message: "init complete" });
  } catch (error) {
    res.json({ message: "Error while init in Counter" });
  }
});

router.post("/addition", async (req, res) => {
  try {
    const count = await getNextSequenceValue("current");
    res.json({ message: count });
  } catch (error) {
    res.json({ message: "Error while incrementing in Counter" });
  }
});

router.get("/accept1", async (req, res) => {
  try {
    const { Referral_ID } = req.body;
    const dateToday = await getDate();
    let curr = await currReqModel.findOne({ Referral_ID: Referral_ID });
    // console.log(curr);
    const company = await companyModel.findOne({
      Company_ID: curr.Company_ID,
    });
    const companyName = company.Company_Name;
    // res.json(curr);
    const newHist = new historyModel({
      Referral_ID: curr.Referral_ID,
      Employee_ID: curr.Employee_ID,
      Applicant_ID: curr.Applicant_ID,
      Company_ID: curr.Company_ID,
      date: dateToday,
      Position: curr.Position,
      result: "Referred",
      Company_Name: companyName,
    });
    newHist
      .save()
      .then(() => {
        // res.json("Added");
      })
      .catch((err) => {
        console.error("Error saving user:", err);
        res.json(-1);
      });

    const applicant = await proreferusers.findOne({
      User_ID: curr.Applicant_ID,
    });
    applicantEmail = applicant.Personal_Email;

    const resp = await currReqModel.findOneAndDelete({
      Referral_ID: Referral_ID,
    });
    res.json(0);
  } catch (error) {
    console.log("Error in accept1", error);
    res.json(-1);
  }
});

router.get("/accept2", (req, res) => {
  try {
    acceptedToApplicant(applicantEmail);
    res.json(0);
  } catch (error) {
    console.log("Error in accept2: ", error);
    res.json(-1);
  }
});

export default router;
