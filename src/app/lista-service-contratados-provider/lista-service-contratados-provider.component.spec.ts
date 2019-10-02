import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServiceContratadosProviderComponent } from './lista-service-contratados-provider.component';

describe('ListaServiceContratadosProviderComponent', () => {
  let component: ListaServiceContratadosProviderComponent;
  let fixture: ComponentFixture<ListaServiceContratadosProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaServiceContratadosProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServiceContratadosProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
