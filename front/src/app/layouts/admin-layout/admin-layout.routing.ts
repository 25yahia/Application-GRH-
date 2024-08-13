import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { RoleComponent } from 'src/app/pages/Role/consulterRole/role.component';

import { AjouterRoleComponent } from 'src/app/pages/Role/ajouter-role/ajouter-role.component';
import { ModifierRoleComponent } from 'src/app/pages/Role/modifier-role/modifier-role.component';
import { ConsulterDepartementComponent } from 'src/app/pages/Departement/consulter-departement/consulter-departement.component';

import { AjouterDepartementComponent } from 'src/app/pages/Departement/ajouter-departement/ajouter-departement.component';
import { ModifierDepartementComponent } from 'src/app/pages/Departement/modifier-departement/modifier-departement.component';
import { ConsulterContratComponent } from 'src/app/pages/Contrat/consulter-contrat/consulter-contrat.component';
import { AjouterContratComponent } from 'src/app/pages/Contrat/ajouter-contrat/ajouter-contrat.component';
import { ModifierContratComponent } from 'src/app/pages/Contrat/modifier-contrat/modifier-contrat.component';
import { ConsulterCongeComponent } from 'src/app/pages/Congé/consulter-conge/consulter-conge.component';
import { AjouterCongeComponent } from 'src/app/pages/Congé/ajouter-conge/ajouter-conge.component';
import { ModifierCongeComponent } from 'src/app/pages/Congé/modifier-conge/modifier-conge.component';
import { ConsulterDemandeComponent } from 'src/app/pages/DemandeAdministrative/consulter-demande/consulter-demande.component';
import { AjouterDemandeComponent } from 'src/app/pages/DemandeAdministrative/ajouter-demande/ajouter-demande.component';
import { ConsulterTypecontratComponent } from 'src/app/pages/TypeContrat/consulter-typecontrat/consulter-typecontrat.component';
import { ModifierDemandeComponent } from 'src/app/pages/DemandeAdministrative/modifier-demande/modifier-demande.component';
import { AjouterTypecontratComponent } from 'src/app/pages/TypeContrat/ajouter-typecontrat/ajouter-typecontrat.component';
import { ModifierTypecontratComponent } from 'src/app/pages/TypeContrat/modifier-typecontrat/modifier-typecontrat.component';
import { ConsulterTypecongeComponent } from 'src/app/pages/TypeConge/consulter-typeconge/consulter-typeconge.component';
import { AjouterTypecongeComponent } from 'src/app/pages/TypeConge/ajouter-typeconge/ajouter-typeconge.component';
import { ModifierTypecongeComponent } from 'src/app/pages/TypeConge/modifier-typeconge/modifier-typeconge.component';
import { ConsulterTypedemandeComponent } from 'src/app/pages/TypedeDemandeAdmin/consulter-typedemande/consulter-typedemande.component';
import { AjouterTypedemandeComponent } from 'src/app/pages/TypedeDemandeAdmin/ajouter-typedemande/ajouter-typedemande.component';
import { ModifierTypedemandeComponent } from 'src/app/pages/TypedeDemandeAdmin/modifier-typedemande/modifier-typedemande.component';
import { ConsulterEmployesComponent } from 'src/app/pages/Employés/consulter-employes/consulter-employes.component';
import { AjouterEmployesComponent } from 'src/app/pages/Employés/ajouter-employes/ajouter-employes.component';
import { ModifierEmployesComponent } from 'src/app/pages/Employés/modifier-employes/modifier-employes.component';
import { ListeArchivesComponent } from 'src/app/pages/Employés/liste-archives/liste-archives.component';
import { DetailsEmployeComponent } from 'src/app/pages/Employés/details-employe/details-employe.component';
import { ConsulterCandidatComponent } from 'src/app/pages/Candidat/consulter-candidat/consulter-candidat.component';
import { DetailsCandidatComponent } from 'src/app/pages/Candidat/details-candidat/details-candidat.component';
import { ConsulterReunionComponent } from 'src/app/pages/Reunion/consulter-reunion/consulter-reunion.component';
import { ModifierUserProfileComponent } from 'src/app/pages/user-profile/modifier-user-profile/modifier-user-profile.component';
import { ForbiddenComponent } from 'src/app/forbidden/forbidden.component';
import { UserGuard } from 'src/app/user.guard';
import { DetailsDemandeComponent } from 'src/app/pages/DemandeAdministrative/details-demande/details-demande.component';
import { DetailsCongeComponent } from 'src/app/pages/Congé/details-conge/details-conge.component';
import { AjouterReunionComponent } from 'src/app/pages/Reunion/ajouter-reunion/ajouter-reunion.component';
import { DetailsFicheDePaieComponent } from 'src/app/pages/FicheDePaie/details-fiche-de-paie/details-fiche-de-paie.component';
import { ConsulterFicheDePaieComponent } from 'src/app/pages/FicheDePaie/consulter-fiche-de-paie/consulter-fiche-de-paie.component';
import { AjouterFicheDePaieComponent } from 'src/app/pages/FicheDePaie/ajouter-fiche-de-paie/ajouter-fiche-de-paie.component';
import { ConsulterPresenceComponent } from 'src/app/pages/Presence/consulter-presence/consulter-presence.component';
import { ModifierReunionComponent } from 'src/app/pages/Reunion/modifier-reunion/modifier-reunion.component';
import { ConsulterTypereunionComponent } from 'src/app/pages/TypeReunion/consulter-typereunion/consulter-typereunion.component';
import { AjouterTypereunionComponent } from 'src/app/pages/TypeReunion/ajouter-typereunion/ajouter-typereunion.component';
import { ModifierTypereunionComponent } from 'src/app/pages/TypeReunion/modifier-typereunion/modifier-typereunion.component';
import { ReponseDemandeComponent } from 'src/app/pages/DemandeAdministrative/reponse-demande/reponse-demande.component';





export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate:[UserGuard] },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'modifier-user-profile',  component: ModifierUserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'role',          component:RoleComponent},
    { path: 'role',          component:RoleComponent,canActivate:[UserGuard]},
    {path: "modifier-role/:id", component :ModifierRoleComponent,canActivate:[UserGuard]},
    {path: "AjouterRole", component :AjouterRoleComponent, canActivate:[UserGuard]},
    {path: "consulterDepartement", component :ConsulterDepartementComponent},
    {path: "ajouterDepartement", component :AjouterDepartementComponent,canActivate:[UserGuard]},
    {path: "modifierDepartement/:id", component :ModifierDepartementComponent,canActivate:[UserGuard]},
    {path: "consultercontrat", component :ConsulterContratComponent},
    {path: "ajoutercontrat", component :AjouterContratComponent,canActivate:[UserGuard]},
    {path: "modifiercontrat/:id", component :ModifierContratComponent,canActivate:[UserGuard]},
    {path: "consultercongé", component :ConsulterCongeComponent},
    {path: "ajoutercongé", component :AjouterCongeComponent},
    {path: "modifiercongé/:id", component :ModifierCongeComponent},
    {path: "consulterdemande", component :ConsulterDemandeComponent},
    {path: "ajouterdemande", component :AjouterDemandeComponent},
    {path: "modifierdemande/:id", component :ModifierDemandeComponent},
    {path: "consultertypecontrat", component :ConsulterTypecontratComponent},
    {path: "ajoutertypecontrat", component :AjouterTypecontratComponent,canActivate:[UserGuard]},
    {path: "modifiertypecontrat/:id", component :ModifierTypecontratComponent,canActivate:[UserGuard]},
    {path: "consultertypeconge", component :ConsulterTypecongeComponent,canActivate:[UserGuard]},
    {path: "ajoutertypeconge", component :AjouterTypecongeComponent,canActivate:[UserGuard]},
    {path: "modifiertypeconge/:id", component :ModifierTypecongeComponent,canActivate:[UserGuard]},
    {path: "consultertypedemande", component :ConsulterTypedemandeComponent},
    {path: "ajoutertypedemande", component :AjouterTypedemandeComponent,canActivate:[UserGuard]},
    {path: "modifiertypedemande/:id", component :ModifierTypedemandeComponent},
    {path: "consulteremployes", component :ConsulterEmployesComponent},
    {path: "ajouteremployes", component :AjouterEmployesComponent,canActivate:[UserGuard]},
    {path: "modifieremployes", component :ModifierEmployesComponent,canActivate:[UserGuard]},
    {path: "listearchives", component :ListeArchivesComponent},
    {path: "detailsemploye/:id",component:DetailsEmployeComponent},
    {path: "consultercandidat",component:ConsulterCandidatComponent},
    {path: "consulterfichedepaie",component:ConsulterFicheDePaieComponent}, 
    {path: "detailscandidat/:id",component:DetailsCandidatComponent},
    {path: "detailsdemande/:id",component:DetailsDemandeComponent},
    {path: "detailsfichedepaie/:id",component:DetailsFicheDePaieComponent},
    {path: "detailsconge/:id",component:DetailsCongeComponent},

    {path: "consulterreunion",component:ConsulterReunionComponent},
    {path: "consulterpresence",component:ConsulterPresenceComponent},
    {path: "ajouterreunion",component:AjouterReunionComponent},
    {path: "ajouterfichedepaie",component:AjouterFicheDePaieComponent},
    {path: "detailsconge/:id",component:DetailsCongeComponent},
    {path: "modifierreunion/:id", component :ModifierReunionComponent},

    {path:  'app-forbidden', component: ForbiddenComponent}, 

    {path: "consultertypereunion", component :ConsulterTypereunionComponent},
    {path: "ajoutertypereunion", component :AjouterTypereunionComponent},
    {path: "modifiertypereunion/:id", component :ModifierTypereunionComponent},
    {path: "reponsedemande/:id", component :ReponseDemandeComponent},

];
