import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaServiceContratadosClientComponent } from './lista-service-contratados-client.component';


describe('ListaServiceContratadosClientComponent', () => {
  let component: ListaServiceContratadosClientComponent;
  let fixture: ComponentFixture<ListaServiceContratadosClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaServiceContratadosClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServiceContratadosClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
