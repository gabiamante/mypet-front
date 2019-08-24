import { Component, OnInit, Input } from '@angular/core';


import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import { FullCalendarProviderScheduleService } from './full-calendar-provider-schedule.service';


@Component({
  selector: 'app-full-calendar-provider-schedule',
  templateUrl: './full-calendar-provider-schedule.component.html',
  styleUrls: ['./full-calendar-provider-schedule.component.css']
})
export class FullCalendarProviderScheduleComponent implements OnInit {

varCalendarDaySchedule: FullCalendarProviderScheduleService;

@Input()
  set configurations(config: any) {
    if (config) {
      this.defaultConfigurations = config;
         }
      }
@Input() eventData: any;
   defaultConfigurations: any;

  constructor() {

    /*
    this.eventData = [
      {
         title: 'event1',
         start: moment()
      },
      {
         title: 'event2',
         start: moment(),
         end: moment().add(2, 'days')
      },
  ];*/

    this.defaultConfigurations = {
      editable: true,
               eventLimit: true,
               titleFormat: 'MMM D YYYY',
               header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'month,agendaWeek,agendaDay'
               },
               buttonText: {
                  today: 'Today',
                  month: 'Month',
                  week: 'Week',
                  day: 'Day'
               },
               views: {
                  agenda: {
                     eventLimit: 2
                  }
               },
               allDaySlot: false,
               slotDuration: moment.duration('00:15:00'),
               slotLabelInterval: moment.duration('01:00:00'),
               firstDay: 1,
               selectable: true,
               selectHelper: true,
               events: this.eventData,
               dayClick: (date, jsEvent, activeView) => {
                this.dayClick(date, jsEvent, activeView);
             },
             eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
                this.eventDragStart(
                    timeSheetEntry, jsEvent, ui, activeView
                );
             },
       eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
                this.eventDragStop(
                   timeSheetEntry, jsEvent, ui, activeView
                );
             },

            };
  }

  ngOnInit() {
    $('#full-calendar-provider-schedule').fullCalendar(
      this.defaultConfigurations
   );
  }


  dayClick(date, jsEvent, activeView) {
    console.log('day click: ' + date);

    var m = moment(date);
    m.stripTime();
    m.hasTime();
    m.stripZone();
    m.format();
    alert(m);

 }

 eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag start');
 }
 eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag end');
 }


}
