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
import com.Maryem.systressources.entities.FicheDePaie;
import com.Maryem.systressources.service.FicheDePaieService;
@RestController
@RequestMapping("/FicheDePaie")
@CrossOrigin(origins ="http://localhost:4200")
public class FicheDePaieController {
	
	@Autowired
	private FicheDePaieService fichedepaieservice;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<FicheDePaie> getAllFicheDePaies(){
		return fichedepaieservice.getAllFicheDePaies();
	}
	@RequestMapping(method = RequestMethod.POST)
public FicheDePaie createFicheDePaie(@RequestBody FicheDePaie fichedepaie) {
	return fichedepaieservice.saveFicheDePaie(fichedepaie);
}
	
	@RequestMapping(method = RequestMethod.PUT)
	public FicheDePaie updateFicheDePaie(@RequestBody FicheDePaie fichedepaie) {
		return fichedepaieservice.saveFicheDePaie(fichedepaie);
}
	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public FicheDePaie getFicheDePaieById(@PathVariable("id") Long id) {	
		return fichedepaieservice.getFicheDePaie(id);
    }
	@GetMapping("/count")
	public Long countFicheDePaie() {
		return fichedepaieservice.countFicheDePaie();
}
}
