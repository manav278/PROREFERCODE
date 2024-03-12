import users from "../Model/proreferuser.js";
const customSort = (a, b) => {
  if (a.Last_Referral_Date != b.Last_Referral_Date) {
    return a.Last_Referral_Date - b.Last_Referral_Date;
  } else if (a.Referrals_Reviewed_ThisMonth != b.Referrals_Reviewed_ThisMonth) {
    return a.Referrals_Reviewed_ThisMonth - b.Referrals_Reviewed_ThisMonth;
  }
  return a.Warning - b.Warning;
};
async function filterByLocation(requestedLocation) {
  try {
    let employees;
    const employees1 = await users.find({
      Company_ID: 1, //export from reqquestref routes.
      Referrals_Reviewed_ThisMonth: [0, 1, 2, 3, 4],
      COMPANY_LOCATION: requestedLocation,
    });
    const employees2 = await users.find({
      Company_ID: 1, //export from reqquestref routes.
      Referrals_Reviewed_ThisMonth: [0, 1, 2, 3, 4],
    });
    if (employees2 == null) {
      return -1;
    }
    employees1 ? (employees = employees1) : (employees = employees2);
    employees.sort(customSort);

    const employeeIds = employees[0].User_ID;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
}
