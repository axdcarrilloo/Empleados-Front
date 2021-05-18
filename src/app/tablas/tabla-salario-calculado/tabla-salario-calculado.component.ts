import { Component, Input, OnInit } from '@angular/core';
import { EmpleadoDto } from 'src/app/modelo/empleado-dto';
import { EmpleadoServiceService } from 'src/app/services/empleado-service.service';

@Component({
  selector: 'app-tabla-salario-calculado',
  templateUrl: './tabla-salario-calculado.component.html',
  styleUrls: ['./tabla-salario-calculado.component.css']
})
export class TablaSalarioCalculadoComponent implements OnInit {

  empleadosSalarioAnual: EmpleadoDto[] = [];
  campoBuscar?: number;

  constructor(private empleadoService: EmpleadoServiceService) {
  }

  ngOnInit(): void {
  }

  getCampoBuscar(): number{
    let buscar  = 0;
    if(this.campoBuscar == null){
      buscar = 0;
    }else{
      buscar = this.campoBuscar;
    }
    return buscar;
  }

  consultarEmpleado(id: number){
    this.empleadosSalarioAnual = [];
    this.empleadoService.consultarEmpleadoIdSalarioAnual(id).subscribe((empleado) => {
      this.empleadosSalarioAnual.push(empleado);
    });
  }

  consultarEmpleados(): void{
    this.empleadosSalarioAnual = [];
    this.empleadoService.consultarEmpleadosSalarioAnual().subscribe((empleados)=>{
      if(empleados.length > 0){
        this.empleadosSalarioAnual = empleados;
      }else{
        console.log("Lista de empleados vacia")
      }
    });
  }

  buscarEmpleado(): void {
    const buscar = this.getCampoBuscar();
    if(buscar != 0){
      this.consultarEmpleado(buscar);
    }else{
      this.consultarEmpleados();
    }
  }

}
