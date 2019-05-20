import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { PesquisarComponent } from './pesquisar/pesquisar.component';

@NgModule({
  declarations: [
    HomeComponent,
    PesquisarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    HomeComponent,
    PesquisarComponent
  ],
  bootstrap: [
    HomeComponent,
    PesquisarComponent
  ]
})
export class HomeModule { }
