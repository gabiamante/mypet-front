import { NgModule } from '@angular/core';
import {MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { TelaInicialPetProviderComponent } from './tela-inicial-pet-provider/tela-inicial-pet-provider.component';
import { TelaInicialPetClientComponent } from './tela-inicial-pet-client/tela-inicial-pet-client.component';
import { PerfilPetClientComponent } from './tela-inicial-pet-client/perfil-pet-client/perfil-pet-client.component';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule, ButtonModule, DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    TelaInicialPetProviderComponent, 
    TelaInicialPetClientComponent, 
    PerfilPetClientComponent
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
