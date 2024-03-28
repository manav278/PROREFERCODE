const isPrevEmployee = async(employees, previousEmployeesArray) => {
    for(let i=0; i<employees.length; i++)
    {
        if(!previousEmployeesArray.includes(employees[i].User_ID))
        {
            return employees[i].User_ID;
        }
    }
    return -1;
}

let res = await isPrevEmployee([{User_ID:23},{User_ID:42},{User_ID:34}],[23,42]);
console.log(res);