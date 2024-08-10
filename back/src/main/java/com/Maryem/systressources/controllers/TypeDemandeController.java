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


import com.Maryem.systressources.entities.TypeDemandeAdministrative;
import com.Maryem.systressources.service.TypeDemandeService;

@RestController
@CrossOrigin
@RequestMapping("/TypeDemandes")
public class TypeDemandeController {
	@Autowired
	private TypeDemandeService typedemandeservice;
	
	

	@RequestMapping(method = RequestMethod.GET)
	public List<TypeDemandeAdministrative> getAllTypeDemandeAdministratives(){
		return typedemandeservice.getAllDemandeAdministratives();
	}
	@GetMapping("/{id}")
	public TypeDemandeAdministrative getTypeDemandeAdministrativeById(@PathVariable("id") Long id) {	
		return typedemandeservice.getTypeDemandeAdministrative(id);
    }
	@RequestMapping(method = RequestMethod.POST)
public TypeDemandeAdministrative createTypeDemandeAdministrative(@RequestBody TypeDemandeAdministrative typeDemandeAdministrative) {
	return typedemandeservice.saveTypeDemandeAdministrative(typeDemandeAdministrative);
}
	@RequestMapping(method = RequestMethod.PUT)
	public TypeDemandeAdministrative updateTypeDemandeAdministrative(@RequestBody TypeDemandeAdministrative typeDemandeAdministrative) {
		return typedemandeservice.saveTypeDemandeAdministrative(typeDemandeAdministrative);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteTypeDemandeAdministrative(@PathVariable("id") Long id)
	{
		typedemandeservice.deleteTypeDemandeAdministrativeById(id);
	}
	@GetMapping("/count")
	public Long countTypeDemandeAdministrative() {
		return typedemandeservice.countTypeDemandeAdministrative();
	}

}
