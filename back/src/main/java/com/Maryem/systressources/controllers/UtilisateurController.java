package com.Maryem.systressources.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Maryem.systressources.entities.DemandeAdministrative;
import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.service.UtilisateurService;
import com.Maryem.systressources.service.UtilisateurServiceImpl;


@RestController
@RequestMapping("/Utilisateurs")
@CrossOrigin
public class UtilisateurController {
	@Autowired
	private UtilisateurService utilisateurService;
	
	
	@Autowired 
	private UtilisateurServiceImpl utilisateurService1;
	@RequestMapping(method = RequestMethod.GET)
	public List<Utilisateur> getAllUtilisateurs(){
		return utilisateurService.getAllUtilisateurs();
	}

	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Utilisateur getUtilisateurById(@PathVariable("id") Long id) {	
		return utilisateurService.findByIdUtilsateur(id);
    }
	
	
	@RequestMapping(method = RequestMethod.PUT)
	public Utilisateur updateutilisateur(@RequestBody Utilisateur u) {
		return utilisateurService.updateUtilisateur(u);
	}
	
	
	
	
	//@GetMapping("/archiveemploye/{id}")
	//public void archiverUtilisateur(@PathVariable("id") Long id) {
		//utilisateurService.archiverUtilisateur(id);
	//}
//	@GetMapping("/activeemploye/{id}")
	//public void activerUtilisateur(@PathVariable("id") Long id) {
	//	utilisateurService.activerUtilisateur(id);
	//}
	@PutMapping("/modifiermotdepasse")
	    public ResponseEntity<?> modifierMotDePasse(@RequestParam String email, 

	                                                @RequestParam String motdepasse, 

	                                                @RequestParam String newmotdepasse) {

	        boolean success = utilisateurService1.modifiermotdepasse(email, motdepasse, newmotdepasse);

	        if (success) {

	            return ResponseEntity.ok("Mot de passe modifié avec succès.");

	        } else {

	            return ResponseEntity.badRequest().body("Impossible de modifier le mot de passe.");

	        }

	    }

	
	@GetMapping("/count")
	public Long countUtilisateurs() {
		return utilisateurService.countUtilisateurs();
	}
	
	 @GetMapping("/AuthentifierUtilisateur/{NameUser}/{password}")
	public	List<Utilisateur> findUtilisateurConnecter(@PathVariable("NameUser") String NameUser, @PathVariable("password") String password){
	 return utilisateurService.findUtilisateurConnecter(NameUser,password);
	    }
	
	
	
	
	
}

