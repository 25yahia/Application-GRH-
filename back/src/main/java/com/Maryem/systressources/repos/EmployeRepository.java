package com.Maryem.systressources.repos;



import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.entities.Utilisateur;

@RepositoryRestResource(path ="rest2")
public interface EmployeRepository extends JpaRepository<Employe, Long> {
	List<Employe> findByemail(String email);
	@Query("select e from Employe e where e.archive=1 ")
	List<Employe> getarchive();
	
	@Query("select e from Employe e where e.archive=0 ")
	List<Employe> getactive(); 
	   @Query("SELECT COUNT(*) FROM Employe e WHERE e.archive = 1")
	    Long countEmployeArchiver();
	   @Query("SELECT COUNT(*) FROM Employe e WHERE e.archive = 0")
	    Long countEmployeActive();
	   
	   @Query("SELECT COUNT(u) FROM Utilisateur u WHERE u.genre = 'Homme' AND u.archive = 0")
	    Long countHommesActifs();

	    @Query("SELECT COUNT(u) FROM Utilisateur u WHERE u.genre = 'Femme' AND u.archive = 0")
	    Long countFemmesActives();
	   
	    @Query("SELECT e FROM Employe e WHERE e.departement.id = :IDdepartementdeResponsable AND e.archive = 0")
	    List<Employe> findByResponsableId(@Param("IDdepartementdeResponsable") Long IDdepartementdeResponsable);

	

	   
	 /*  List<Employe> findByStartDateBetween(LocalDate start, LocalDate end);*/

	   @Query("SELECT COUNT(e) FROM Employe e WHERE FUNCTION('MONTH', e.dateEntree) = 1 AND FUNCTION('YEAR', e.dateEntree) = FUNCTION('YEAR', CURRENT_DATE)")
	    long countEmployeesJoinedInJanuary();
	   @Query("SELECT COUNT(e) FROM Employe e WHERE FUNCTION('MONTH', e.dateEntree) = 2 AND FUNCTION('YEAR', e.dateEntree) = FUNCTION('YEAR', CURRENT_DATE)")
	    long countEmployeesJoinedInFebruary();
	   @Query("SELECT COUNT(e) FROM Employe e WHERE FUNCTION('MONTH', e.dateEntree) = 3 AND FUNCTION('YEAR', e.dateEntree) = FUNCTION('YEAR', CURRENT_DATE)")
	    long countEmployeesJoinedInMarch();
	   @Query("SELECT COUNT(e) FROM Employe e WHERE FUNCTION('MONTH', e.dateEntree) = 4 AND FUNCTION('YEAR', e.dateEntree) = FUNCTION('YEAR', CURRENT_DATE)")
	    long countEmployeesJoinedInApril();
	   @Query("SELECT COUNT(e) FROM Employe e WHERE FUNCTION('MONTH', e.dateEntree) = 5 AND FUNCTION('YEAR', e.dateEntree) = FUNCTION('YEAR', CURRENT_DATE)")
	    long countEmployeesJoinedInMay();
	   @Query("SELECT COUNT(e) FROM Employe e WHERE FUNCTION('MONTH', e.dateEntree) = 9 AND FUNCTION('YEAR', e.dateEntree) = FUNCTION('YEAR', CURRENT_DATE)")
	    long countEmployeesJoinedInSeptember();
	   @Query("SELECT COUNT(e) FROM Employe e WHERE FUNCTION('MONTH', e.dateEntree) = 10 AND FUNCTION('YEAR', e.dateEntree) = FUNCTION('YEAR', CURRENT_DATE)")
	    long countEmployeesJoinedInOctober();
	   @Query("SELECT COUNT(e) FROM Employe e WHERE FUNCTION('MONTH', e.dateEntree) = 11 AND FUNCTION('YEAR', e.dateEntree) = FUNCTION('YEAR', CURRENT_DATE)")
	    long countEmployeesJoinedInNovember();
}
