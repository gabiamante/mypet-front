import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { PesquisarComponent } from './home/pesquisar/pesquisar.component';
import { DetalhesComponent } from './home/detalhes/detalhes.component';
import { FiltroPelaCidade } from './home/filtro-pela-cidade.pipe';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }  from '@angular/forms';
import { BuscarFornecedoresComponent } from './buscar-fornecedores/buscar-fornecedores.component';
import {DropdownModule} from 'primeng/dropdown';
import { ResultadoFornecedoresComponent } from './resultado-fornecedores/resultado-fornecedores.component';

@NgModule({
  declarations: [
    QuemSomosComponent,
    FiltroPelaCidade,
    HomeComponent,
    PesquisarComponent,
    DetalhesComponent,
    BuscarFornecedoresComponent,
    ResultadoFornecedoresComponent

  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    CardModule,
    CheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule
  ],
  exports: [
    QuemSomosComponent,
    FiltroPelaCidade,
    HomeComponent,
    PesquisarComponent,
    DetalhesComponent
  ]
})
export class HomeModule { }
