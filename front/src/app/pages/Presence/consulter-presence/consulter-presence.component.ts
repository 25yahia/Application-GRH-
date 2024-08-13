import  interactionPlugin  from '@fullcalendar/interaction';
import  dayGridPlugin  from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-presence',
  templateUrl: './consulter-presence.component.html',
  styleUrls: ['./consulter-presence.component.scss']
})
export class ConsulterPresenceComponent implements OnInit {
  calendarOptions: CalendarOptions;
  currentDate: string;

  constructor() { 
  this.calendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [
      {
        title: 'Réunion existante',
        start: '2023-03-15',
        allDay: true
      }
    ]
  };
  }
  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString('fr-FR', {
      weekday: 'long', // jour de la semaine
      day: 'numeric', // jour du mois
      month: 'long', // mois
      year: 'numeric' // année
    });
  }
  handleDateClick(arg) {
    const newEvent = {
      title: ' Present(e)',
      start: arg.dateStr,
      allDay: true
    };

    // Vérifiez que events est un tableau et concaténez le nouvel événement
    const currentEvents = this.calendarOptions.events as any[];
    this.calendarOptions.events = [
      ...currentEvents,
      newEvent
    ];

    // Cette ligne permet de forcer la mise à jour des options du calendrier
    this.calendarOptions = { ...this.calendarOptions };
  }

}