import { NgModule } from '@angular/core';
import {MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule, ButtonModule, DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PerfilPetClientComponent } from './perfil-pet-client/perfil-pet-client.component';
import { PerfilPetProviderComponent } from './perfil-pet-provider/perfil-pet-provider.component';


@NgModule({
  declarations: [
    PerfilPetClientComponent,
    PerfilPetProviderComponent
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
  ]
})
export class TelaInicialLoginModule { }
