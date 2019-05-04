import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaPetClientComponent } from './busca-pet-client/busca-pet-client.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastraPetClientComponent } from './cadastra-pet-client/cadastra-pet-client.component';
import { FiltroPeloNome } from './busca-pet-client/filtro-pelo-nome.pipe';
import { TabelaPetClientsComponent } from './busca-pet-client/tabela-pet-clients/tabela-pet-clients.component';
import { FormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputMaskModule
  ],
  declarations: [
    BuscaPetClientComponent,
    CadastraPetClientComponent,
    FiltroPeloNome,
    TabelaPetClientsComponent
  ],
  exports: [
    BuscaPetClientComponent,
    CadastraPetClientComponent
  ]
})
export class PetClientsModule { }
