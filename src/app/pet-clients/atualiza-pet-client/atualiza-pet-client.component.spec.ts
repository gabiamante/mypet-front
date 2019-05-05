import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaPetClientComponent } from './atualiza-pet-client.component';

describe('AtualizaPetClientComponent', () => {
  let component: AtualizaPetClientComponent;
  let fixture: ComponentFixture<AtualizaPetClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaPetClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaPetClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
