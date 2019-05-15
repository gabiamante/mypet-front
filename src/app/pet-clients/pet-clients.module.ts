import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { BuscaPetClientComponent } from './busca-pet-client/busca-pet-client.component';
import { CadastraPetClientComponent } from './cadastra-pet-client/cadastra-pet-client.component';
import { FiltroPeloNome } from './busca-pet-client/filtro-pelo-nome.pipe';
import { TabelaBuscaPetClientsComponent } from './busca-pet-client/tabela-busca-pet-clients/tabela-busca-pet-clients.component';
import { AtualizaPetClientComponent } from './atualiza-pet-client/atualiza-pet-client.component';
import { DeletaPetClientComponent } from './deleta-pet-client/deleta-pet-client.component';
import { TabelaDeletaPetClientsComponent } from './deleta-pet-client/tabela-deleta-pet-clients/tabela-deleta-pet-clients.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputMaskModule,
    TableModule,
    ButtonModule
  ],
  declarations: [
    BuscaPetClientComponent,
    CadastraPetClientComponent,
    FiltroPeloNome,
    TabelaBuscaPetClientsComponent,
    AtualizaPetClientComponent,
    TabelaDeletaPetClientsComponent,
    DeletaPetClientComponent
  ],
  exports: [
    BuscaPetClientComponent,
    CadastraPetClientComponent,
    AtualizaPetClientComponent
  ]
})
export class PetClientsModule { }
