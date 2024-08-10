package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Présence;
import com.Maryem.systressources.repos.PrésenceRepository;
@Service
public class PrésenceServiceImpl implements PrésenceService {
	
	@Autowired
	PrésenceRepository présenceRepository;

	@Override
public List<Présence> findByutilisateurId(Long utilisateurId) {
		
		return présenceRepository.findByutilisateurId(utilisateurId);
	}

}
