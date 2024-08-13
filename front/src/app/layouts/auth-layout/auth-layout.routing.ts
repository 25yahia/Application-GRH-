import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { DeposCandidatComponent } from 'src/app/pages/Candidat/depos-candidat/depos-candidat.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'depôtcandidature',       component: DeposCandidatComponent }
];
