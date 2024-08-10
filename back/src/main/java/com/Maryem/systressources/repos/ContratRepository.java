package com.Maryem.systressources.repos;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Contrat;




@RepositoryRestResource(path = "rest5")
public interface ContratRepository extends JpaRepository<Contrat, Long> {

	@Query("SELECT c FROM Contrat c WHERE c.typeContrat.id = :typeContratId")
    List<Contrat> findByTypeContratId(@Param("typeContratId") Long typeContratId);
	
	@Query("select c from Contrat c order by c.datesignature ASC")
	List<Contrat> findByOrderBydatesignatureContratAsc();
	
 
    

}

	



