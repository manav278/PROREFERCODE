const mongoose = require('mongoose');

const currentRequestsSchema = new mongoose.Schema({
    Referral_ID:{
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
    Request_Date:Number,
    Latest_Req_Date:Number,
    Result: String,
    Position: String,
    Job_Portal_Url: String,
    Denial_Count: Number,
    No_Reply_Count: Number
});

const currReqModel = mongoose.model('current-request', currentRequestsSchema);
export default currReqModel;