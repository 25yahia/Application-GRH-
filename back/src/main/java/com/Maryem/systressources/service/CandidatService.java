package com.Maryem.systressources.service;

import java.util.List;

import com.Maryem.systressources.entities.Candidat;
import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.repos.CandidatRepository;



public interface CandidatService {
	public List<Candidat> getAllCandidats();
	Candidat getCandidat(Long id);
	List<Candidat> findByNomCandidat(String nomCandidat);
    List<Candidat> findAllEnAttente();

	long countCandidat();
    long countCandidatsEnAttente();
    long countCandidatsAccepte();
    long countCandidatsRefuse();

	public void accepterdemande(Long id);
	public void refuserdemande(Long id);
}
