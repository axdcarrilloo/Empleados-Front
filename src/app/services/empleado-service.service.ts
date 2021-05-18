import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmpleadoDto } from '../modelo/empleado-dto';
import { Empleado } from './../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

  constructor(private http: HttpClient) { }

  consultarEmpleadoIdSalarioAnual(idBuscar: number): Observable<EmpleadoDto>{
    return this.http.get<EmpleadoDto>(environment.EMPLEADO_BYID + idBuscar);
  }

  consultarEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(environment.EMPLEADOS);
  }

  consultarEmpleadosSalarioAnual(): Observable<EmpleadoDto[]>{
    return this.http.get<EmpleadoDto[]>(environment.EMPLEADOS_SALARIO);
  }

}
