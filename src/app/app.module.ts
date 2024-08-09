import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { RoleComponent } from './pages/Role/consulterRole/role.component';

import { AjouterRoleComponent } from './pages/Role/ajouter-role/ajouter-role.component';
import { ModifierRoleComponent } from './pages/Role/modifier-role/modifier-role.component';
import { AjouterDepartementComponent } from './pages/Departement/ajouter-departement/ajouter-departement.component';
import { ModifierDepartementComponent } from './pages/Departement/modifier-departement/modifier-departement.component';
import { ConsulterDepartementComponent } from './pages/Departement/consulter-departement/consulter-departement.component';
import { ConsulterContratComponent } from './pages/Contrat/consulter-contrat/consulter-contrat.component';
import { AjouterContratComponent } from './pages/Contrat/ajouter-contrat/ajouter-contrat.component';
import { ModifierContratComponent } from './pages/Contrat/modifier-contrat/modifier-contrat.component';
import { ConsulterCongeComponent } from './pages/Congé/consulter-conge/consulter-conge.component';
import { AjouterCongeComponent } from './pages/Congé/ajouter-conge/ajouter-conge.component';
import { ModifierCongeComponent } from './pages/Congé/modifier-conge/modifier-conge.component';
import { ConsulterDemandeComponent } from './pages/DemandeAdministrative/consulter-demande/consulter-demande.component';
import { AjouterDemandeComponent } from './pages/DemandeAdministrative/ajouter-demande/ajouter-demande.component';
import { ConsulterTypecontratComponent } from './pages/TypeContrat/consulter-typecontrat/consulter-typecontrat.component';
import { AjouterTypecontratComponent } from './pages/TypeContrat/ajouter-typecontrat/ajouter-typecontrat.component';
import { ModifierDemandeComponent } from './pages/DemandeAdministrative/modifier-demande/modifier-demande.component';
import { ModifierTypecontratComponent } from './pages/TypeContrat/modifier-typecontrat/modifier-typecontrat.component';
import { ConsulterTypecongeComponent } from './pages/TypeConge/consulter-typeconge/consulter-typeconge.component';
import { AjouterTypecongeComponent } from './pages/TypeConge/ajouter-typeconge/ajouter-typeconge.component';
import { ModifierTypecongeComponent } from './pages/TypeConge/modifier-typeconge/modifier-typeconge.component';
import { ConsulterTypedemandeComponent } from './pages/TypedeDemandeAdmin/consulter-typedemande/consulter-typedemande.component';
import { AjouterTypedemandeComponent } from './pages/TypedeDemandeAdmin/ajouter-typedemande/ajouter-typedemande.component';
import { ModifierTypedemandeComponent } from './pages/TypedeDemandeAdmin/modifier-typedemande/modifier-typedemande.component';
import { ConsulterEmployesComponent } from './pages/Employés/consulter-employes/consulter-employes.component';
import { AjouterEmployesComponent } from './pages/Employés/ajouter-employes/ajouter-employes.component';
import { ModifierEmployesComponent } from './pages/Employés/modifier-employes/modifier-employes.component';
import { ListeArchivesComponent } from './pages/Employés/liste-archives/liste-archives.component';
import { DetailsEmployeComponent } from './pages/Employés/details-employe/details-employe.component';
import { ConsulterCandidatComponent } from './pages/Candidat/consulter-candidat/consulter-candidat.component';
import { DetailsCandidatComponent } from './pages/Candidat/details-candidat/details-candidat.component';
import { DeposCandidatComponent } from './pages/Candidat/depos-candidat/depos-candidat.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ConsulterReunionComponent } from './pages/Reunion/consulter-reunion/consulter-reunion.component';
import { ModifierUserProfileComponent } from './pages/user-profile/modifier-user-profile/modifier-user-profile.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DetailsDemandeComponent } from './pages/DemandeAdministrative/details-demande/details-demande.component';
import { DetailsCongeComponent } from './pages/Congé/details-conge/details-conge.component';
import { AjouterReunionComponent } from './pages/Reunion/ajouter-reunion/ajouter-reunion.component';
import { ConsulterFicheDePaieComponent } from './pages/FicheDePaie/consulter-fiche-de-paie/consulter-fiche-de-paie.component';
import { AjouterFicheDePaieComponent } from './pages/FicheDePaie/ajouter-fiche-de-paie/ajouter-fiche-de-paie.component';
import { DetailsFicheDePaieComponent } from './pages/FicheDePaie/details-fiche-de-paie/details-fiche-de-paie.component';
import { ConsulterPresenceComponent } from './pages/Presence/consulter-presence/consulter-presence.component';
import { ModifierReunionComponent } from './pages/Reunion/modifier-reunion/modifier-reunion.component';
import { ConsulterTypereunionComponent } from './pages/TypeReunion/consulter-typereunion/consulter-typereunion.component';
import { ModifierTypereunionComponent } from './pages/TypeReunion/modifier-typereunion/modifier-typereunion.component';
import { AjouterTypereunionComponent } from './pages/TypeReunion/ajouter-typereunion/ajouter-typereunion.component';
import { ReponseDemandeComponent } from './pages/DemandeAdministrative/reponse-demande/reponse-demande.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
    FullCalendarModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    RoleComponent,
    ModifierRoleComponent,
    AjouterRoleComponent,
    AjouterDepartementComponent,
    ModifierDepartementComponent,
    ConsulterDepartementComponent,
    ConsulterContratComponent,
    AjouterContratComponent,
    ModifierContratComponent,
    ConsulterCongeComponent,
    AjouterCongeComponent,
    ModifierCongeComponent,
    ConsulterDemandeComponent,
    AjouterDemandeComponent,
    ConsulterTypecontratComponent,
    AjouterTypecontratComponent,
    ModifierDemandeComponent,
    ModifierTypecontratComponent,
    ConsulterTypecongeComponent,
    AjouterTypecongeComponent,
    ModifierTypecongeComponent,
    ConsulterTypedemandeComponent,
    AjouterTypedemandeComponent,
    ModifierTypedemandeComponent,
    ConsulterEmployesComponent,
    AjouterEmployesComponent,
    ModifierEmployesComponent,
    ListeArchivesComponent,
    DetailsEmployeComponent,
    ConsulterCandidatComponent,
    DetailsCandidatComponent,
    DeposCandidatComponent,
    ConsulterReunionComponent,
    ModifierUserProfileComponent,
    ForbiddenComponent,
    DetailsDemandeComponent,
    DetailsCongeComponent,
    AjouterReunionComponent,
    ConsulterFicheDePaieComponent,
    AjouterFicheDePaieComponent,
    DetailsFicheDePaieComponent,
    ConsulterPresenceComponent,
    ModifierReunionComponent,
    ConsulterTypereunionComponent,
    ModifierTypereunionComponent,
    AjouterTypereunionComponent,
    ReponseDemandeComponent,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
