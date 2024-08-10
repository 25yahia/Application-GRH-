package com.Maryem.systressources.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Maryem.systressources.entities.Departement;
import com.Maryem.systressources.entities.Role;
import com.Maryem.systressources.service.RoleService;

@RestController
@RequestMapping("/Roles")
@CrossOrigin
public class RoleController {
	@Autowired
	private RoleService roleService;
	
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Role> getAllRoles(){
		return roleService.getAllRoles();
	}
	@RequestMapping(method = RequestMethod.POST)
public Role createRole(@RequestBody Role role) {
	return roleService.saveRole(role);
}
	@RequestMapping(method = RequestMethod.PUT)
	public Role updateRole(@RequestBody Role role) {
		return roleService.updateRole(role);}

		
	@RequestMapping(value="/{id}",method = RequestMethod.GET)	
	public Role getRoleById(@PathVariable("id") Long id) {	
		return roleService.getRole(id);
    }
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteRH(@PathVariable("id") Long id)
	{
		roleService.deleteRoleById(id);
	}
	@GetMapping("/count")
	public Long countEmploye() {
		return roleService.countRole();
	}
	
}
