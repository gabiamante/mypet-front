import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EscolhaPerfilComponent } from './escolha-perfil.component';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  declarations: [
    EscolhaPerfilComponent
  ],

  exports: [
    EscolhaPerfilComponent
  ]
})
export class EscolhaPerfilModule { }
