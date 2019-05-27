import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetWalkerComponent } from './pet-walker.component';

describe('PetWalkerComponent', () => {
  let component: PetWalkerComponent;
  let fixture: ComponentFixture<PetWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
