import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  
    { path: '/user-profile', title: 'Mon profile',  icon:'ni-single-02 text-yellow', class: '' },
    {path: '/consulteremployes', title: 'Employés', icon: 'fa fa-users text-green', class: '' },
   
    {path: '/consultercontrat', title: 'Contrats',   icon: 'fa fa-file-contract text-blue', class: '' },
    {path: '/consultercongé', title: 'Congés', icon: 'fa fa-suitcase-rolling text-purple', class: '' },
    {path: '/consulterdemande', title: 'Demandes Administratives',  icon: 'ni-archive-2 text-brown', class: '' },
    {path:'/consulterpresence',title: 'Présence',icon: 'fa fa-user-check text-orange', class: '' },
  

    // {path:'/consulterreunion',title: 'Réunion',icon: 'fa fa-calendar-check text-red', class: '' },
   
    {path:'/consulterfichedepaie',title: 'Fiche De Paie',icon: 'ni-money-coins text-green', class: '' },
    {path:'/consultercandidat',title: 'Candidats',icon: 'ni-circle-08 text-green', class: '' },
    { path: '/role', title: 'Rôles',  icon: 'fa fa-user-lock text-indigo', class: '' },
    {path: '/consulterDepartement', title: 'Départements',  icon: 'ni-building text-blue', class: '' },
 // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
  //{ path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
 // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
 // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
];



export const ROUTES1: RouteInfo[] = [
  { path: '/user-profile', title: 'Mon profile',  icon:'ni-single-02 text-yellow', class: '' },
  {path: '/consultercongé', title: 'Congés', icon: 'fa fa-suitcase-rolling text-purple', class: '' },
  {path: '/consulterdemande', title: 'Demandes Administratives',  icon: 'ni-archive-2 text-brown', class: '' },
  {path:'/consulterreunion',title: 'Réunion',icon: 'fa fa-calendar-check text-red', class: '' },

];

export const ROUTES2: RouteInfo[] = [
  { path: '/user-profile', title: ' Mon profile',  icon:'ni-single-02 text-yellow', class: '' },
  {path:'/consultercandidat',title: 'Candidats',icon: 'ni-circle-08 text-green', class: '' },
  {path: '/consulteremployes', title: 'Employés', icon: 'fa fa-users text-green', class: '' },
  {path: '/consultercongé', title: 'Congés', icon: 'fa fa-suitcase-rolling text-purple', class: '' },
  {path: '/consulterdemande', title: 'Demandes Administratives',  icon: 'ni-archive-2 text-brown', class: '' },
  {path:'/consulterreunion',title: 'Réunion',icon: 'fa fa-calendar-check text-red', class: '' },
  {path: '/consulterDepartement', title: 'Départements',  icon: 'ni-building text-blue', class: '' },
  

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public menuItems1: any[];
  public menuItems2: any[];
  constructor(private router: Router,public authService:AuthService ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

   this.menuItems1 = ROUTES1.filter(menuItem => menuItem);
   this.router.events.subscribe((event) => {
     this.isCollapsed = true;
  });
  this.menuItems2 = ROUTES2.filter(menuItem => menuItem);
  this.router.events.subscribe((event) => {
    this.isCollapsed = true;
 });








  }
}
