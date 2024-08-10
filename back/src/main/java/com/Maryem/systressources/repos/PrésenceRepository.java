package com.Maryem.systressources.repos;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import com.Maryem.systressources.entities.Présence;
@RepositoryRestResource(path="rest7")
public interface PrésenceRepository extends JpaRepository<Présence, Long> {
	@Query("SELECT p FROM Présence p WHERE p.utilisateur.id = :utilisateurId")
    List<Présence> findByutilisateurId(@Param("utilisateurId") Long utilisateurId);
	@Query("SELECT p FROM Présence p WHERE p.datepresence = :datepresence")
    List<Présence> findBydatepresence(@Param("datepresence") Date datepresence);
	 @Query("SELECT p FROM Présence p WHERE p.utilisateur.id = :utilisateurId AND p.datepresence = :datepresence")
	    List<Présence> findByutilisateurIdAnddatepresence(@Param("utilisateurId") Long utilisateurId, @Param("datepresence") Date datepresence);
	 
	@Query("SELECT p FROM Présence p WHERE p.utilisateur.id = :utilisateurId AND p.utilisateur.departement.id = :departementId")
	List<Présence> findByUtilisateurIdAndDepartementId(@Param("utilisateurId") Long utilisateurId, @Param("departementId") Long departementId);

	 
		@Query("SELECT p FROM Présence p WHERE  p.utilisateur.departement.id = :departementId")
		List<Présence> findByDepartementId( @Param("departementId") Long departementId);

		@Query("SELECT p FROM Présence p WHERE p.datepresence = :datepresence AND p.utilisateur.departement.id = :departementId")
		List<Présence> findBydateprésenceAndDepartementId(@Param("datepresence") Date datepresence, @Param("departementId") Long departementId);

	    
}