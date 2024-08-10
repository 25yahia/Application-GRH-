package com.Maryem.systressources.service;

import java.util.List;

import com.Maryem.systressources.entities.DemandeAdministrative;
import com.Maryem.systressources.entities.Departement;







public interface DepartementService {
	public List<Departement> getAllDepartements();
	Departement saveDepartement(Departement d);
	Departement updateDepartement(Departement d);
	 void deleteDepartementById(Long id);
	 Departement getDepartement(Long id);
	 
	 List<Departement> findBynomDepartement(String nomDepartement);
	  List<Departement> findBynomDepartementContains(String nomDepartement);
	  List<Departement> findByOrderBynomDepartementAsc();
	   
	  long countDepartement();
}

