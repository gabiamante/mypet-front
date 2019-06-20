import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HttpModule } from '@angular/http';
import {TableModule} from 'primeng/table';
import { FiltroPelaCidade } from './home/filtro-pela-cidade.pipe';
import { HomeComponent } from './home/home.component';
import { PesquisarComponent } from './home/pesquisar/pesquisar.component';
import { DetalhesComponent } from './home/detalhes/detalhes.component';


@NgModule({
  declarations: [
    FornecedoresComponent,
    QuemSomosComponent,
    FiltroPelaCidade,
    HomeComponent,
    PesquisarComponent,
    DetalhesComponent

  ],
  imports: [
    CommonModule,
    ButtonModule,
    HttpModule,
    TableModule
  ],
  exports:[
    FornecedoresComponent,
    QuemSomosComponent,
    FiltroPelaCidade,
    HomeComponent,
    PesquisarComponent,
    DetalhesComponent
  ]
})
export class HomeModule { }
