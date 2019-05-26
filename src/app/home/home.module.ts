import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

@NgModule({
  declarations: [
    HomeComponent,
    PesquisarComponent,
    FornecedoresComponent,
    QuemSomosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    HomeComponent,
    PesquisarComponent,
    FornecedoresComponent,
    QuemSomosComponent
  ],
  bootstrap: [
    HomeComponent,
    PesquisarComponent
  ]
})
export class HomeModule { }
