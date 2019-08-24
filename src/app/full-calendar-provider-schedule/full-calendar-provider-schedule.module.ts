import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarProviderScheduleComponent } from './full-calendar-provider-schedule.component';

@NgModule({
  declarations: [
    FullCalendarProviderScheduleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FullCalendarProviderScheduleComponent
  ]
})
export class FullCalendarProviderScheduleModule { }
