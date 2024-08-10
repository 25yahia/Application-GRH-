package com.Maryem.systressources.repos;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.DemandeAdministrative;
import com.Maryem.systressources.entities.Présence;
import com.Maryem.systressources.entities.Utilisateur;
@RepositoryRestResource(path = "resteDemandeAdministrative")
public interface DemandeRepository extends JpaRepository<DemandeAdministrative, Long> {

	  @Query("SELECT d FROM DemandeAdministrative d WHERE d.etatdeDemandeAdmin = 'en attente'")
	    List<DemandeAdministrative> findAllEnAttente();
	  

	  @Query("SELECT COUNT(*) FROM DemandeAdministrative d WHERE d.etatdeDemandeAdmin = 'en attente'")
	    Long countDemandeEnAttente();
		
	  @Query("SELECT d FROM DemandeAdministrative d WHERE d.utilisateur.id= :utilisateurId OR d.etatdeDemandeAdmin = 'en attente' AND d.etatdeDemandeAdmin = 'etudié'")
		List<DemandeAdministrative> findDemandeAdministrativeByUtilisateurId( @Param("utilisateurId") Long utilisateurId);
	  
	  
	  @Query("SELECT COUNT(*) FROM DemandeAdministrative d WHERE d.etatdeDemandeAdmin = 'en attente' AND d.utilisateur.id= :utilisateurId  ")
	    Long countDemandeEnAttenteParUtilisateurID( @Param("utilisateurId") Long utilisateurId);

	  @Query("SELECT COUNT(*) FROM DemandeAdministrative d WHERE d.utilisateur.id= :utilisateurId ")
	    Long countDemandeParUtilisateurID( @Param("utilisateurId") Long utilisateurId); 
	  
}
