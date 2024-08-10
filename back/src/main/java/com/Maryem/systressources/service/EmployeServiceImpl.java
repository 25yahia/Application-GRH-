package com.Maryem.systressources.service;

import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneId;
import java.time.temporal.TemporalAdjusters;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Employe;
import com.Maryem.systressources.entities.Mail;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.repos.EmployeRepository;
@Service
public class EmployeServiceImpl implements EmployeService {
	
	@Autowired
	EmployeRepository employeRepository;
	@Autowired
    private EmailServiceImpl emailserviceimpl;
	@Override
	public Employe saveEmploye(Employe e) {
	
		Employe savedEmploye =  employeRepository.save(e);
		 sendEmployeCredentialsEmail(savedEmploye);

	        return savedEmploye;
	        
	}
	        private void sendEmployeCredentialsEmail(Employe employe) {
	            
	            Mail mail = new Mail();
	            mail.setDe("mrabti.yahia25@gmail.com");
	            mail.setObjet("Vos Données de login");
	            mail.setDestinataires(employe.getEmail());
	            mail.setContenue("Bonjour " + employe.getNom() + " " + employe.getPrenom() + ",\r\n" +
	                    "Voici vos informations de connexion pour accéder à la plateforme de la société :\r\n" +
	                    "\r\n" +
	                    "UserName : " + employe.getUserNName() + "\r\n" +
	                    "Mot de passe : " + employe.getMotdepasse() + "\r\n" +
	                    "Lien de connexion : http://localhost:4200/#/login\r\n" +
	                    "\r\n" +
	                    "Merci.\r\n" +
	                    "Cordialement,\r\n" +
	                    "Responsable Ressource humaine: yahyewii\r\n" +
	                    "MWS Engineering");

	          
	            emailserviceimpl.envoyermail(mail);
	        
	        
	        
	        
		}
		
		
		
	

	@Override
	public List<Employe> getAllEmployes() {
		
		return employeRepository.findAll();
	}

	@Override
	public Employe updateEmploye(Employe e) {
		
		return employeRepository.save(e);
	}

	@Override
	public void deleteEmployeById(Long id) {
		employeRepository.deleteById(id);
		
	}

	@Override
	public Long countEmploye() {
		
		return employeRepository.count();
	}

	@Override
	public Optional<Employe> findByIdEmpl(Long id) {
		
		return employeRepository.findById(id);
	}

	@Override
	public List<Employe> findByemail(String email) {
		
		return employeRepository.findByemail(email);
	}

	@Override
	public List<Employe> getarchive() {
		
		return employeRepository.getarchive();
	}

	@Override
	public List<Employe> getactive() {
		
		return employeRepository.getactive();
	}

	@Override
	public void archiverEmploye(Long id) {
		Employe e=employeRepository.findById(id).get();
		e.setArchive(1);
		employeRepository.save(e);
		
	}

	@Override
	public void activerEmploye(Long id) {
		Employe e=employeRepository.findById(id).get();
		e.setArchive(0);
		employeRepository.save(e);
		
	}

	@Override
	public long countEmployeArchiver() {
		return employeRepository.countEmployeArchiver();
	}

	@Override
	public long countEmployeActive() {
		return employeRepository.countEmployeActive() ;
	}

	
	/*public long countEmployeesJoinedInJune() {
	    LocalDate startOfMonth = LocalDate.now().withMonth(Month.JUNE.getValue()).withDayOfMonth(1);
	    LocalDate endOfMonth = startOfMonth.with(TemporalAdjusters.lastDayOfMonth());
	    List<Employe> employees = employeRepository.findAll();
	    long count = 0;
	    for (Employe employee : employees) {
	        Date startDate = employee.getDateEntree();
	        LocalDate localStartDate = startDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	        if (localStartDate.getMonth() == Month.JUNE && 
	                localStartDate.isAfter(startOfMonth.minusDays(1)) && 
	                localStartDate.isBefore(endOfMonth.plusDays(1))) {
	        count++;
	        }
	    }
	    return count; 
	}*/

	
	@Override
	public long countEmployeesJoinedInJanuary() {
		return employeRepository.countEmployeesJoinedInJanuary() ;
	}
	
	@Override
	public long countEmployeesJoinedInFebruary() {
		return employeRepository.countEmployeesJoinedInFebruary() ;
	}
	
	@Override
	public long countEmployeesJoinedInMarch() {
		return employeRepository.countEmployeesJoinedInMarch() ;
	}
	
	@Override
	public long countEmployeesJoinedInApril() {
		return employeRepository.countEmployeesJoinedInApril() ;
	}
	
	
	
	@Override
	public long countEmployeesJoinedInMay() {
		return employeRepository.countEmployeesJoinedInMay() ;
	}
	
	
	@Override
	public long countEmployeesJoinedInSeptember() {
		return employeRepository.countEmployeesJoinedInSeptember() ;
	}
	
	
	@Override
	public long countEmployeesJoinedInOctober() {
		return employeRepository.countEmployeesJoinedInOctober() ;
	}
	
	@Override
	public long countEmployeesJoinedInNovember() {
		return employeRepository.countEmployeesJoinedInNovember() ;
	}

	@Override
	public long countHommesActifs() {
		return employeRepository.countHommesActifs();
	}

	@Override
	public long countFemmesActives() {
		return employeRepository.countFemmesActives();
	}

	@Override
	public List<Employe> findByResponsableId(Long IDdepartementdeResponsable) {
		return employeRepository.findByResponsableId(IDdepartementdeResponsable);
	}


}
	








	

	

	
	




