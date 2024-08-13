import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  showPassword: boolean = false;
  erreur: number= 0;
  user=new User();
  constructor(private authService:AuthService,  private  router: Router) {}

  ngOnInit() {
  }

  onLoggedin() { 
    
    console.log(this.user); 
    let isValidUser: Boolean= this.authService.SignIn(this.user); 
   
    if (isValidUser) 
       this.router.navigate(['user-profile']); 
    else 
      // alert('Login ou mot de passe incorrecte!');
    this.erreur=1; 
    }

    



    ngOnDestroy() {
    }
  
    onLogout(){
      this.authService.logout();
    }
  
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }

  }








