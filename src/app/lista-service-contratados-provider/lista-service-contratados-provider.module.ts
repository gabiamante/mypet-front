import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule, DataTableModule, PanelModule, TabViewModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaServiceContratadosProviderComponent } from './lista-service-contratados-provider.component';

@NgModule({
  declarations: [
    ListaServiceContratadosProviderComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    TabViewModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    DataTableModule,
    TableModule,
    FormsModule,
    ButtonModule,
    ToggleButtonModule
  ],
  exports: [
    ListaServiceContratadosProviderComponent
  ]
})
export class ListaServiceContratadosProviderModule { }
