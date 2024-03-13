import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
    Referral_ID: {
        type:Number,
        require:true,
        unique:true
    },
    Employee_ID: {
        type:Number,
        require:true
    },
    Applicant_ID: {
        type: Number,
        require: true
    },
    Company_ID:{
        type: Number,
        require: true
    },
    Date: Number,
    Position: String,
    Result: String
});

const historyModel = mongoose.model('referral-history', historySchema);

export default historyModel;