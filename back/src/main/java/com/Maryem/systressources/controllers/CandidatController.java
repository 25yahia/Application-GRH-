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

import com.Maryem.systressources.entities.Candidat;
import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.repos.CandidatRepository;
import com.Maryem.systressources.service.CandidatService;

@RestController
@CrossOrigin
@RequestMapping("/Candidat")
public class CandidatController {
	@Autowired
	private CandidatRepository candidatRepository;
	@Autowired
	private CandidatService candidatService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Candidat> getAllCandidats(){
		return candidatService.getAllCandidats();
	}
	
	@GetMapping("/{id}")
	public Candidat getCandidatById(@PathVariable("id") Long id) {	
		return candidatService.getCandidat(id);
    }
	@GetMapping("/count")
	public Long countCandidat() {
		return candidatService.countCandidat();
	}
	@RequestMapping(method = RequestMethod.POST)
	public Candidat createDemande(@RequestBody Candidat candidat) {
		return candidatRepository.save(candidat);
	}
	@GetMapping("/Accepter/{id}")
	public void accepterdemande(@PathVariable("id") Long id) {
		candidatService.accepterdemande(id);
}
	@GetMapping("/Refuser/{id}")
	public void refuserdemande(@PathVariable("id")Long id) {
		candidatService.refuserdemande(id);
	}
	
	@GetMapping("/CandidatenAttente")
	public List<Candidat> findAllEnAttente(){
		return candidatService.findAllEnAttente();
    }
	
	@GetMapping("/countEnAttente")
	public Long countCandidatsEnAttente() {
	    return candidatService.countCandidatsEnAttente();
	}

	@GetMapping("/countAccepter")
	public Long countCandidatsAccepte() {
	    return candidatService.countCandidatsAccepte();
	}
	@GetMapping("/countRefuser")
	public Long countCandidatsRefuse() {
	    return candidatService.countCandidatsRefuse();
	}
	
	
	
}
