export class Empleado {
    id?: number;
    name: string;
    contractTypeName: string;
    roleId: number;
    roleName: string;
    hourlySalary: number;
    monthlySalary: number;

    constructor(id: number, name: string, contractTypeName: string, roleId: number, roleName: string,
                hourlySalary: number, monthlySalary: number){
        this.id = id;
        this.name = name;
        this.contractTypeName = contractTypeName;
        this.roleId = roleId;
        this.roleName = roleName;
        this.hourlySalary = hourlySalary;
        this.monthlySalary = monthlySalary;
    }
}
