import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';
import { EmpleadoServiceService } from 'src/app/services/empleado-service.service';

@Component({
  selector: 'app-tabla-sin-calculo',
  templateUrl: './tabla-sin-calculo.component.html',
  styleUrls: ['./tabla-sin-calculo.component.css']
})
export class TablaSinCalculoComponent implements OnInit {

  empleadosSinSalario: Empleado[] = [];

  constructor(private empleadoService: EmpleadoServiceService) { }

  ngOnInit(): void {
    this.cargarEmpleadosSinSalario();
  }

  cargarEmpleadosSinSalario(): void {
    this.empleadosSinSalario = [];
    this.empleadoService.consultarEmpleados().subscribe((empleados) => {
      this.empleadosSinSalario = empleados;
    });
  }

}
