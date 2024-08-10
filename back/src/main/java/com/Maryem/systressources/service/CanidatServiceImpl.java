package com.Maryem.systressources.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Maryem.systressources.entities.Candidat;
import com.Maryem.systressources.entities.Congé;
import com.Maryem.systressources.entities.Mail;
import com.Maryem.systressources.entities.Utilisateur;
import com.Maryem.systressources.repos.CandidatRepository;

@Service
public class CanidatServiceImpl implements CandidatService {
	@Autowired
	private CandidatRepository candidatRepository;
	@Autowired
    private EmailServiceImpl emailserviceimpl;
	@Override
	public List<Candidat> getAllCandidats() {
		
		return candidatRepository.findAll();
	}

	@Override
	public Candidat getCandidat(Long id) {
		
		return candidatRepository.findById(id).get();
	}

	@Override
	public long countCandidat() {
		
		return candidatRepository.count();
	}

	

	@Override
	public void accepterdemande(Long id) {
		Candidat candidat = candidatRepository.findById(id).get();
	    candidat.setEtatdeDemandeCandidat("acceptée");
	    candidatRepository.save(candidat);
	
	    Mail mail = new Mail();
		mail.setDe("mrabti.yahia25@gmail.com");
		mail.setObjet("Acceptation de votre Condidature");
		mail.setDestinataires(candidat.getEmailCandidat());
		mail.setContenue("Bonjour " + candidat.getNomCandidat() + " " + candidat.getPrenomCandidat() + ",\r\n" +
                "Nous avons le plaisir de vous informer que votre candidature a été acceptée. Nous vous remercions pour votre intérêt et nous réjouissons de vous accueillir dans notre équipe.\r\n" +
                "Cordialement,\r\n" +
                "[2024/2025]");
		emailserviceimpl.envoyermail(mail);
		}
	

	@Override
	public void refuserdemande(Long id) {
		Candidat candidat = candidatRepository.findById(id).get();
		 
		candidat.setEtatdeDemandeCandidat("refusée");
		candidatRepository.save(candidat);
		
		
		
		
		Mail mail = new Mail();
		mail.setDe("mrabti.yahia25@gmail.com");
		mail.setObjet("Refus de votre Condidature");
		mail.setDestinataires(candidat.getEmailCandidat());
		mail.setContenue("Bonjour " + candidat.getNomCandidat() + " " + candidat.getPrenomCandidat() + ",\r\n" +
                "Nous regrettons de vous informer que votre candidature n'a pas été retenue. Nous vous remercions pour votre intérêt et le temps que vous avez consacré à votre candidature.\r\n" +
                "Cordialement,\r\n" +
                "[2024/2025]");
		emailserviceimpl.envoyermail(mail);
		}
	

	@Override
	public List<Candidat> findByNomCandidat(String nomCandidat) {
		return candidatRepository.findByNomCandidat(nomCandidat);
	}

	@Override
	public List<Candidat> findAllEnAttente() {
		return candidatRepository.findAllEnAttente();
	}

	@Override
	public long countCandidatsEnAttente() {
		return candidatRepository.countCandidatsEnAttente() ;
	}

	@Override
	public long countCandidatsAccepte() {
		return candidatRepository.countCandidatsAccepte() ;
	}

	@Override
	public long countCandidatsRefuse() {
		return candidatRepository.countCandidatsRefuse();
	}

}