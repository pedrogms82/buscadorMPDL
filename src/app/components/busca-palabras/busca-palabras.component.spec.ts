import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPalabrasComponent } from './busca-palabras.component';

describe('BuscaPalabrasComponent', () => {
  let component: BuscaPalabrasComponent;
  let fixture: ComponentFixture<BuscaPalabrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaPalabrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
