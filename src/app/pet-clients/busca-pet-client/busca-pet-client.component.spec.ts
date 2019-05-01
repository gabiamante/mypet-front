import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPetClientComponent } from './busca-pet-client.component';

describe('BuscaPetClientComponent', () => {
  let component: BuscaPetClientComponent;
  let fixture: ComponentFixture<BuscaPetClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaPetClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaPetClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
