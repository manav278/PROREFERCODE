import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  Referral_ID: {
    unique: true,
    type: Number,
    required: true,
  },
  History: [{
    Employee_ID: Number,
    Result_Date: Number,
    Result: Number,
  }],
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
  result: String, //This is the final result of the whole request
  Company_Name: String,
});

const historyModel = mongoose.model("ref-histories", historySchema);

export default historyModel;

[
{
  emp:1,
  result:resolveObjectURL,
  date:jah,
  
},
{

},{

}
]
