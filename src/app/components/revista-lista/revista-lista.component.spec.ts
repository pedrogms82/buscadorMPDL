import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaListaComponent } from './revista-lista.component';

describe('RevistaListaComponent', () => {
  let component: RevistaListaComponent;
  let fixture: ComponentFixture<RevistaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevistaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevistaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
