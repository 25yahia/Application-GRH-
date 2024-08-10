package com.Maryem.systressources.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Departement;


@RepositoryRestResource(path = "rest")
public interface DepartementRepository extends JpaRepository<Departement, Long> {
	
	
	List<Departement> findBynomDepartement(String nomDepartement);
	List<Departement> findBynomDepartementContains(String nomDepartement);
	@Query("select d from Departement d order by d.nomDepartement ASC")
	List<Departement> findByOrderBynomDepartementAsc();
	

}
