package com.Maryem.systressources.repos;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.DemandeAdministrative;

@RepositoryRestResource(path = "rest6")
public interface CongéRepository extends JpaRepository<Congé, Long>{
	@Query("SELECT c FROM Congé c WHERE c.etatdedemande like 'accepter'")
	List<Congé> findByetatdedemandeaccepter();
	@Query("SELECT c FROM Congé c WHERE c.etatdedemande <> 'en attente'")
	List<Congé> findByetatdedemandeenattente();
	 @Query("SELECT c FROM Congé c WHERE c.etatdedemande = 'en attente'")
	    List<Congé> findCongéEnAttente();
	
	 
	  @Query("SELECT COUNT(*) FROM Congé c WHERE c.etatdedemande = 'en attente'")
	    Long countCongeEnAttente();
	   @Query("SELECT COUNT(*) FROM Congé c WHERE c.etatdedemande ='accepter'")
	    Long countCongeAccepte();
	   @Query("SELECT COUNT(*) FROM Congé c WHERE c.etatdedemande ='refuser'")
	    Long countCongeRefuse(); 
	 
	   @Query("SELECT COUNT(*) FROM Congé c WHERE c.etatdedemande = 'en attente' AND c.utilisateur.id= :utilisateurId  ")
	    Long countCongeEnAttenteParUtilisateurID( @Param("utilisateurId") Long utilisateurId);
	   @Query("SELECT COUNT(*) FROM Congé c WHERE c.etatdedemande ='accepter' AND c.utilisateur.id= :utilisateurId  ")
	    Long countCongeAccepteParUtilisateurID( @Param("utilisateurId") Long utilisateurId);
	   @Query("SELECT COUNT(*) FROM Congé c WHERE c.etatdedemande ='refuser' AND  c.utilisateur.id= :utilisateurId ")
	    Long countCongeRefuseParUtilisateurID( @Param("utilisateurId") Long utilisateurId); 
	   @Query("SELECT COUNT(*) FROM Congé c WHERE c.utilisateur.id= :utilisateurId ")
	    Long countCongeParUtilisateurID( @Param("utilisateurId") Long utilisateurId); 
	 
	 
	 
	 
	 @Query("SELECT c FROM Congé c WHERE 	c.utilisateur.id= :utilisateurId AND c.etatdedemande = 'en attente'")
		List<Congé> findCongéByUtilisateurId( @Param("utilisateurId") Long utilisateurId);

}
