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

import com.Maryem.systressources.service.DepartementService;

@RestController
@RequestMapping("/Departements")
@CrossOrigin
public class DepartementController {
	@Autowired
	private DepartementService departementService;

	
	@RequestMapping(method = RequestMethod.GET)
	public List<Departement> getAllDepartements(){
		return departementService.getAllDepartements();
	}
	@RequestMapping(method = RequestMethod.POST)
public Departement createDepartement(@RequestBody Departement departement) {
	return departementService.saveDepartement(departement);
}
	@RequestMapping(method = RequestMethod.PUT)
	public Departement updateDepartement(@RequestBody Departement departement) {
		return departementService.updateDepartement(departement);
}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteDepartement(@PathVariable("id") Long id)
	{
		departementService.deleteDepartementById(id);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Departement getDepartementById(@PathVariable("id") Long id) {	
		return departementService.getDepartement(id);
    }
	@GetMapping("/count")
	public Long countDepartement() {
		return departementService.countDepartement();
}
}
