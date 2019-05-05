import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPetVetComponent } from './cadastra-pet-vet.component';

describe('CadastraPetVetComponent', () => {
  let component: CadastraPetVetComponent;
  let fixture: ComponentFixture<CadastraPetVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraPetVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPetVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
