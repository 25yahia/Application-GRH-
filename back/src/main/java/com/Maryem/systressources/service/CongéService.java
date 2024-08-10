package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.Maryem.systressources.entities.Congé;




public interface CongéService {
	public void accepterCongé(Long id);
	public void refuserCongé(Long id);
	public List<Congé> getAllCongés();
	Congé getCongét(Long id);
	Congé saveCongé(Congé g);
	Congé updateCongé(Congé g);
	 List<Congé> findCongéEnAttente();
	void deleteCongéById(Long id);
	List<Congé> findByetatdedemandeaccepter();
	List<Congé> findByetatdedemandeenattente();
	long countconge();
	 long countCongeEnAttente();
	 long countCongeAccepte();
	 long countCongeRefuse();
	 long countCongeEnAttenteParUtilisateurID( Long utilisateurId);
	 long countCongeAccepteParUtilisateurID( Long utilisateurId);
	 long countCongeRefuseParUtilisateurID(  Long utilisateurId); 
	 long countCongeParUtilisateurID( Long utilisateurId); 
	List<Congé> findCongéByUtilisateurId(  Long utilisateurId);

	
}

