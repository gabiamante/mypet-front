import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFisicaComponent } from './cadastro-fisica.component';

describe('CadastroFisicaComponent', () => {
  let component: CadastroFisicaComponent;
  let fixture: ComponentFixture<CadastroFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
