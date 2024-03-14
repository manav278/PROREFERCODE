import express from "express";
import { getUserId } from "./Loginroutes.js";
import referralhistory from "../Model/referralhistory.js";
const router = express.Router();
router.get("/receive", async (req, res) => {
  try {
    let id = getUserId();
    let user = await referralhistory.find({ Employee_ID: id });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching past Requests in Receivedroutes:", error);
    res.status(200).json({ message: "Server Error" });
  }
});

export default router;
