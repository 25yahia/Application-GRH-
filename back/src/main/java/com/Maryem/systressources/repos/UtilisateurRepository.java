package com.Maryem.systressources.repos;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Employe;

import com.Maryem.systressources.entities.Utilisateur;
@RepositoryRestResource(path="rest3")
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
	
	
	@Query("select e from Employe e order by e.nom ASC")
	List<Employe> findByOrderBynomAsc();
	
	
	List<Utilisateur> findByemail(String email);

	 //public boolean modifiermotdepasse (String email,String motdepasse,String newmotdepasse);
	 
	@Query("SELECT u FROM Utilisateur u WHERE u.departement.id = :departementId AND u.archive=0 ")
	List<Utilisateur> findByDepartementId(@Param("departementId") Long departementId);
	
	@Query("SELECT u FROM Utilisateur u WHERE u.UserNName = :NameUser AND u.motdepasse = :password")
	List<Utilisateur> findUtilisateurConnecter(@Param("NameUser") String NameUser, @Param("password") String password);

	
	
	
	
	
	
}
