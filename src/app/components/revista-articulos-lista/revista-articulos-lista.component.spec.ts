import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaArticulosListaComponent } from './revista-articulos-lista.component';

describe('RevistaArticulosListaComponent', () => {
  let component: RevistaArticulosListaComponent;
  let fixture: ComponentFixture<RevistaArticulosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevistaArticulosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevistaArticulosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
