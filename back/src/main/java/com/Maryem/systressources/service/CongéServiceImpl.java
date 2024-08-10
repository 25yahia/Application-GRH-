package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.Mail;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.repos.CongéRepository;


@Service
public class CongéServiceImpl implements CongéService {
	@Autowired
	private CongéRepository congéRepository;
	@Autowired
    private EmailServiceImpl emailserviceimpl;
	
	
	

	@Override
	public void accepterCongé(Long id) {
	Congé congé = congéRepository.findById(id).get();
	
	Utilisateur utilisateur = congé.getUtilisateur();
	congé.setetatdedemande("accepter");
	congéRepository.save(congé);
	
	
	
	Mail mail = new Mail();
	mail.setDe("mrabti.yahia25@gmail.com");
	mail.setObjet("Acceptation de votre demande de congé");
	mail.setDestinataires(utilisateur.getEmail());
	mail.setContenue("Bonjour " + utilisateur.getNom() + " " + utilisateur.getPrenom() + ",\r\n" +
	                 "Nous avons le plaisir de vous informer que votre demande de congé  a été acceptée.\r\n" +
	                 "Cordialement,\r\n" +
	                 "[2024/ 2025]");
	emailserviceimpl.envoyermail(mail);

}
	@Override
	public void refuserCongé(Long id) {
    Congé congé = congéRepository.findById(id).get();	
    Utilisateur utilisateur = congé.getUtilisateur();
	congé.setetatdedemande("refuser");
	congéRepository.save(congé);

	Mail mail = new Mail();
	mail.setDe("mrabti.yahia25@gmail.com");
	mail.setObjet("Refus de votre demande de congé");
	mail.setDestinataires(utilisateur.getEmail());
	mail.setContenue("Bonjour " + utilisateur.getNom() + " " + utilisateur.getPrenom() + ",\r\n" +
	                 "Nous regrettons de vous informer que votre demande de congé a été refusée en raison de contraintes opérationnelles.\r\n" +
	                 "Cordialement,\r\n" +
	                 "2024/2025");
	emailserviceimpl.envoyermail(mail);
	}




	@Override
	public List<Congé> getAllCongés() {
		
		return congéRepository.findAll();
	}




	@Override
	public Congé getCongét(Long id) {
		
		return congéRepository.findById(id).get();
	}




	@Override
	public Congé saveCongé(Congé g) {
		
		return congéRepository.save(g);
	}




	@Override
	public Congé updateCongé(Congé g) {
		
		return congéRepository.save(g);
	}




	@Override
	public void deleteCongéById(Long id) {
		congéRepository.deleteById(id);
		
	}














	@Override
	public long countconge() {
		
		return congéRepository.count();
	}




	@Override
	public List<Congé> findByetatdedemandeaccepter() {
		
		return congéRepository.findByetatdedemandeaccepter();
	}




	@Override
	public List<Congé> findByetatdedemandeenattente() {
		
		return congéRepository.findByetatdedemandeenattente();


	}




	@Override
	public List<Congé> findCongéEnAttente() {
		return congéRepository.findCongéEnAttente() ;
	}




	@Override
	public List<Congé> findCongéByUtilisateurId(Long utilisateurId) {
		return congéRepository.findCongéByUtilisateurId(utilisateurId);
	}
	@Override
	public long countCongeEnAttente() {
		return congéRepository.countCongeEnAttente();
	}
	@Override
	public long countCongeAccepte() {
	
		return congéRepository.countCongeAccepte();
	}
	@Override
	public long countCongeRefuse() {
		return congéRepository.countCongeRefuse() ;
	}
	@Override
	public long countCongeEnAttenteParUtilisateurID(Long utilisateurId) {
	
		return congéRepository.countCongeEnAttenteParUtilisateurID(utilisateurId) ;
	}
	@Override
	public long countCongeAccepteParUtilisateurID(Long utilisateurId) {
	
		return congéRepository.countCongeAccepteParUtilisateurID(utilisateurId);
	}
	@Override
	public long countCongeRefuseParUtilisateurID(Long utilisateurId) {
		
		return congéRepository.countCongeRefuseParUtilisateurID(utilisateurId);
	}
	@Override
	public long countCongeParUtilisateurID(Long utilisateurId) {
		return congéRepository.countCongeParUtilisateurID(utilisateurId);
	}




	










}


