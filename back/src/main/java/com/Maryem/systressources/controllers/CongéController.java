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

import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.DemandeAdministrative;
import com.Maryem.systressources.service.CongéService;
import com.Maryem.systressources.service.CongéServiceImpl;






@RestController
@CrossOrigin
@RequestMapping("/Conge")
public class CongéController {
	
	@Autowired
	private CongéServiceImpl congéServiceimpl;
	@Autowired
	private CongéService congéService;

	@GetMapping("/Refuser/{id}")
	public void refuserCongé(@PathVariable("id") Long id) {
		congéServiceimpl.refuserCongé(id);
		
	}
		
		
		
	@GetMapping("/Accepter/{id}")
	public void accepterCongé(@PathVariable("id") Long id) {
		congéServiceimpl.accepterCongé(id);
	

}
	@RequestMapping(method = RequestMethod.GET)
	public List<Congé> getAllCongés(){
		return congéService.getAllCongés();
	}
	
	@GetMapping("/{id}")
	public Congé getCongétById(@PathVariable("id") Long id) {	
		return congéService.getCongét(id);
    }
	@RequestMapping(method = RequestMethod.POST)
public Congé createCongé(@RequestBody Congé congé) {
	return congéService.saveCongé(congé);
}
	@RequestMapping(method = RequestMethod.PUT)
	public Congé updateCongé(@RequestBody Congé congé) {
		return congéService.updateCongé(congé);
	}
	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void deleteCongé(@PathVariable("id") Long id)
	{
		congéService.deleteCongéById(id);
	}
	@GetMapping("/count")
	public Long countconge() {
		return congéService.countconge();
	}
	
	@GetMapping("/CongeEnAttente")
	public List<Congé> findCongéEnAttente(){
		return congéService.findCongéEnAttente();
}
	
	 @GetMapping("/CongeUtilisateur/{utilisateurId}")
	    public List<Congé> findCongéByUtilisateurId(@PathVariable("utilisateurId") Long utilisateurId) {
	        return congéService.findCongéByUtilisateurId(utilisateurId);
	    }
	
	 @GetMapping("/countEnAttenteConge/{utilisateurId}")
	    public Long countCongeEnAttenteParUtilisateurID(@PathVariable("utilisateurId") Long utilisateurId) {
	        return congéService.countCongeEnAttenteParUtilisateurID(utilisateurId);
	    }
	 @GetMapping("/countAccepterConge/{utilisateurId}")
	    public Long countCongeAccepteParUtilisateurID(@PathVariable("utilisateurId") Long utilisateurId) {
	        return congéService.countCongeAccepteParUtilisateurID(utilisateurId);
	    }
	 @GetMapping("/countRefuserConge/{utilisateurId}")
	    public Long countCongeRefuseParUtilisateurID(@PathVariable("utilisateurId") Long utilisateurId) {
	        return congéService.countCongeRefuseParUtilisateurID(utilisateurId);
	    }
	 @GetMapping("/countConge/{utilisateurId}")
	    public Long countCongeParUtilisateurID(@PathVariable("utilisateurId") Long utilisateurId) {
	        return congéService.countCongeParUtilisateurID(utilisateurId);
	    }
	 
	 @GetMapping("/countEnAttente")
		public Long countCongeEnAttente() {
		    return congéService.countCongeEnAttente();
		}

		@GetMapping("/countAccepter")
		public Long countCongeAccepte() {
		    return congéService.countCongeAccepte();
		}
		@GetMapping("/countRefuser")
		public Long countCongeRefuse() {
		    return congéService.countCongeRefuse();
		}
		
	 
	 
	 
	 
	 
	 
	 
	 
}