package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.DemandeAdministrative;

import com.Maryem.systressources.repos.DemandeRepository;
@Service
public class DemandeServiceImpl implements DemandeService {
	
	@Autowired
	private DemandeRepository demandeRepository;
	//@Autowired
	//private DemandeServiceImpl demandeServiceImpl;

	@Override
	public DemandeAdministrative getDemandeAdministrative(Long id) {
		
		return demandeRepository.findById(id).get();
	}

	@Override
	public DemandeAdministrative saveDemandeAdministrative(DemandeAdministrative a) {
		
		return demandeRepository.save(a);
	}

	@Override
	public DemandeAdministrative updateDemandeAdministrative(DemandeAdministrative a) {
		
		return demandeRepository.save(a);
	}

	@Override
	public void deleteDemandeAdministrativeById(Long id) {
		demandeRepository.deleteById(id);

	}

	@Override
	public List<DemandeAdministrative> getAllDemandeAdministratives() {
		
		return demandeRepository.findAll();
	}

	@Override
	public long countDemandeAdministrative() {
		
		return demandeRepository.count();
				
	}

	@Override
	public List<DemandeAdministrative> findAllEnAttente() {
		return demandeRepository.findAllEnAttente() ;
	}

	@Override
	public List<DemandeAdministrative> findDemandeAdministrativeByUtilisateurId(Long utilisateurId) {
		return demandeRepository.findDemandeAdministrativeByUtilisateurId(utilisateurId) ;
	}

	@Override
	public long countDemandeEnAttente() {
		return demandeRepository.countDemandeEnAttente() ;
	}

	@Override
	public long countDemandeEnAttenteParUtilisateurID(Long utilisateurId) {
		return demandeRepository.countDemandeEnAttenteParUtilisateurID(utilisateurId);
	}

	@Override
	public long countDemandeParUtilisateurID(Long utilisateurId) {
		return  demandeRepository.countDemandeParUtilisateurID(utilisateurId) ;
	}

	
	}


