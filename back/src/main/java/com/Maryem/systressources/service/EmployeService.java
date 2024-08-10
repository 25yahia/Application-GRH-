package com.Maryem.systressources.service;


import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;

import com.Maryem.systressources.entities.Employe;





public interface EmployeService {
	Employe saveEmploye(Employe e);
	public List<Employe> getAllEmployes();
	
	Employe updateEmploye(Employe e);
	 void deleteEmployeById(Long id);
	 public Long countEmploye();
	public Optional <Employe> findByIdEmpl(Long id);
	List<Employe> findByemail(String email);
	 long countEmployeArchiver();
	 long countEmployeActive();
	 long countHommesActifs();
	 long countFemmesActives();
	    List<Employe> findByResponsableId(@Param("IDdepartementdeResponsable") Long responsableDepartementId);

	List<Employe> getarchive();
	List<Employe> getactive();
	public void archiverEmploye(Long id);
	  public void activerEmploye(Long id);
	  
	  
	  
	  
	    long countEmployeesJoinedInJanuary();
	    long countEmployeesJoinedInFebruary();
	    long countEmployeesJoinedInMarch();
	    long countEmployeesJoinedInApril();
	    long countEmployeesJoinedInMay();
	    long countEmployeesJoinedInSeptember();
	    long countEmployeesJoinedInOctober();
	    long countEmployeesJoinedInNovember();


	
	

}
