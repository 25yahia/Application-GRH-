package com.Maryem.systressources.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Contrat;

import com.Maryem.systressources.repos.ContratRepository;
@Service
public class ContratServiceImpl implements ContratService {
	@Autowired
	ContratRepository contratRepository;

	@Override
	public List<Contrat> getAllContrats() {
		
		return contratRepository.findAll();
	}

	@Override
	public Contrat getContrat(Long id) {
		
		return contratRepository.findById(id).get();
	}

	@Override
	public Contrat saveContrat(Contrat c) {
		
		return contratRepository.save(c);
	}

	@Override
	public Contrat updateContrat(Contrat c) {
		
		return contratRepository.save(c);
	}

	@Override
	public void deleteContratById(Long id) {
		contratRepository.deleteById(id);
		
	}


	

	@Override
	public List<Contrat> findByTypeContratId(Long typeContratId) {
		
		return contratRepository.findByTypeContratId(typeContratId);
	}

	@Override
	public List<Contrat> findByOrderBydatesignatureContratAsc() {
	
		return contratRepository.findByOrderBydatesignatureContratAsc();
	}

	@Override
	public long countContrat() {
		
		return contratRepository.count();
	}

	
	
	




	
	

}
