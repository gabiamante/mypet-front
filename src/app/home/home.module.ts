import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HttpModule } from '@angular/http';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    HomeComponent,
    FornecedoresComponent,
    QuemSomosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    HttpModule,
    TableModule
  ],
  exports:[
    HomeComponent,
    FornecedoresComponent,
    QuemSomosComponent
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule { }
