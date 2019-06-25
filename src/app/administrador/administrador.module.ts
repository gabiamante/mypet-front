import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInicialAdminComponent } from './menu-inicial-admin/menu-inicial-admin.component';
import {MenuModule } from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { PanelModule, DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { DeletaPetClientComponent } from './menu-inicial-admin/deleta-pet-client/deleta-pet-client.component';
import { FiltroPeloNome } from './menu-inicial-admin/deleta-pet-client/filtro-pelo-nome.pipe';
import { TabelaDeletaPetClientsComponent } from './menu-inicial-admin/deleta-pet-client/tabela-deleta-pet-clients/tabela-deleta-pet-clients.component';
import { TableModule } from 'primeng/table';
import { DeletaPetProviderComponent } from './menu-inicial-admin/deleta-pet-provider/deleta-pet-provider.component';
import { TabelaDeletaPetProviderComponent } from './menu-inicial-admin/deleta-pet-provider/tabela-deleta-pet-provider/tabela-deleta-pet-provider.component';
import { BuscarPetProviderComponent } from './menu-inicial-admin/busca-pet-provider/busca-pet-provider.component';
import { TabelaBuscarPetProviderComponent } from './menu-inicial-admin/busca-pet-provider/tabela-busca-pet-provider/tabela-busca-pet-provider.component';
import { BuscarPetClientComponent } from './menu-inicial-admin/busca-pet-client/busca-pet-client.component';
import { TabelaBuscarPetClientsComponent } from './menu-inicial-admin/busca-pet-client/tabela-busca-pet-clients/tabela-busca-pet-clients.component';

@NgModule({
  declarations: [
    MenuInicialAdminComponent,
    DeletaPetClientComponent,
    TabelaDeletaPetClientsComponent,
    FiltroPeloNome,
    TabelaDeletaPetProviderComponent,
    DeletaPetProviderComponent,
    BuscarPetProviderComponent,
    TabelaBuscarPetProviderComponent,
    BuscarPetClientComponent,
    TabelaBuscarPetClientsComponent
    

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
export class AdministradorModule { }
