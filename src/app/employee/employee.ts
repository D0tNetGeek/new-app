export class Employee{
    empId: string;
    empName: string;
    gender: string;
    dob: string;
    salary: string;
    deptId: string;

    constructor(
        empId: string, 
        empName: string,
        gender: string,
        dob: string,
        salary: string,
        deptId: string
        ){
            this.empId = empId;
            this.empName= empName;
            this.gender = gender;
            this.dob = dob;
            this.salary= salary;
            this.deptId=deptId;
        }
}