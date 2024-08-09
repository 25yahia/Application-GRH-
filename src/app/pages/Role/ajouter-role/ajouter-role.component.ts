import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { role } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-ajouter-role',
  templateUrl: './ajouter-role.component.html',
  styleUrls: ['./ajouter-role.component.scss']
})
export class AjouterRoleComponent implements OnInit {
  NewRole = new role();
  totalRoles: number = 0;
  constructor(private router :Router,  private roleService:RoleService) { }
                                        
                                             

  ngOnInit(): void {
    this.counter();

  }


  addRole() {
    this.roleService.ajouterRole(this.NewRole) 
                      .subscribe(rls => { 
                      console.log(rls); 
                      this.router.navigate(['role']); 
                      }); 
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