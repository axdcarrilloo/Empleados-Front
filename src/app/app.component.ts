
import { Component } from '@angular/core'
import { EmpleadoDto } from './modelo/empleado-dto';
import { EmpleadoServiceService } from './services/empleado-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tablaMostrar = 1;

  constructor(){}
  
  mostrarTabla(event: any): void{
    this.tablaMostrar = event.target.value;
  }

}
