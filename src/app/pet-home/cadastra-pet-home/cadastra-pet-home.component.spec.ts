import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPetHomeComponent } from './cadastra-pet-home.component';

describe('CadastraPetHomeComponent', () => {
  let component: CadastraPetHomeComponent;
  let fixture: ComponentFixture<CadastraPetHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraPetHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
