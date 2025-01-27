


import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule, DataTableModule, PanelModule, TabViewModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaServiceContratadosClientComponent } from './lista-service-contratados-client.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ListaServiceContratadosClientComponent
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
    ToggleButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ListaServiceContratadosClientComponent
  ],
})
export class ListaServiceContratadosClientModule {}
