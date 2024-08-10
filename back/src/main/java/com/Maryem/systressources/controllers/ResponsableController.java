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
import com.Maryem.systressources.entities.RH;
import com.Maryem.systressources.entities.Responsable;
import com.Maryem.systressources.service.ResponsableService;



@RestController
@RequestMapping("/Resonsables")
@CrossOrigin
public class ResponsableController {

	@Autowired
	private ResponsableService responsableService;
	
	
	
	@GetMapping("/countActiveResponsable")
	public Long countResponsableActive() {
	    return responsableService.countResponsableActive();
	}
	
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Responsable> getAllResponsable(){
		return responsableService.getAllResponsable();
	}
	
	
	@RequestMapping(method = RequestMethod.PUT)
	public Responsable updateResponsable(@RequestBody Responsable resp) {
		return responsableService.saveResponsable(resp);
	}
	@RequestMapping(method = RequestMethod.POST)
public Responsable createResponsable(@RequestBody Responsable resp) {
	return responsableService.saveResponsable(resp);
}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteResponsableById(@PathVariable("id") Long id)
	{
		responsableService.deleteResponsableById(id);
	}
}
