import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPetShopComponent } from './cadastra-pet-shop.component';

describe('CadastraPetShopComponent', () => {
  let component: CadastraPetShopComponent;
  let fixture: ComponentFixture<CadastraPetShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraPetShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPetShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
