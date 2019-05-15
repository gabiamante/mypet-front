import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AcaoPerfilComponent } from './acao-perfil.component';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuModule} from 'primeng/menu';

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    MenuModule
  ],
  declarations: [
    AcaoPerfilComponent
  ],

  exports: [
    AcaoPerfilComponent
  ]
})
export class AcaoPerfilModule { }
