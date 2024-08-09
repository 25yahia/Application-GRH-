import { Component, OnInit } from '@angular/core';

import { role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: role[]
  nomrole : string;
  allroles: role[];
  filterText: string = '';
  totalRoles: number = 0;
  p:number=1;
  constructor(private roleService : RoleService) { }

  ngOnInit(): void {
   this.chargerRole();
   this.counter();
  }
  
chargerRole(){
  this.roleService.listeRole().subscribe(rls => {
    console.log(rls);
    this.roles = rls;
    this.allroles = rls;

  });
  
}
  

  supprimerRole(id)
  {
    console.log(id);

  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.roleService. supprimerRole(id).subscribe(() => {
          console.log("Role supprimé");
          this.chargerRole();

  });

  }

  rechercherRoles() {
    this.roleService.rechercherParNom(this.nomrole).
      subscribe(rls => {
       // console.log(rls)
        this.roles = rls;});


  }


  onKeyUp(filterText : string){
    this.roles = this.allroles.filter(item =>
 item.nomRole.toLowerCase().includes(filterText));
   }

counter(){
  this.roleService.countRole().subscribe(
    count => {

      this.totalRoles = count;
    },
    error => {
      console.error('Une erreur s\'est produite lors de la récupération du nombre de rôles : ', error);
    }
  );





}

}
