export class UserModel{
    firstName : string = "";
    lastName : string = "";
    middleName : string = "";
    email : string = "";
    password : string = "";
    phone : number = 0
    dob : string = "";
    gender : string = "";
    nationality : string = "";
    aadharNo : number = 0;
    panNo : string = "";
}


export class IncDetModel{
    propertyName : string = "";
    propertyLocation : string = "";
    amount : number = 0;
    retirementAge : string = "";
    monthlySalary : string = "";
    organization : string = "";
    user !: UserModel;
}
