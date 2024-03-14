import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  Referral_ID: {
    unique: true,
    type: Number,
    required: true,
  },
  Employee_ID: {
    type: Number,
    required: true,
  },
  Applicant_ID: {
    type: Number,
    required: true,
  },
  Company_ID: {
    type: Number,
    required: true,
  },
  date: Number,
  Position: String,
  result: String,
});

const historyModel = mongoose.model("ref-histories", historySchema);

export default historyModel;
