import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoPerfilComponent } from './acao-perfil.component';

describe('AcaoPerfilComponent', () => {
  let component: AcaoPerfilComponent;
  let fixture: ComponentFixture<AcaoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
