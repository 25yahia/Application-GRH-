package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.Maryem.systressources.entities.Employe;

import com.Maryem.systressources.entities.Utilisateur;

public interface UtilisateurService {
	
	
	
	public List<Utilisateur> getAllUtilisateurs();
	 Utilisateur updateUtilisateur(Utilisateur e);
	  List<Employe> findByOrderBynomAsc();
	  Utilisateur findByIdUtilsateur(Long id);
	  //public void archiverUtilisateur(Long id);
	 // public void activerUtilisateur(Long id);
	  List<Utilisateur> findByemail(String email);
	public boolean modifiermotdepasse (String email,String motdepasse,String newmotdepasse);
	  long countUtilisateurs();
	  List<Utilisateur> findUtilisateurConnecter(@Param("NameUser") String NameUser, @Param("password") String password);
}
