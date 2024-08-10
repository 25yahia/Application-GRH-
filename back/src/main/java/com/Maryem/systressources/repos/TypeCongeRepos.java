package com.Maryem.systressources.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Role;
import com.Maryem.systressources.entities.TypedeCongé;
@RepositoryRestResource(path = "restes")
public interface TypeCongeRepos extends JpaRepository<TypedeCongé, Long> {

	List<TypedeCongé> findByNomConge(String nomConge);	
	
	
	
}
