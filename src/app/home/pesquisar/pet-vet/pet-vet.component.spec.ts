import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetVetComponent } from './pet-vet.component';

describe('PetVetComponent', () => {
  let component: PetVetComponent;
  let fixture: ComponentFixture<PetVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
