import { log } from "console";
import historyModel from "../Model/referralhistory.js";
import Express from "express";
// const app = Express();
// app.use(Express.urlencoded({ extended: true }));
// app.use(Express.json());
const router = Express.Router();
router.post("/save", async (req, res) => {
    console.log(req.body);
  const x = new historyModel({
    Referral_ID: req.body.Referral_ID,
    Employee_ID: req.body.Employee_ID,
    Applicant_ID: req.body.Applicant_ID,
    Company_ID: req.body.Company_ID,
    date: req.body.date,
    Position: req.body.Position,
    result: req.body.result,
  });
  await x.save();
  res.json({msg:"done"});
});
export default router;