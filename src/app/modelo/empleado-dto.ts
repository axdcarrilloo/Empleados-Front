export class EmpleadoDto {
    id?: number;
    name: string;
    contractTypeName: string;
    roleId: number;
    roleName: string;
    hourlySalary: number;
    monthlySalary: number;
    salarioCalculadoAnual: number;

    constructor(id: number, name: string, contractTypeName: string, roleId: number, roleName: string,
                hourlySalary: number, monthlySalary: number, salarioCalculadoAnual: number){
        this.id = id;
        this.name = name;
        this.contractTypeName = contractTypeName;
        this.roleId = roleId;
        this.roleName = roleName;
        this.hourlySalary = hourlySalary;
        this.monthlySalary = monthlySalary;
        this.salarioCalculadoAnual = salarioCalculadoAnual;
    }
}
