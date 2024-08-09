import { RoleService } from './../../../services/role.service';
import { role } from './../../../models/role.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-role',
  templateUrl: './modifier-role.component.html',
  styleUrls: ['./modifier-role.component.scss']
})
export class ModifierRoleComponent implements OnInit {
  currentRole = new role();
  roles: role[];
  totalRoles: number = 0;
  constructor(private activatedRoute: ActivatedRoute,
                                        private router :Router,
                                           private roleService:RoleService) { }



  ngOnInit(): void {
    this.counter();
    this.roleService.listeRole().subscribe(roles => {
      this.roles = roles;
      console.log(roles);
    });

    this.roleService.consulterRole(this.activatedRoute.snapshot.params['id']).subscribe(role => {
      this.currentRole = role;
      console.log(role);
      });

    }


      



  updateRole() {
    this.roleService.updateRole(this.currentRole).subscribe(() => {
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
