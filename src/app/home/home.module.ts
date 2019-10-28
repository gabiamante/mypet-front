import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { ResultadoComponent } from './home/resultado/resultado.component';
import { DetalhesComponent } from './home/detalhes/detalhes.component';
import { FiltroPelaCidade } from './home/filtro-pela-cidade.pipe';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }  from '@angular/forms';
import { BuscarFornecedoresComponent } from './home/buscar-fornecedores/buscar-fornecedores.component';
import {DropdownModule} from 'primeng/dropdown';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule, MatButtonModule} from '@angular/material';
import { CardsComponent } from './cards/cards.component';
@NgModule({
  declarations: [
    QuemSomosComponent,
    FiltroPelaCidade,
    HomeComponent,
    ResultadoComponent,
    DetalhesComponent,
    BuscarFornecedoresComponent,
    CardsComponent

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
    DropdownModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    QuemSomosComponent,
    FiltroPelaCidade,
    HomeComponent,
    ResultadoComponent,
    DetalhesComponent
  ]
})
export class HomeModule { }
