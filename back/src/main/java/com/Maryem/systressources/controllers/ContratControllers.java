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

import com.Maryem.systressources.entities.Contrat;

import com.Maryem.systressources.service.ContratService;






@RestController
@RequestMapping("/Contrats")
@CrossOrigin
public class ContratControllers {
	@Autowired
	private ContratService contratService;
	
	@GetMapping
	public List<Contrat> getAllContrats(){
		return contratService.getAllContrats();
	}
	@GetMapping("/{id}")
	public Contrat getContratById(@PathVariable("id") Long id) {	
		return contratService.getContrat(id);
    }
	@RequestMapping(method = RequestMethod.POST)
public Contrat createContrat(@RequestBody Contrat contrat) {
	return contratService.saveContrat(contrat);
}
	@RequestMapping(method = RequestMethod.PUT)
	public Contrat updateContrat(@RequestBody Contrat contrat) {
		return contratService.updateContrat(contrat);
	}

	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteContrat(@PathVariable("id") Long id)
	{
		contratService.deleteContratById(id);
	}
	
	@GetMapping("/count")
	public Long countContrat() {
		return contratService.countContrat();
	}
}
	
	
	




