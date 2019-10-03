import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CriacaoAgendaPetproviderComponent } from './criacao-agenda-petprovider.component';
import {ButtonModule} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    CriacaoAgendaPetproviderComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    ToggleButtonModule,
    CardModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    RadioButtonModule
  ],
  exports: [
    CriacaoAgendaPetproviderComponent
  ]
})
export class CriacaoAgendaPetproviderModule { }
