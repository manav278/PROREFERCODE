const connectDB = require('./db');
const mongoose = require('mongoose');
connectDB();

const userSchema = new mongoose.Schema({
  User_ID:{
      type:Number,
      require:true,
      unique:true
  },
  User_Name: String,
  Mobile_Number:String,
  Personal_Email:String,
  Work_Email:String,
  Referrals_Requested:Number,
  Company_Id:Number,
  Position:String,
  Company_Location:String,
  Referrals_Reviewed:Number,//{in one month}
  Last_Referral_Date:Number,
  Warning:Number  //[0-3]
});

const users = mongoose.model('prorefer-users', userSchema);


    const customSort1 = (a, b) => {
    if (a.Last_Referral_Date != b.Last_Referral_Date) {
      return a.Last_Referral_Date-(b.Last_Referral_Date);
    }
  
    else if(a.Referrals_Reviewed!=b.Referrals_Reviewed)
    {
      return a.Referrals_Reviewed-b.Referrals_Reviewed;
    }

    return a.Warning - b.Warning;
    
  }
  
    async function filterByLocation(requestedLocation){
    try { 
    const employees = await users.find({ Company_Id: 1, Referrals_Reviewed: [0,1,2,3,4], Company_Location: requestedLocation});

    employees.sort(customSort1);

    const employeeIds = employees.map((employee) => employee.User_ID+ " " + Math.floor((employee.Last_Referral_Date)/10000) + "/" + Math.floor(((employee.Last_Referral_Date)/100)%(100)) + "/"+ Math.floor((employee.Last_Referral_Date)%100) + " " + employee.Referrals_Reviewed + " " + employee.Warning);
    
    for(i of employeeIds){
      console.log(i);
    }

    // Close the connection when done
       mongoose.connection.close();

    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }
  
filterByLocation(["India", "USA", "UK"]);
















//----------------------------------
// async function filterByCompany(companyId) {
//   try {

//   const employees = await users.find({ Company_Id: companyId, Referrals_Reviewed: [0,1,2,3,4].array});
  
//   const employeeIds = employees.map((employee) => employee.User_ID);
//   // console.log(employeeIds);
//   return employeeIds;  
//   } catch (error) {
//     console.error('Error fetching employees:', error);
//   }
// }
// -----------------------------




//----------------------------------------------------
// async function insertData(){
//     const e = new Employee({
//         id:4,
//         name: "manav",
//         location: "nadiad" 
//     });
//     await e.save();
// }
// insertData();

//------------------------------------------------------------------



    // arr = [];  
    // x.array.forEach(element => {
    //   console.log(element);
    // });

  // async function run(){
  //   const x = await filterByCompany(1);
  //   //console.log(x);
  //   filterByLocation(["India","UK"], x);
  // }
  
  // run();


  // -------------------------------------------------------



  
  