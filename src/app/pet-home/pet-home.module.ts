import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { CadastraPetHomeComponent } from './cadastra-pet-home/cadastra-pet-home.component';
import { AtualizaPetHomeComponent } from './atualiza-pet-home/atualiza-pet-home.component';
import { BuscaPetHomeComponent } from './busca-pet-home/busca-pet-home.component';
import { FiltroPeloNome } from './busca-pet-home/filtro-pelo-nome.pipe';
import { TabelaBuscaPetHomeComponent } from './busca-pet-home/tabela-busca-pet-home/tabela-busca-pet-home.component';
import { TabelaDeletaPetHomeComponent } from './deleta-pet-home/tabela-deleta-pet-home/tabela-deleta-pet-home.component';
import { DeletaPetHomeComponent } from './deleta-pet-home/deleta-pet-home.component';

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
    CadastraPetHomeComponent,
    AtualizaPetHomeComponent,
    BuscaPetHomeComponent,
    DeletaPetHomeComponent,
    FiltroPeloNome,
    TabelaBuscaPetHomeComponent,
    TabelaDeletaPetHomeComponent
    ],
  exports: [
    CadastraPetHomeComponent,
    AtualizaPetHomeComponent,
    BuscaPetHomeComponent,
    DeletaPetHomeComponent
  ]
})
export class PetHomeModule { }
