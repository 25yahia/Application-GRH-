

import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [{"id":"2","UserNName":"RH","password":"YAHIA123","roles":['ADMIN']},
                   {"id":"4","UserNName":"Responsable","password":"MERIEM1234","roles":['resp']},  
                    {"id":"6","UserNName":"Ahmed","password":"AHMED12345","roles":['USER']} ]; 

  public loggedUser!:string;
  public loggedid!:string;
   public isloggedIn: Boolean = false;
  public roles!:string[];
   


  constructor(private router: Router,) {  this.loadSessionData();}

  private loadSessionData() {
    const loggedUser = localStorage.getItem('loggedUser');
    const isloggedIn = localStorage.getItem('isloggedIn');

    if (loggedUser && isloggedIn === 'true') {
      this.loggedUser = loggedUser;
      this.isloggedIn = true;
      this.getUserRoles(loggedUser);  
    }
  }


  SignIn(user :User):Boolean{ 
    let validUser: Boolean = false; 
    this.users.forEach((curUser) => { 
      if(user.UserNName== curUser.UserNName && user.password==curUser.password) { 
        validUser = true; 
        this.loggedUser = curUser.UserNName; 
        this.loggedid = curUser.id;
        this.isloggedIn = true; 
        this.roles = curUser.roles; 
        localStorage.setItem('loggedUser',this.loggedUser); 
        localStorage.setItem('loggedid',this.loggedid); 
        localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
      } 
    }); 
 
     return validUser; 
  } 
  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  // isAdmin():Boolean{ 
  //   if (!this.roles) //this.roles== undefiened 
  //      return false; 
  //   return  (this.roles.indexOf('ADMIN') >-1); 
  // } 

  isUser(): Boolean {
    if (!this.roles) // this.roles == undefined
      return false;
    
    return this.roles.indexOf('USER') > -1;
    
  }
  isuser():Number{
    if (!this.roles) // this.roles == undefined
    return 0;

    else if(this.roles.indexOf('USER')> -1)
      {
        return 1;
      }
      else if(this.roles.indexOf('ADMIN')> -1)
        {
          return 2;
        }

        else return 3;

  }
  isRESP(): Boolean {
    if (!this.roles) // this.roles == undefined
      return false;
    return this.roles.indexOf('resp') > -1;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }


  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.UserNName === username) {
        this.roles = curUser.roles;
      }
    });
  }







}