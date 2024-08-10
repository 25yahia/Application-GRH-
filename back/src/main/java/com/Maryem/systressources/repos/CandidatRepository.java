package com.Maryem.systressources.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Maryem.systressources.entities.Candidat;


@RepositoryRestResource(path = "restecandidat")
public interface CandidatRepository extends JpaRepository<Candidat, Long> {
	
	List<Candidat> findByNomCandidat(String nomCandidat);
	   @Query("SELECT c FROM Candidat c WHERE c.etatdeDemandeCandidat='en attente'")
	    List<Candidat> findAllEnAttente();
	   @Query("SELECT COUNT(*) FROM Candidat c WHERE c.etatdeDemandeCandidat = 'en attente'")
	    Long countCandidatsEnAttente();
	   @Query("SELECT COUNT(*) FROM Candidat c WHERE c.etatdeDemandeCandidat = 'acceptée'")
	    Long countCandidatsAccepte();
	   @Query("SELECT COUNT(*) FROM Candidat c WHERE c.etatdeDemandeCandidat = 'refusée'")
	    Long countCandidatsRefuse();
	   
}
