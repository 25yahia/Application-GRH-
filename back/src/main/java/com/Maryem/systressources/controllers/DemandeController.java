package com.Maryem.systressources.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Maryem.systressources.entities.Candidat;
import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.DemandeAdministrative;


import com.Maryem.systressources.service.DemandeService;
import com.Maryem.systressources.service.DemandeServiceImpl;

import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin
@RequestMapping("/Demandes")
public class DemandeController {
	
	@Autowired
	private DemandeService demandeService;
	
	
	
	@RequestMapping(method = RequestMethod.GET)
	public List<DemandeAdministrative> getAllDemandeAdministratives(){
		return demandeService.getAllDemandeAdministratives();
	}
	@GetMapping("/{id}")
	public DemandeAdministrative getDemandeAdministrativeById(@PathVariable("id") Long id) {	
		return demandeService.getDemandeAdministrative(id);
    }
	@RequestMapping(method = RequestMethod.POST)
public DemandeAdministrative createDemandeAdministrative(@RequestBody DemandeAdministrative demandeAdministrative) {
	return demandeService.saveDemandeAdministrative(demandeAdministrative);
}
	@RequestMapping(method = RequestMethod.PUT)
	public DemandeAdministrative updateDemandeAdministrative(@RequestBody DemandeAdministrative demandeAdministrative) {
		return demandeService.saveDemandeAdministrative(demandeAdministrative);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteDemandeAdministrative(@PathVariable("id") Long id)
	{
		demandeService.deleteDemandeAdministrativeById(id);
	}
	@GetMapping("/count")
	public Long countDemandeAdministrative() {
		return demandeService.countDemandeAdministrative();
	}

	@GetMapping("/DemandeEnAttente")
	public List<DemandeAdministrative> findAllEnAttente(){
		return demandeService.findAllEnAttente();
	
}
	
	
	 @GetMapping("/countEnAttente")
		public Long countDemandeEnAttente() {
		    return demandeService.countDemandeEnAttente();
		}
	
	
	
	
	 @GetMapping("/DemandeUtilisateur/{utilisateurId}")
	    public List<DemandeAdministrative> findDemandeAdministrativeByUtilisateurId(@PathVariable("utilisateurId") Long utilisateurId) {
	        return demandeService.findDemandeAdministrativeByUtilisateurId(utilisateurId);
	    }
	
	 @GetMapping("/countEnAttenteDemandeUtilisateur/{utilisateurId}")
	    public Long countDemandeEnAttenteParUtilisateurID(@PathVariable("utilisateurId") Long utilisateurId) {
	        return demandeService.countDemandeEnAttenteParUtilisateurID(utilisateurId);
	    }
	 @GetMapping("/countDemandeUtilisateur/{utilisateurId}")
	    public Long countDemandeParUtilisateurID(@PathVariable("utilisateurId") Long utilisateurId) {
	        return demandeService.countDemandeParUtilisateurID(utilisateurId);
	    }
	
	
	
}
