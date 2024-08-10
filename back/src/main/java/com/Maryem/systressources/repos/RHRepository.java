package com.Maryem.systressources.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.RH;
@RepositoryRestResource(path ="rest4")
public interface RHRepository extends JpaRepository<RH, Long> {
	List<RH> findByemail(String email);
	  @Query("SELECT COUNT(*) FROM RH R WHERE R.archive = 0")
	    Long countRHActive();
}
