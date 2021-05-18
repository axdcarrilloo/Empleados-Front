import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSinCalculoComponent } from './tabla-sin-calculo.component';

describe('TablaSinCalculoComponent', () => {
  let component: TablaSinCalculoComponent;
  let fixture: ComponentFixture<TablaSinCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSinCalculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSinCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
