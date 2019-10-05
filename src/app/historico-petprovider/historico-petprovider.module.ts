import { FormsModule } from '@angular/forms';
import { PanelModule, ButtonModule, DataTableModule, ToggleButtonModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HistoricoPetproviderComponent } from './historico-petprovider.component';

@NgModule({
  declarations: [
    HistoricoPetproviderComponent
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
    HistoricoPetproviderComponent
  ]
})
export class HistoricoPetproviderModule { }

