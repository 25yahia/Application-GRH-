package com.Maryem.systressources.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Role;
import com.Maryem.systressources.entities.TypeContrat;
@RepositoryRestResource(path = "resteTypeContrat")

public interface TypeContratRepos extends JpaRepository<TypeContrat, Long> {

	
	
	/*List<TypeContrat> findBynomTypeContratContains(String nomContrat);*/
	
}
