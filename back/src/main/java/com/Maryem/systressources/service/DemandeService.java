package com.Maryem.systressources.service;


import java.util.List;

import org.springframework.data.repository.query.Param;

import com.Maryem.systressources.entities.DemandeAdministrative;
import com.Maryem.systressources.entities.Présence;

public interface DemandeService {
	public List<DemandeAdministrative> getAllDemandeAdministratives();
	DemandeAdministrative getDemandeAdministrative(Long id);
	DemandeAdministrative saveDemandeAdministrative(DemandeAdministrative a);
	DemandeAdministrative updateDemandeAdministrative(DemandeAdministrative a);
	void deleteDemandeAdministrativeById(Long id);
	long countDemandeAdministrative();
	long countDemandeEnAttente();
	long countDemandeEnAttenteParUtilisateurID( Long utilisateurId);
	long countDemandeParUtilisateurID( Long utilisateurId);
    List<DemandeAdministrative> findAllEnAttente();
	List<DemandeAdministrative> findDemandeAdministrativeByUtilisateurId(Long utilisateurId);
}
