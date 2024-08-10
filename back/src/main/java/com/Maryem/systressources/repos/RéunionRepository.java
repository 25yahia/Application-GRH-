package com.Maryem.systressources.repos;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.Réunion;

public interface RéunionRepository extends JpaRepository<Réunion, Long> {
//List<Réunion> findRéunionByUtilisateurId(Long id);

	   /*@Query("SELECT r FROM Réunion r JOIN r.Participants p WHERE p.id = :utilisateurId")
	    List<Réunion> findReunionsByParticipant(@Param("utilisateurId") Long utilisateurId);*/
	   
	   
	   @Query("SELECT COUNT(r) FROM Réunion r JOIN r.Participants p WHERE p.id = :utilisateurId")
	    Long countReunionsByParticipant(@Param("utilisateurId") Long utilisateurId); 
	}



