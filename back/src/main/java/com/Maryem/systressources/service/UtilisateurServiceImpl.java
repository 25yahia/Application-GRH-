package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.repos.UtilisateurRepository;
@Service
public class UtilisateurServiceImpl implements UtilisateurService {
	
	
	@Autowired
	private UtilisateurRepository utilisateurRepository;

	@Override
	public List<Utilisateur> getAllUtilisateurs() {
		
		return utilisateurRepository.findAll();
	}

	@Override
	public Utilisateur updateUtilisateur(Utilisateur e) {
		
		return utilisateurRepository.save(e);
	}


	@Override
	public List<Employe> findByOrderBynomAsc() {
		
		return utilisateurRepository.findByOrderBynomAsc();
	}

	@Override
	public Utilisateur findByIdUtilsateur(Long id) {
		
		return utilisateurRepository.findById(id).get();
	}

	//@Override
	//public void archiverUtilisateur(Long id) {
		//Utilisateur u=utilisateurRepository.findById(id).get();
		//u.setArchive(1);
		//utilisateurRepository.save(u);
		
	//}

	//@Override
	//public void activerUtilisateur(Long id) {
		//Utilisateur u=utilisateurRepository.findById(id).get();
	//	u.setArchive(0);
		//utilisateurRepository.save(u);
		
	//}

	@Override
	public List<Utilisateur> findByemail(String email) {
		
		return utilisateurRepository.findByemail(email);
	}


@Override  
	public boolean modifiermotdepasse (String email,String motdepasse,String newmotdepasse) { 

	List<Utilisateur> user = utilisateurRepository.findByemail(email);

	Utilisateur utilisateur;

	if (user.isEmpty()) {

		return false;

		

	}

	else {

		utilisateur=user.get(0);

	if (motdepasse.equals(utilisateur.getMotdepasse())){

		utilisateur.setMotdepasse(newmotdepasse);

		utilisateurRepository.save(utilisateur);

		return true;

		

	}

	else {

		return false;

	}

	}

	}



@Override
public long countUtilisateurs() {
	return utilisateurRepository.count();
}

@Override
public List<Utilisateur> findUtilisateurConnecter(String NameUser, String password) {
	return utilisateurRepository.findUtilisateurConnecter(NameUser, password);
}























}
