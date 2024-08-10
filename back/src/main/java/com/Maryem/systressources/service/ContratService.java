package com.Maryem.systressources.service;



import java.util.List;

import org.springframework.data.repository.query.Param;

import com.Maryem.systressources.entities.Contrat;






public interface ContratService {
	public List<Contrat> getAllContrats();
	 Contrat getContrat(Long id);
	 Contrat saveContrat(Contrat c);
	 Contrat updateContrat(Contrat c);
	 void deleteContratById(Long id);
	 
	
	 List<Contrat> findByTypeContratId(@Param("typeContratId") Long typeContratId);
	 List<Contrat> findByOrderBydatesignatureContratAsc();
	 long countContrat();

}
