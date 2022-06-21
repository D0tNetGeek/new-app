export class Department{
    deptId: string;
    deptName: string;
    location: string;

    constructor(
        deptId: string, 
        deptName: string,
        location: string,
        ){
            this.deptId = deptId;
            this.deptName= deptName;
            this.location = location;
        }
}