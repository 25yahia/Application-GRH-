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


import com.Maryem.systressources.entities.TypeReunion;
import com.Maryem.systressources.service.TypeRéunionService;

@RestController
@CrossOrigin
@RequestMapping("/TypeReunion")
public class TypeRéunionController {
	@Autowired
	private TypeRéunionService typeRéunionService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<TypeReunion> getAllTypeContrats(){
		return typeRéunionService.getAllTypeReunion();
	}
	@GetMapping("/{id}")
	public TypeReunion getTypeReunionById(@PathVariable("id") Long id) {	
		return typeRéunionService.getTypeReunionById(id);
    }
	@RequestMapping(method = RequestMethod.POST)
    public TypeReunion createTypeReunion(@RequestBody TypeReunion typeReunion) {
	return typeRéunionService.saveTypeReunion(typeReunion);
    }
	@RequestMapping(method = RequestMethod.PUT)
	public TypeReunion updateTypeReunion(@RequestBody TypeReunion typeReunion) {
		return typeRéunionService.saveTypeReunion(typeReunion);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteTypeReunionById(@PathVariable("id") Long id)
	{
		typeRéunionService.deleteTypeReunionById(id);
	}
	@GetMapping("/count")
	public Long countTypeReunion() {
		return typeRéunionService.countTypeReunion();
	}

	
	
}
