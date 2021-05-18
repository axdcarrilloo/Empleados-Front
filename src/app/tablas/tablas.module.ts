import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

import { TablaSalarioCalculadoComponent } from './tabla-salario-calculado/tabla-salario-calculado.component';
import { TablaSinCalculoComponent } from './tabla-sin-calculo/tabla-sin-calculo.component';

@NgModule({
  declarations: [TablaSalarioCalculadoComponent, TablaSinCalculoComponent],
  imports: [
    CommonModule, MatTableModule, FormsModule
  ],
  exports: [TablaSalarioCalculadoComponent, TablaSinCalculoComponent]
})
export class TablasModule { }
