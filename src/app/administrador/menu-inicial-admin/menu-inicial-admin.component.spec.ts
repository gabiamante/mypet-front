import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInicialAdminComponent } from './menu-inicial-admin.component';

describe('MenuInicialAdminComponent', () => {
  let component: MenuInicialAdminComponent;
  let fixture: ComponentFixture<MenuInicialAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInicialAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInicialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
