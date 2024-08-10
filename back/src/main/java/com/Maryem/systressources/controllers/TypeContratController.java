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


import com.Maryem.systressources.entities.TypeContrat;
import com.Maryem.systressources.service.TypeContratService;

@RestController
@CrossOrigin
@RequestMapping("/TypeContrats")
public class TypeContratController {
	@Autowired
	private TypeContratService typeContratService;
	
	
	@RequestMapping(method = RequestMethod.GET)
	public List<TypeContrat> getAllTypeContrats(){
		return typeContratService.getAllTypeContrats();
	}
	@GetMapping("/{id}")
	public TypeContrat getTypeContratById(@PathVariable("id") Long id) {	
		return typeContratService.getTypeContratById(id);
    }
	@RequestMapping(method = RequestMethod.POST)
    public TypeContrat createTypeContrat(@RequestBody TypeContrat typeContrat) {
	return typeContratService.saveTypeContrat(typeContrat);
    }
	@RequestMapping(method = RequestMethod.PUT)
	public TypeContrat updateTypeContrat(@RequestBody TypeContrat typeContrat) {
		return typeContratService.saveTypeContrat(typeContrat);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteTypeContrat(@PathVariable("id") Long id)
	{
		typeContratService.deleteTypeContratById(id);
	}
	@GetMapping("/count")
	public Long countTypeContrat() {
		return typeContratService.countTypeContrat();
	}


}
