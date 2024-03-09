import express from "express";
import Company from "../Model/companydata.js";
const router = express.Router();
router.post("/requestref", async (req, res) => {
  const { position, selectedCompany, country, url } = req.body;
  if (
    position != null &&
    selectedCompany != null &&
    country != null &&
    url != null
  ) {
    try {
      const companies = await Company.findOne({ Company_ID: selectedCompany });
      console.log(companies.Company_Name);
      res.status(200).json({ message: "Information taken successfully." });
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
