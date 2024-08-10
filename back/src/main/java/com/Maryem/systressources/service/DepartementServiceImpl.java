package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.DemandeAdministrative;
import com.Maryem.systressources.entities.Departement;
import com.Maryem.systressources.repos.DepartementRepository;
@Service
public class DepartementServiceImpl implements DepartementService{
	@Autowired
	DepartementRepository departementRepository;

	@Override
	public List<Departement> getAllDepartements() {
	
		return departementRepository.findAll();
	}

	@Override
	public Departement saveDepartement(Departement d) {
		
		return departementRepository.save(d);
	}

	@Override
	public Departement updateDepartement(Departement d) {  
	
		return departementRepository.save(d);
	}

	@Override
	public void deleteDepartementById(Long id) {
		departementRepository.deleteById(id);
		
	}

	@Override
	public Departement getDepartement(Long id) {
		
		return departementRepository.findById(id).get();
	}

	@Override
	public List<Departement> findBynomDepartement(String nomDepartement) {
	
		return departementRepository.findBynomDepartement(nomDepartement);
	}

	@Override
	public List<Departement> findBynomDepartementContains(String nomDepartement) {
		
		return departementRepository.findBynomDepartementContains(nomDepartement);
	}

	@Override
	public List<Departement> findByOrderBynomDepartementAsc() {
		
		return departementRepository.findByOrderBynomDepartementAsc();
	}

	@Override
	public long countDepartement() {
		
		return departementRepository.count();
	}

	

	
	

}
