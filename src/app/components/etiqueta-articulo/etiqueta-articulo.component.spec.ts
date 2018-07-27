import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaArticuloComponent } from './etiqueta-articulo.component';

describe('EtiquetaArticuloComponent', () => {
  let component: EtiquetaArticuloComponent;
  let fixture: ComponentFixture<EtiquetaArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetaArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
