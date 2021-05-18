import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSalarioCalculadoComponent } from './tabla-salario-calculado.component';

describe('TablaSalarioCalculadoComponent', () => {
  let component: TablaSalarioCalculadoComponent;
  let fixture: ComponentFixture<TablaSalarioCalculadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSalarioCalculadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSalarioCalculadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
