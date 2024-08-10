package com.Maryem.systressources.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Maryem.systressources.entities.Departement;
import com.Maryem.systressources.entities.Responsable;

public interface ResponsableRepository extends JpaRepository<Responsable, Long> {
	
	 @Query("SELECT COUNT(*) FROM Responsable res WHERE res.archive = 0")
	    Long countResponsableActive();

	 
	
	 
	 
}

