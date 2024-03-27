import bcrypt from "bcrypt";
async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.saltRounds));
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
}
import express from "express";
const router = express.Router();
import user from "../Model/proreferuser.js";
import comp from "../Model/companydata.js";
import auth from "../Model/authdata.js";
router.post("/signup", async (req, res) => {
  const userData = req.body;
  if (userData.selectedcompany === null && userData.companyname !== "") {
    const u1 = await user.findOne({ Personal_Email: userData.personalemail });
    const u2 = await user.findOne({ Work_Email: userData.workemail });
    if (u1 && u2) {
      try {
        res.status(200).json({
          message: "Personal Email and Company Email Already Exists.",
        });
      } catch (error) {
        console.error("Error checking email:", error);
        res.status(200).json({ error: "Internal Server Error" });
      }
    } else if (u1) {
      try {
        res.status(200).json({ message: "Personal Email Already Exists." });
      } catch (error) {
        console.error("Error checking email:", error);
        res.status(200).json({ error: "Internal Server Error" });
      }
    } else if (u2) {
      try {
        res.status(200).json({ message: "Company Email Already Exists." });
      } catch (error) {
        console.error("Error checking email:", error);
        res.status(200).json({ error: "Internal Server Error" });
      }
    } else {
      const userLength = await user.countDocuments();
      const companyLength = await comp.countDocuments();
      // const authLength = await auth.countDocuments();
      const encryptedPassword = await hashPassword(userData.password);
      const newUser = new user({
        User_ID: userLength + 1,
        First_Name: userData.firstname,
        Last_Name: userData.lastname,
        Mobile_Number: userData.mobilenumber,
        Personal_Email: userData.personalemail,
        Work_Email: userData.workemail,
        Referrals_Requested_ThisMonth: 0,
        Company_ID: companyLength + 1,
        Position: userData.position,
        COMPANY_LOCATION: userData.location,
        Referrals_Reviewed_ThisMonth: 0,
        Last_Referral_Date: 20100101,
        Warning: 0,
        Total_Referrals_Reviewed: 0,
        Total_Referrals_Requested: 0,
      });
      const newAuth = new auth({
        Personal_Email: userData.personalemail,
        Password: encryptedPassword,
      });
      const newComp = new comp({
        Company_ID: companyLength + 1,
        Company_Name: userData.companyname,
      });
      try {
        newComp
          .save()
          .then(async () => {
            console.log("Saved successfully in companydata.");
          })
          .catch((err) => {
            console.error(
              "Error saving company in companydata DataBase :",
              err
            );
          });
        newUser
          .save()
          .then(async () => {
            console.log("Saved successfully in currentrequest.");
          })
          .catch((err) => {
            console.error(
              "Error saving user in currentrequest DataBase :",
              err
            );
          });
        newAuth
          .save()
          .then(async () => {
            console.log("Saved successfully in authdata.");
          })
          .catch((err) => {
            console.error("Error saving user in authdata DataBase :", err);
          });
        res.status(200).json({ message: "Suceesfully Added in all Schemas." });
      } catch (e) {
        res.status(200).json({ message: "Error Adding in all Schemas." });
      }
    }
  } else if (userData.selectedcompany !== null && userData.companyname === "") {
    const u1 = await user.findOne({ Personal_Email: userData.personalemail });
    const u2 = await user.findOne({ Work_Email: userData.workemail });
    console.log(u1, u2);
    if (u1 && u2) {
      console.log("1");
      try {
        res.status(200).json({
          message: "Personal Email and Company Email Already Exists.",
        });
      } catch (error) {
        console.error("Error checking email:", error);
        res.status(200).json({ error: "Internal Server Error" });
      }
    } else if (u1) {
      console.log("2");
      try {
        res.status(200).json({ message: "Personal Email Already Exists." });
      } catch (error) {
        console.error("Error checking email:", error);
        res.status(200).json({ error: "Internal Server Error" });
      }
    } else if (u2) {
      console.log("3");
      try {
        res.status(200).json({ message: "Company Email Already Exists." });
      } catch (error) {
        console.error("Error checking email:", error);
        res.status(200).json({ error: "Internal Server Error" });
      }
    } else {
      console.log("4");
      const userLength = await user.countDocuments();
      const encryptedPassword = await hashPassword(userData.password);
      const newUser = new user({
        User_ID: userLength + 1,
        First_Name: userData.firstname,
        Last_Name: userData.lastname,
        Mobile_Number: userData.mobilenumber,
        Personal_Email: userData.personalemail,
        Work_Email: userData.workemail,
        Referrals_Requested_ThisMonth: 0,
        Company_ID: Number(userData.selectedcompany),
        Position: userData.position,
        COMPANY_LOCATION: userData.location,
        Referrals_Reviewed_ThisMonth: 0,
        Last_Referral_Date: 20100101,
        Warning: 0,
        Total_Referrals_Reviewed: 0,
        Total_Referrals_Requested: 0,
      });
      const newAuth = new auth({
        Personal_Email: userData.personalemail,
        Password: encryptedPassword,
      });
      try {
        newAuth
          .save()
          .then(async () => {
            console.log("Saved successfully in authdata.");
          })
          .catch((err) => {
            console.error("Error saving user in authdata DataBase :", err);
          });
        newUser
          .save()
          .then(async () => {
            console.log("Saved successfully in currentrequest.");
          })
          .catch((err) => {
            console.error(
              "Error saving user in currentrequest DataBase :",
              err
            );
          });
        res.status(200).json({ message: "Suceesfully Added in all Schemas." });
      } catch (e) {
        res.status(200).json({ message: "Error Adding in all Schemas." });
      }
    }
  } else if (userData.selectedcompany === null && userData.companyname === "") {
    const u1 = await user.findOne({ Personal_Email: userData.personalemail });
    // const u2 = await user.findOne({ Work_Email: userData.workemail });
    if (u1) {
      try {
        res.status(200).json({ message: "Personal Email Already Exists." });
      } catch (error) {
        console.error("Error checking email:", error);
        res.status(200).json({ error: "Internal Server Error" });
      }
    } else {
      const userLength = await user.countDocuments();
      const encryptedPassword = await hashPassword(userData.password);
      const newUser = new user({
        User_ID: userLength + 1,
        First_Name: userData.firstname,
        Last_Name: userData.lastname,
        Mobile_Number: userData.mobilenumber,
        Personal_Email: userData.personalemail,
        Work_Email: "",
        Referrals_Requested_ThisMonth: 0,
        Company_ID: 0,
        Position: "",
        COMPANY_LOCATION: "",
        Referrals_Reviewed_ThisMonth: 0,
        Last_Referral_Date: 20100101,
        Warning: 0,
        Total_Referrals_Reviewed: 0,
        Total_Referrals_Requested: 0,
      });
      const newAuth = new auth({
        Personal_Email: userData.personalemail,
        Password: encryptedPassword,
      });
      try {
        newAuth
          .save()
          .then(async () => {
            console.log("Saved successfully in authdata.");
          })
          .catch((err) => {
            console.error("Error saving user in authdata DataBase :", err);
          });
        newUser
          .save()
          .then(async () => {
            console.log("Saved successfully in currentrequest.");
          })
          .catch((err) => {
            console.error(
              "Error saving user in currentrequest DataBase :",
              err
            );
          });
        res.status(200).json({ message: "Suceesfully Added in all Schemas." });
      } catch (e) {
        res.status(200).json({ message: "Error Adding in all Schemas." });
      }
    }
  }
});

export default router;
