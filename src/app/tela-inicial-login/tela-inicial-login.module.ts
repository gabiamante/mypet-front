import { NgModule } from '@angular/core';
import {MenuModule } from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { PanelModule, DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TelaInicialPetProviderComponent } from './tela-inicial-pet-provider/tela-inicial-pet-provider.component';
import { TelaInicialPetClientComponent } from './tela-inicial-pet-client/tela-inicial-pet-client.component';
import { PerfilPetClientComponent } from './tela-inicial-pet-client/perfil-pet-client/perfil-pet-client.component';


@NgModule({
  declarations: [
    TelaInicialPetProviderComponent, 
    TelaInicialPetClientComponent,
    PerfilPetClientComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class TelaInicialLoginModule { }
