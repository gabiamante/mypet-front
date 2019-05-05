import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPetWalkerComponent } from './cadastra-pet-walker.component';

describe('CadastraPetWalkerComponent', () => {
  let component: CadastraPetWalkerComponent;
  let fixture: ComponentFixture<CadastraPetWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraPetWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPetWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
