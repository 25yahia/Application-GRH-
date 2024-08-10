package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.Maryem.systressources.entities.Présence;

public interface PrésenceService {
	 List<Présence> findByutilisateurId(@Param("utilisateurId") Long utilisateurId);

}
