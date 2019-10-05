import { HistoricoPetclientComponent } from './historico-petclient.component';
import { FormsModule } from '@angular/forms';
import { PanelModule, ButtonModule, DataTableModule, ToggleButtonModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    HistoricoPetclientComponent
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
    HistoricoPetclientComponent
  ]
})
export class HistoricoPetclientModule { }
